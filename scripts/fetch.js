async function getWeather(loc, unit, api) {
    let weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${api}&units=${unit}`).then(response => response.json());

    if(weather.cod == "404") throw alert("City not found. Make sure your spelling is correct. To make your search more precise, add a comma and the two letter country code after the name.")

    if(localStorage.getItem('units') === "metric") { windMult = 3.6; precMult = 1; presMult = 1; visMult = 1; }
    else { windMult = 1; precMult = 0.39370; presMult = 0.02953; visMult = 0.62137 }

    localStorage.setItem('tempCurrent', Math.round(weather.main.temp));
    localStorage.setItem('feelsLike', Math.round(weather.main.feels_like));
    localStorage.setItem('condition', weather.weather[0].description.replace(/(^\w|\s\w)/g, m => m.toUpperCase())); // Thanks to https://stackoverflow.com/a/60610887
    localStorage.setItem('iconID', weather.weather[0].id);
    localStorage.setItem('humidity', weather.main.humidity);
    localStorage.setItem('pressure', parseFloat((weather.main.pressure*presMult).toFixed(2)));
    localStorage.setItem('visibility', Math.round(weather.visibility/1000*visMult));
    localStorage.setItem('windDir', degToCard(weather.wind.deg));
    localStorage.setItem('windSpeed', Math.round(weather.wind.speed*windMult));
    localStorage.setItem('lat', weather.coord.lat);
    localStorage.setItem('lon', weather.coord.lon);
    localStorage.setItem('city', weather.sys.country === 'RO' ? weather.name.replace("ş", "ș").replace("Ş", "Ș")
    .replace("ţ", "ț").replace("Ţ", "Ț") : weather.name); // API returns Romanian names with cedilla so I'm fixing them
    localStorage.setItem('sunrise', weather.sys.sunrise + weather.timezone);
    localStorage.setItem('sunset', weather.sys.sunset + weather.timezone); // Sunrise/sunset should be displayed as the location's time, with formatUnixUTC
    localStorage.setItem('updatedAt', weather.dt); // Should be displayed as your local time, with formatUnix
}

async function getForecast(lat, lon, unit, api) {
    let forecast = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${api}&units=${unit}`).then(response => response.json());

    let dailyDays = [], dailyHighs = [], dailyLows = [], dailyConditions = []; 
    for (let i = 0; i < forecast.daily.length; i++) {
        dailyDays.push(forecast.daily[i].dt + forecast.timezone_offset); // formatUnixUTC
        dailyHighs.push(Math.round(forecast.daily[i].temp.max));
        dailyLows.push(Math.round(forecast.daily[i].temp.min));
        dailyConditions.push(Math.round(forecast.daily[i].weather[0].id));
    }

    let hourlyHours = [], hourlyTemps = [], hourlyConditions = [];
    for(let i = 0; i < 24; i++) {
        hourlyHours.push(forecast.hourly[i].dt + forecast.timezone_offset); //formatUnixUTC
        hourlyTemps.push(Math.round(forecast.hourly[i].temp));
        hourlyConditions.push(Math.round(forecast.hourly[i].weather[0].id));
    }

    localStorage.setItem('uvIndex', Math.round(forecast.current.uvi));
    localStorage.setItem('chanceOfRain', parseFloat((forecast.hourly[0].pop*100).toFixed(2)));
    localStorage.setItem('precipitation', parseFloat((forecast.daily[0].rain/10*precMult || 0).toFixed(1)));
    localStorage.setItem('dailyDays', JSON.stringify(dailyDays));
    localStorage.setItem('dailyHighs', JSON.stringify(dailyHighs));
    localStorage.setItem('dailyLows', JSON.stringify(dailyLows));
    localStorage.setItem('dailyConditions', JSON.stringify(dailyConditions));
    localStorage.setItem('hourlyHours', JSON.stringify(hourlyHours));
    localStorage.setItem('hourlyTemps', JSON.stringify(hourlyTemps));
    localStorage.setItem('hourlyConditions', JSON.stringify(hourlyConditions));
}

function updateStats() {
    // Top elements
    $(".city").html(`${localStorage.getItem('city')}`);
    $(".condition").html(`${localStorage.getItem('condition')} <i class="wi wi-owm-${localStorage.getItem('iconID')}"></i>`);
    $(".degrees").html(`${localStorage.getItem('tempCurrent')}°`);

    // Middle elements
    let days = JSON.parse(localStorage.getItem('dailyDays'));
    let highs = JSON.parse(localStorage.getItem('dailyHighs'));
    let lows = JSON.parse(localStorage.getItem('dailyLows'));
    let conditions = JSON.parse(localStorage.getItem('dailyConditions'));
    let hours = JSON.parse(localStorage.getItem('hourlyHours'));
    let temps = JSON.parse(localStorage.getItem('hourlyTemps'));
    let hourlyConditions = JSON.parse(localStorage.getItem('hourlyConditions'));
    
    $("#today").html(`<tr><td class="col-Day">${formatDay(days[0])}&nbsp;&nbsp;&nbsp;<sc>today</sc></td><td class="col-Condition"><i class="wi wi-owm-${conditions[0]}"></td><td class="col-Max">${highs[0]}</td><td class="col-Min">${lows[0]}</td></tr>`);
    $(".seven").html(""); // clear old data before adding new data
    for(let i = 1; i < days.length; i++)
    $(".seven").append(`<tr><td class="col-Day">${formatDay(days[i])}</td><td class="col-Condition"><i class="wi wi-owm-${conditions[i]}"></td><td class="col-Max">${highs[i]}</td><td class="col-Min">${lows[i]}</td></tr>`);
    
    // clear old data before adding new data
    $(".twentyfour table .hour").html("");
    $(".twentyfour table .icon").html("");
    $(".twentyfour table .temperature").html("");

    for(let i = 0; i < hours.length; i++) {
        $(".twentyfour table .hour").append(`<td>${formatUTCHour(hours[i])}</td>`);
        $(".twentyfour table .icon").append(`<td><i class="wi wi-owm-${hourlyConditions[i]}"></td>`);
        $(".twentyfour table .temperature").append(`<td>${temps[i]}°</td>`);
    }

    // Bottom elements
    if(localStorage.getItem('units') === "metric") { windUnit = "km/h"; precUnit = "cm"; presUnit = "hPa"; visUnit = "km" }
    else { windUnit = "mph"; precUnit = "in"; presUnit = "inHg"; visUnit = "mi" }

    $("#sunrise").html(`${formatUnixUTC(localStorage.getItem('sunrise'))}`);
    $("#sunset").html(`${formatUnixUTC(localStorage.getItem('sunset'))}`);
    $("#chanceOfRain").html(`${localStorage.getItem('chanceOfRain')}%`);
    $("#humidity").html(`${localStorage.getItem('humidity')}%`);
    $("#wind").html(`${localStorage.getItem('windDir')} ${localStorage.getItem('windSpeed')} ${windUnit}`);
    $("#feelsLike").html(`${localStorage.getItem('feelsLike')}°`);
    $("#precipitation").html(`${localStorage.getItem('precipitation')} ${precUnit}`);
    $("#pressure").html(`${localStorage.getItem('pressure')} ${presUnit}`);
    $("#visibility").html(`${localStorage.getItem('visibility')} ${visUnit}`);
    $("#uvIndex").html(`${localStorage.getItem('uvIndex')}`);
    $("#lastUpdate").html(`${formatUnix(localStorage.getItem('updatedAt'))}`);
}

// Thanks thovan-bayard! https://gist.github.com/felipeskroski/8aec22f01dabdbf8fb6b#gistcomment-3485882
function degToCard(value) {
    value = parseFloat(value);
    if (value <= 11.25) return "N";
    value -= 11.25;
    var allDirections = ["NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];
    var dIndex = parseInt(value / 22.5);
    return allDirections[dIndex] ? allDirections[dIndex] : "N";
}

// Modeled after https://stackoverflow.com/a/847196
function formatUnixUTC(timestamp) {
    let date = new Date(timestamp * 1000);
    let hours = `0${date.getUTCHours()}`;
    let minutes = `0${date.getUTCMinutes()}`;
    return `${hours.substr(-2)}:${minutes.substr(-2)}`;
}

function formatUnix(timestamp) {
    let date = new Date(timestamp * 1000);
    let hours = `0${date.getHours()}`;
    let minutes = `0${date.getMinutes()}`;
    return `${hours.substr(-2)}:${minutes.substr(-2)}`;
}

function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return days[date.getDay()];
}

function formatUTCHour(timestamp) {
    let date = new Date(timestamp * 1000);
    let hours = `0${date.getUTCHours()}`;
    return hours.substr(-2);
}

async function fullUpdate(api, units) {
    await getWeather(localStorage.getItem('location'), units, api);
    await getForecast(localStorage.getItem('lat'), localStorage.getItem('lon'), units, api);
    updateStats();
    changeBackground();
}

function noSettings() {
    alert("It looks like you're using SweaterWeather for the first time. You will be taken to the settings page. Make sure you have an OpenWeatherMap API key ready!");
    factoryReset()
    location.replace('./settings.html');
}

$(document).ready(function() {
    if (!(localStorage.getItem('location'))) noSettings();
    fullUpdate(localStorage.getItem('api'), localStorage.getItem('units'));
});
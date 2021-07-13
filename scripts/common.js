function unsplashBackgrounds(condition) {
    let images = [];
    switch (true) {
        case (condition < 300):
            images = ["jSADgWPmKDU", "6svIKY_ML9g", "MnnXMvs4cQo", "SgLtJRPm_8U", "SuvAY-ndNO4", "ZUctozdvVtw", "xUKuhL-8_60", "zoN9Igh-SF8", "IRHNxX5y_hg", "OJpgj9dfrPQ"]; // thunderstorm (2xx)
            break;
        case (condition < 500):
            images = ["Ih4cJ1xco3c", "arXqSsF1hfg", "jeClWqN2BUU", "uQdotWkBEQ8", "qPvBmSvmohs", "Kk4uJ_ExWss", "UytSb_a2YE0", "qmHMSN7sDeI", "nMhItuB9ais", "DFOFCZ6v17g"]; // drizzle (3xx)
            break;
        case (condition < 600):
            images = ["ve-R7PCjJDk", "_EMkxLdko9k", "rNBaaxyeWWM", "Hs3dphb2J38", "8yt8kBuEqok", "_zUAcIvs-ME", "T7RlFC8dH60", "7D4KybyRgyk", "IBPgeshzHvs", "KHyyLfu8qv0"]; // rain (5xx)
            break;
        case (condition < 700):
            images = ["PzhmEp_aDU4", "hSPVuakrJqs", "_TuI8tZHlk4", "kFHz9Xh3PPU", "dqE4raxMqlo", "qIHtrP2V3C8", "IszWg_PhEGo", "xx999OYHdwY", "xpLNPVL3IJA", "k0o7x1xkLZw"]; // snow (6xx)
            break;
        case (condition < 800):
            images = ["7CME6Wlgrdk", "obQacWYxB1I", "5FHv5nS7yGg", "Yx0MjtQT3Ew", "Alkq_ht0GVk", "OowKAQM1_sE", "-ZC3-IUKDeI", "1_LM09a_MGg", "qexZLgMcbPc", "HOEMHanwFMs"]; // atmosphere, TODO: add for each (7xx)
            break;
        case (condition == 800):
            images = ["17XoczZbIbI", "JpAxWXEikTw", "7pUHeP1GRC4", "9fW4M5Kwk-4", "5shMe3QbsrI", "f1CzQiMxGpk", "N7MrTtDIMWg", "oydV3cIwuUc", "mPKQ1BrJPdU", "ROVBDer29PQ"]; // clear (800)
            break;
        case (condition < 805):
            images = ["8iZG31eXkks", "2t60-JYQ5pk", "uzpIk7_Fbdo", "hgGplX3PFBg", "e_ZxKz3_2Nc", "MpJPyPRp8sA", "n4PSXU-dCTQ", "RA6vbIVis2Y", "Rzo7hwe7rR0", "EiGCgdLd_C8"]; // clouds, TODO: add for each (801-804)
            break;
    }
    return images[Math.floor(Math.random() * images.length)];
}

function gradientBackgrounds(condition) {
    // Gradients shamelessly taken from someone else's weather web app... https://github.com/lucaskenji/weatherapp/blob/a4b37f66b9e1e397bad9b3d307a4d7bce79ca075/src/style.css
    let gradient = "";
    switch (true) {
        case (condition < 300):
            gradient = "linear-gradient(#1a1a1a, #292960)"; // thunderstorm (2xx)
            break;
        case (condition < 500):
            gradient = "linear-gradient(#a7b4d3, #525766)"; // drizzle (3xx)
            break;
        case (condition < 600):
            gradient = "linear-gradient(#828aa1, #404554)"; // rain (5xx)
            break;
        case (condition < 700):
            gradient = "linear-gradient(#e6e6e6, #89b8e1)"; // snow (6xx)
            break;
        case (condition < 800):
            gradient = "linear-gradient(#ff6600, #cc0052)"; // atmosphere, TODO: add for each (7xx)
            break;
        case (condition == 800):
            gradient = "linear-gradient(#9ac1ff, #608cd2)"; // clear (800)
            break;
        case (condition < 805):
            gradient = "linear-gradient(#9ac1ff, #e3e5e8)"; // clouds, TODO: add for each (801-804)
            break;
    }
    return gradient;
}

function changeBackground() {
    let opacity = localStorage.getItem('overlay')/100;
    let overlay = `linear-gradient(rgba(0,0,0,${opacity}),rgba(0,0,0,${opacity}))`;
    let resolution = `${localStorage.getItem('width')}x${localStorage.getItem('height')}`
    let condition = localStorage.getItem('iconID');
    switch (localStorage.getItem('bgMode')) {
        case ("gradients"):
            $('body').css('background-image', `${gradientBackgrounds(condition)}, ${overlay}`);
            break;
        case ("unsplash"):
            $('body').css('background-image', `url("https://source.unsplash.com/${unsplashBackgrounds(condition)}/${resolution}"), ${overlay}`);
            break;
        case ("featured"):
            $('body').css('background-image', `url("https://source.unsplash.com/featured/${resolution}?v=${new Date().getTime()}"), ${overlay}`);
            break;
        case ("image"):
            $('body').css('background-image', `url("${localStorage.getItem('imageURL')}"), ${overlay}`);
            break;
        case ("file"):
            $('body').css('background-image', `url("${localStorage.getItem('imageFile')}"), ${overlay}`);
            break;
        default:
            break;
    }
}

function factoryReset() {
    localStorage.setItem('units', 'metric');
    localStorage.setItem('bgMode', 'unsplash');
    localStorage.setItem('iconID', 800);
    localStorage.setItem('overlay', '50');
    localStorage.setItem('width', Math.floor(window.screen.width * window.devicePixelRatio));
    localStorage.setItem('height', Math.floor(window.screen.height * window.devicePixelRatio));
}
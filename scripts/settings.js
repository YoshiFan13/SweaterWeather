$(document).ready(function(){

    // Apply values from LocalStorage
    $('input#location').val(localStorage.getItem('location'))
    $('input#api').val(localStorage.getItem('api'))
    $('input:radio[name="units"]').filter(`[value="${localStorage.getItem('units')}"]`).attr('checked', true);
    if(localStorage.getItem('reload') == "on") $('input:checkbox[name="reload"]').attr('checked', true);
    $('input:radio[name="background"]').filter(`[value="${localStorage.getItem('bgMode')}"]`).attr('checked', true);
    $('input[type=url]').val(localStorage.getItem('imageURL'));
    $('input[name=overlay]').val(localStorage.getItem('overlay'));
    $('input[name=width]').val(localStorage.getItem('width'));
    $('input[name=height]').val(localStorage.getItem('height'));
    changeBackground();
    clearSavedLabel();

$('form').on('submit', function(event) {
    event.preventDefault();

    let loc = $('input#location').val();
    let units = $('input[name=units]:checked').val();
    let reload = $('input[name=reload]:checked').val() || null;
    let bgMode = $('input[name=background]:checked').val();
    let api = $('input#api').val();
    let imageURL = $('input[type=url]').val();
    let overlay = $('input[name=overlay]').val();
    let width = $('input[name=width]').val() || Math.floor(window.screen.width * window.devicePixelRatio);
    let height = $('input[name=height]').val() || Math.floor(window.screen.height * window.devicePixelRatio);
    if(width <= 0) width = Math.floor(window.screen.width * window.devicePixelRatio); 
    if(height <= 0) height = Math.floor(window.screen.height * window.devicePixelRatio);

    let errors = "Errors:\n";
    let anyErrors = false;
    if(!api && !localStorage.getItem('api').length) {errors += "API key missing!\n"; anyErrors = true;}
    if(!loc && !localStorage.getItem('api').length) {errors += "Location is missing!\n"; anyErrors = true;}
    if(overlay < 0 || overlay > 95) {errors += "Invalid value for overlay opacity. Input range: 0 - 95%\n"; anyErrors = true;}
    if(bgMode === "image" && !$('input[type=url]').val()) {errors += "No image URL was set. Enter a URL in the field or choose another option."; anyErrors = true;}
    if(bgMode === "file" && !localStorage.getItem('imageFile') && !$('input[type=file]')[0].files[0]) 
    {errors += "No image was uploaded or stored. Upload an image or choose another option."; anyErrors = true;}
    if(anyErrors) return alert(errors)

    // Add values to LocalStorage
    localStorage.setItem('units', units);
    localStorage.setItem('reload', reload);
    localStorage.setItem('bgMode', bgMode);
    localStorage.setItem('overlay', overlay);
    localStorage.setItem('width', width);
    localStorage.setItem('height', height);
    if (loc) localStorage.setItem('location', loc.trim());
    if (api) localStorage.setItem('api', api.trim());
    if (imageURL) localStorage.setItem('imageURL', encodeURI(imageURL.trim()));

    encodeImage();
    goBack();
})

})

function goBack() {
    // TODO: there MUST be a better way to make sure we don't leave before encoding ends (for Safari)
    setTimeout(function(){ location.replace('.'); }, 100);
  }

function encodeImage() {
    if(!$('input[type=file]')[0].files[0]) return;
    var file = $('input[type=file]')[0].files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
        localStorage.setItem('imageFile', reader.result);
    }
    reader.readAsDataURL(file);
  }

function clearSavedLabel() {
    let size = 0;
    if (localStorage.getItem('imageFile')) size = localStorage.getItem('imageFile').length;
    if(size/1024 > 1024) $('#clearSaved').html(`Clear encoded image (${parseFloat((size/1024/1024).toFixed(2))} MB)`);
    else $('#clearSaved').html(`Clear encoded image (${parseFloat((size/1024).toFixed(2))} KB)`);
}

function clearSavedImage() {
    if (window.confirm('Are you sure you want to clear the currently saved image?'))
    { localStorage.removeItem('imageFile'); clearSavedLabel() }
}

function panicButton() {
    if (window.confirm("WAIT!!! This option will reset ALL data except for your API key!! Only use this if you're experiencing issues with SweaterWeather!"))
    { 
        let api = localStorage.getItem('api'); localStorage.clear(); localStorage.setItem('api', api); 
        factoryReset(); location.reload()}
}
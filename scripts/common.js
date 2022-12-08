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
            images = ["7CME6Wlgrdk", "obQacWYxB1I", "5FHv5nS7yGg", "Yx0MjtQT3Ew", "Alkq_ht0GVk", "OowKAQM1_sE", "-ZC3-IUKDeI", "kfmQPmVUrRM", "qexZLgMcbPc", "HOEMHanwFMs"]; // atmosphere, TODO: add for each (7xx)
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

function twtzBackgrounds(condition) {
    let images = [];
    // Sourced from https://github.com/thewaytozion/Shortcuts/blob/main/HTML_Sandbox/HTML_Sites/WWalls/wwalls.json
    switch (true) {
        case (condition < 300):
            images = ["-lrmiDMsCN0", "BqKdvJ8a5TI", "LYq7W1lRal4", "PkHsrwNOfBE", "9aJb-vXVTXs", "fz5ClUtxziI", "GkDRz1VbQK0", "xprPMkq0PKI", "jJ1uPCTG8kY", "V4CDzJBLb9E", "xUKuhL-8_60", "Mla1GIXno1I", "tjod6u2RpiU", "wFN9B3s_iik", "yeK-QaJunpM", "E-Zuyev2XWo", "hn_RQhel6LU", "KmsDi5XH__0", "UaCLUp0lThg", "CITviPEzsGY", "k9IvSSCCrA4", "Ni985n79254", "7SP-NotqFrE", "qFQ9kL5IZoI", "dE68iVhaeDE", "fkgLhe19N7M", "gBhc1m9EHDE"]; // thunderstorm (2xx)
            break;
        case (condition < 500): // drizzle (3xx)
        case (condition < 502):
            images = ["w7ULTUtfccs", "gqc3HW9Lexc", "RqZZGFblpvs", "y8_-hcvH6cc", "gyNOxQw21EY", "Pp1ijectYT0", "ejG09ilWXFQ", "mYOea-xnu-k", "gllXcxhd47w", "SG4fPCsywj4", "_EMkxLdko9k", "ve-R7PCjJDk", "yeN9XfiUafY", "FobwhDUgdrk", "EhY8WYkLg6s", "yvTS5NBtY9c", "PiNGtUz5Wl8", "QK5XRA0tYcU", "Hs3dphb2J38", "qCA6EULMskk", "FnfTIaOCuaQ", "JKbyACnTvuE", "R3ofE-8DyLk", "qmHMSN7sDeI", "3iVj5SqUIvU", "RqZZGFblpvs", "RFGqwOxk3sI", "5HCKAZYC5jk", "txeKBk_cU6I", "zeP6hIOTOGU", "8w7_EiAIVzc", "nhReugydCBk", "1YHXFeOYpN0", "dOPyfp6ZvVs", "0guU7Aoo200", "lI2d1EVavJs", "vRCZ3DztaoA", "eaajoA5IeB4", "v8lfy_Xg5x4", "qmHMSN7sDeI", "RNQzHN_ekMY", "1dNujhlCTYQ"]; // rain (5xx)
            break;
        case (condition < 600):
            images = ["JyK2NreQosU", "idMJhg2oRaY", "8lQyd8wEAzI", "pv2ZlDfstXc", "We01ED9Ei6g", "ZxZQk7777R4", "a4wUKaaMGWQ", "O7Ip_uhcsmg", "kKDPBa5GmT4", "-IRA80xFg4c", "5Q5jtb1SEVo", "YvNrTC04QyY", "bWtd1ZyEy6w", "2Z-uXuaGADg", "JgDUVGAXsso", "PmE-IERJjr0", "2Z-uXuaGADg", "38Sum_PMRtk", "MU93ZoQPNB8", "T7RlFC8dH60", "g8Sq1d9Lm98", "OKlo0r3gBcQ", "rNBaaxyeWWM", "tT_SrSMhhgE", "5t4isI9DNzc", "Nw_D8v79PM4", "xkcgGV7N1CQ", "skPZrOzWgLo", "hoTDnbNRyRY", "wsfw_16qrf0", "jlwHtDfczh8", "tVm6pFQ0jho"]; // heavy rain & co. (most of 5xx)
            break
        case (condition == 602):
        case (condition == 611):
            images = ["T7RlFC8dH60", "R5SrmZPoO40", "FieW-GIYsJs", "U1pF6SJ4fs8", "dqE4raxMqlo", "KHDeVpytLuU", "QLfjlyEamV4", "IWenq-4JHqo", "USXfF_ONUGo", "IypVIE-oyFE", "1aFqFawzcAk", "vddccTqwal8", "9cOSyMj9AzU", "c_p6UONZrYQ", "lkPmiZepuz0", "vOrTxzT5KCo", "Bc3NXyX2XMk", "OHIAXICo0BI", "V6r9x_ICW-U"]; // heavy snow, sleet
            break;
        case (condition < 700):
            images = ["vOrTxzT5KCo", "SD68VmEjzdA", "lHanHtbc_Ko", "VtqqOg_eHTM", "JHyncp5UTJs", "ujKtiquD3pI", "JWJdKvJlJdw", "DlnK1KOREds", "iqhvdQdgP40", "ezwyed0CwKw", "beID8-9jOs8", "pvCAEfIa55o", "aQNy0za7x0k", "Oaec-W0b2ss", "dG8d8JYnnvA", "67t2GJcD5PI", "cbOgtT3iLtM", "cfHUNVmyYR0"]; // snow (6xx)
            break;
        case (condition == 711):
            images = ["k0m_nFJ7B20", "hDdNRqOIUKg", "5JUONGJ-jRs", "EwLUVKw8leQ", "0QUrMNyne7M", "uX52bKWTqGs", "UaiQsrXe590", "83ZAol8ozEM", "YZnibp1Pn70", "ClSYeru1HxA", "oFyvAMjOqAs", "QAA65uhKUx0", "VMDPiftMk4s", "fglv83gZaxU", "ZSfGz0ttHRQ", "OrwkD-iWgqg", "KRr9SWTsaxg", "6U-sSfBV-gM", "Fk8y2lZXbnM", "ci-k94CyUfA", "MFgEgKrhIN8", "Pia51dSIwd0", "DC61Jn6ZSM8", "SHlYXJvSP08", "lZXyGjsRnP0", "bjur_WnnLcs"]; // smoke
            break;
        case (condition < 781):
            images = ["NB3dTVw1T0o", "KVl_S7rrA1Y", "89PFnHKg8HE", "jPhXEmOxt0w", "ugnrXk1129g", "I6xyKhsCK7Q", "KQXeabDx7dI", "Fs-bcmsV-hA", "LZlU_DeNsZg", "jWD3o-Ht8ZA", "7FprFl6VIu8", "e2uTOpgW5Ec", "dTSaC-S-7fs", "yyE90v_E8dA", "nehVKBqQIPA", "OXF4xhRWQVo", "zR40wedS1aQ", "AGwUN_rOWA0", "F0rQieonv3c", "wmFTP3vbYKU", "YYXh3QHhk40", "6TP0l0xnrfw", "-U_hmajpkGs", "EcHGbi8Lakc", "UylXHkdG42s", "0_vka0lmSiU", "R6mcsVqh1P8", "a72o8w9HC2w", "7CME6Wlgrdk", "Ck3VLJ7fuyY", "qaZofx5ePm8", "gUUKEBCUWOA", "rJXka6gPGzI", "Eddog6KkeK8", "UalPm9GYtow", "ko-ckpuR81A", "j6Owh7NaQmM", "EQl-Gjg-rx4", "Yx0MjtQT3Ew", "KT3WlrL_bsg", "obQacWYxB1I", "Ybao6_A8RDI", "eCAe9kIj3bY", "16YZRWdu9dM", "Fs-bcmsV-hA", "u8QByfvOrRQ", "37ZuGYD3JOk", "T72-kQyQxtA"]; // most of atmosphere
            break;
        case (condition == 781):
            images = ["fQM8cbGY6iQ", "x8uMEwMhlg0", "N4io6EbLUhA", "F1dMNfyhd1k", "lr_FyB65Byk", "QMT9sUm6yPE", "WafDlqhMEi4", "Zus94oboIsM", "juTtCtAczUo", "Uw0FsLHXKLM", "qQ6GZBa58UI", "_9or06qUbRw", "8hBPvS_bGkA", "bgxa7MvuG7g", "P0FIdGYBoOo", "i9w4Uy1pU-s", "Uw0FsLHXKLM", "dAoDS8XeEe0", "n_3kdpSkrJo", "2xuBvG9fQ1c", "8Uk7F559sVw", "Gozztwl4n1w", "Q91ege_KSLw", "ZkpKooVihiQ", "UEyB9mrPBcc"]; // tornado
            break;
        case (condition < 802):
            images = ["G0jmpxJrtEM", "wejhq4J-UNo", "BRuffmynr9s", "2G4HSqEQe0o", "t1YPvA3CCpk", "u2ey1Y1g0dI", "mErSbLOqSJk", "eh-k6Bl1v7c", "dCG_7e1Svfs", "tKEY5x1Y-y4", "eh-k6Bl1v7c", "dCG_7e1Svfs", "ndN00KmbJ1c", "4n57wqKNQto", "kPvaqsO8SDE", "vX9Ccet70Ss", "BRuffmynr9s", "ouhfy7HchwA", "CSpjU6hYo_0", "XNIjmb6Ax04", "Gg7uKdHFb_c", "oMneOBYhJxY", "h_3bhBDOmyg", "Qsmfnw_qZR8", "V4rTwOZbsxo", "w-QsYEdDjpc", "YvOT1lJ0NPQ", "RBthQZJd_vU", "ef0sXQtnCYU", "hXXRLtTxXCU"]; // clear (800) and few clouds (801)
            break;
        case (condition == 802):
            images = ["tMxNrN-m6j4", "KVKYuYjKPnk", "O48Ja1HK8-8", "FWEzKF8B5Pw", "jJKfRPoy9B0", "NycFoDdcGh4", "gAajYgoEci8", "dovgTnlZXYc", "KVVpx8M10OY", "3Z70SDuYs5g", "BR1WANLLpDU", "mWRR1xj95hg", "GpjrhTk_oEE", "dKJXkKCF2D8", "u0ZgqJD55pE", "gUPIPcGCg28", "U8FEzONZCsg", "kVlBvCsng-8", "Dd_7xDCuuUo", "5LOhydOtTKU", "62OK9xwVA0c", "LluELtL5mK4", "mPnxwQBtUZE", "Q0CH8WkF9zI", "RdDTrEeDAV0", "bIyPcfXQDwM", "edR5EqSZZJQ", "bAXBuCBHfRc", "vFrhuBvI-hI", "8wz1Q4Q_XAg"]; // scattered clouds (802)
            break;
        case (condition == 803):
            images = ["pCH8usqjl44", "v9bnfMCyKbg", "6sf5rf8QYFE", "8P-uQaTd8rw", "C3fM8P6VPGE", "3LsocYqXWpM", "pnSwnfQpPf4", "nFSXZhBFxqg", "SN7kHauR8ps", "1Z2niiBPg5A", "ARVFsI-32Uk", "ucYWe5mzTMU", "gdE-5Oui1Y0", "bJHWJeiHfHc", "nNM9dALmmOQ", "pZ-XFIrJMtE", "y0i1lh-T0_w", "73F4pKoUkM0", "mKlvYQQj7Ls", "Hyu76loQLdk", "NwCIEX2UIL0", "0_DmODd2w24", "VIcTzkzNZR8", "IJnLGgqk6Uc", "JV78PVf3gGI"]; // broken clouds (803)
            break;
        case (condition == 804):
            images = ["RFJb7VETGdk", "glFocUiIyWo", "N0zkJiPaaTw", "TIGyVOV_UGw", "eDwCrCb0_YQ", "pFHCv0f57Wk", "Me_UNPI56k0", "vRfRM4dtBSI", "zMV7sqlJNow", "lmghmhZshX8", "qfmd9bu7IgA", "NChuVFzZeNk", "eIClB4KmFo8", "x6C5dBHkA28", "PuobOOUjX5I", "EfYdhaV63Ac", "XZqPoWco5Mc", "xiJ-Dsn3vtM", "_FkjSWGkWIU", "87ldxMnBQrY"]; // overcast clouds (804)
            break;
        default:
            images = ["49uySSA678U", "oKtRncpWNu0", "XTLISGANyy8", "i--IN3cvEjg", "L7_Wn7dtD_s", "8ooLxcx_vZ0", "Ck7b8bp5jIM", "HRYxvYDwxMc", "T7ZH_iBmBrY", "BXOXnQ26B7o", "By-tZImt0Ms"]; // this is literally called dunno in the source LOL
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
    let query = localStorage.getItem('unsplash');
    switch (localStorage.getItem('bgMode')) {
        case ("gradients"):
            $('body').css('background-image', `${overlay}, ${gradientBackgrounds(condition)}`);
            break;
        case ("unsplash"):
            $('body').css('background-image', `${overlay}, url("https://source.unsplash.com/${unsplashBackgrounds(condition)}/${resolution}")`);
            break;
        case ("twtz"):
            $('body').css('background-image', `${overlay}, url("https://source.unsplash.com/${twtzBackgrounds(condition)}/${resolution}")`);
            break;
        case ("featured"):
            $('body').css('background-image', `${overlay}, url("https://source.unsplash.com/featured/${resolution}?v=${new Date().getTime()}")`);
            break;
        case ("random"):
            $('body').css('background-image', `${overlay}, url("https://source.unsplash.com/random/${resolution}?v=${new Date().getTime()}")`);
            break;
        case ("user"):
            $('body').css('background-image', `${overlay}, url("https://source.unsplash.com/user/${query}/${resolution}?v=${new Date().getTime()}")`);
            break;
        case ("userlikes"):
            $('body').css('background-image', `${overlay}, url("https://source.unsplash.com/user/${query}/likes/${resolution}?v=${new Date().getTime()}")`);
            break;
        case ("collection"):
            $('body').css('background-image', `${overlay}, url("https://source.unsplash.com/collection/${query}/${resolution}?v=${new Date().getTime()}")`);
            break;
        case ("search"):
            $('body').css('background-image', `${overlay}, url("https://source.unsplash.com/${resolution}?${query}&v=${new Date().getTime()}")`);
            break;
        case ("searchfeatured"):
            $('body').css('background-image', `${overlay}, url("https://source.unsplash.com/featured/${resolution}?${query}&v=${new Date().getTime()}")`);
            break;
        case ("image"):
            $('body').css('background-image', `${overlay}, url("${localStorage.getItem('imageURL')}")`);
            break;
        case ("file"):
            $('body').css('background-image', `${overlay}, url("${localStorage.getItem('imageFile')}")`);
            break;
        default:
            break;
    }
}

function factoryReset() {
    localStorage.setItem('units', 'metric');
    localStorage.setItem('bgMode', 'unsplash');
    localStorage.setItem('iconID', 800);
    localStorage.setItem('blurAmount', '8');
    localStorage.setItem('overlay', '50');
    localStorage.setItem('width', Math.floor(window.screen.width * window.devicePixelRatio));
    localStorage.setItem('height', Math.floor(window.screen.height * window.devicePixelRatio));
}

// Don't panic! I only need this to check for some legacy OS X versions :)
function isSorbet() {
    return (/iPad; CPU OS 11_4/.test(navigator.userAgent)) && !((navigator.maxTouchPoints > 0) || ('ontouchstart' in window))
}

if(/(X 10[._][4-9])|(PPC Mac OS X 10_11)/.test(navigator.userAgent) || isSorbet()) document.documentElement.setAttribute("id","legacyMac");

if(localStorage.getItem('blur') == "on")
// Based on https://stackoverflow.com/a/10061479
$('head').append(`<style>body:before{filter:blur(${localStorage.getItem('blurAmount')}px); -webkit-filter:blur(${localStorage.getItem('blurAmount')}px);}</style>`);
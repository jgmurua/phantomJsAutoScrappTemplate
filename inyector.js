
//correr con phantomjs --ignore-ssl-errors=yes c:\Test\1\logindoit.js
var system = require('system');


var page = require('webpage').create();
page.viewportSize = {
    width: 1920,
    height: 1080
};

var segundo = 1000;

page.onConsoleMessage = function (str) {console.log(str);}

page.open("http://probandocosas.ddns.net:70/login?from=%2F", function (status) {

    window.setTimeout(function () {
		page.injectJs("logueame.js") ? console.log("-JS_inyectado-") : console.log("error_inyeccion");
        
        
    }, 3*segundo);

   var ixx = 1;
    window.setInterval(function() {
        page.render('/imagen/img.png');
        ixx++;
    }, 5*segundo)
 
})

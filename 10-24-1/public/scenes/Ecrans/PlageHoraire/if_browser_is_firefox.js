
function checkbrowser() {

    var browser = (function() {
        var test = function(regexp) {
            return regexp.test(window.navigator.userAgent);
        }
        switch (true) {
            case test(/Edg/i): return "edge";
            case test(/edge/i): return "edge";
            case test(/opr/i) && (!!window.opr || !!window.opera): return "opera";
            case test(/chrome/i) && !!window.chrome: return "chrome";
            case test(/trident/i): return "ie";
            case test(/firefox/i): return "firefox";
            case test(/safari/i): return "safari";
            default: return "other";
        }
    })();

    if (browser == "firefox" || browser == "other") {
    var element = document.getElementById("slider-distance");
    element.parentNode.removeChild(element);
    //we remove html fields for the chorme version

    //and we add the new ones for mozilla
    var p = document.getElementById("empty_field_for_mozilla");

    var newElement = document.createElement("span");
    newElement.setAttribute('id', "texte milieu");
    newElement.innerHTML = "Laisser l&#039acc&egrave;s aux &eacute;cran de ";
    p.appendChild(newElement);

    newElement = document.createElement("input");
    newElement.setAttribute('id', "min_slider");
    newElement.value = 18;
    newElement.style.width = "26px";
    p.appendChild(newElement);

    newElement = document.createElement("span");
    newElement.setAttribute('id', "texte milieu");
    newElement.innerHTML = "h00 jusqu&#039&agrave; ";
    p.appendChild(newElement);

    newElement = document.createElement("input");
    newElement.setAttribute('id', "max_slider");
    newElement.value = 23;
    newElement.style.width = "26px";
    p.appendChild(newElement);

    newElement = document.createElement("span");
    newElement.setAttribute('id', "texte milieu");
    newElement.innerHTML = "h00 ?";
    p.appendChild(newElement);
    }

}

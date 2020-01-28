/*
 * File Created: 2020-01-28 09:17:23
 * Author: Christophe SONNEVILLE
 * Copyright - 2020 Christophe SONNEVILLE
 */

loadTemplate('view10');

window.scrollTo(0,0);

window.addEventListener('load', function () {
    function scroll(){
    window.scrollTo(0,window.innerHeight*2);
    }

    function setSmall(){

    }
    function setMedium(){

    }
    function setLarge(){

    }


    var button = document.getElementById('begin-button');
    button.onclick = scroll;

    var small = document.getElementById('small');
    small.onclick = setSmall;
    var medium = document.getElementById('medium');
    medium.onclick = setMedium;
    var large = document.getElementById('large');
    large.onclick = setLarge;
});	
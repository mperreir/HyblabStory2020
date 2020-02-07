/*
* File Created: 2020-01-28 09:17:23
* Author: Christophe SONNEVILLE
* Copyright - 2020 Christophe SONNEVILLE
*/

window.scrollBarController = new ScrollBarController();
window.scrollBarController.setPosition(0);

view = new View1(document.getElementById('view-container'));

const paths = [
'M716.282 681.359H93.5308C139.078 553.463 -33.4378 530.465 7.27275 381.589C47.9833 232.712 183.416 296.459 228.158 238.764C272.899 181.069 164.875 143.951 166.89 69.7145C168.906 -4.52209 295.068 -30.747 335.779 54.7865C376.489 140.32 397.046 112.481 525.224 143.951C653.402 175.421 630.83 294.442 677.183 337.208C723.537 379.975 822.29 374.327 825.918 508.275C828.82 615.434 754.036 668.314 716.282 681.359Z',
'M774.334 690.081H151.583C61.0521 668.58 -13.946 598.077 3.55195 471.581C13.4359 400.129 71.3105 377.281 116.052 319.586C160.793 261.891 148.432 211.605 166.552 139.586C216.083 -57.2764 531.252 -21.2785 592.338 104.079C633.833 189.235 631.85 211.531 681.838 246.58C725.338 277.08 791.735 263.08 825.052 330.58C875.645 433.08 742.537 486.234 728.552 552.08C716.552 608.58 735.236 656.585 774.334 690.081Z'
];

window.addEventListener('load', function () {
    function scroll(){
        window.scrollTo(0,window.innerHeight);
    }

    function setSmall(){
        //this.console.log("gds");
        if(medium.className == "text selected"){
            medium.className = "text diselected";
        }else medium.className = "text";
        small.className = "text selected";
        if(large.className == "text selected"){
            large.className = "text diselected";
        }else large.className = "text";
        
        //mettre les textes en small
        body.className = "body-small";
    }
    function setMedium(){
        if(small.className == "text selected"){
            small.className = "text diselected";
        }else small.className = "text";
        medium.className = "text selected";
        if(large.className == "text selected"){
            large.className = "text diselected";
        }else large.className = "text";
        
        //mettre les textes en medium
        body.className = "body-medium";
    }
    function setLarge(){
        if(small.className == "text selected"){
            small.className = "text diselected";
        }else small.className = "text";
        large.className = "text selected";
        if(medium.className == "text selected"){
            medium.className = "text diselected";
        }else medium.className = "text";
        
        //mettre les textes en larges
        body.className = "body-large";
    }
    
    function mute(){
        sonMuteB.style.display = 'block';
        sonOnB.style.display = 'none';
        sonMuteW.style.display = 'block';
        sonOnW.style.display = 'none';
        //enlever son
        
    }
    function on(){
        sonMuteB.style.display = 'none';
        sonOnB.style.display = 'block';
        sonMuteW.style.display = 'none';
        sonOnW.style.display = 'block';
        //mettre son
    }

    function contraste(){
        console.log("t");
        if(cont){
            console.log("o");
            toggle.style.background = '#5a8d8c';
            cont = false;
            document.body.style.filter = "grayscale(0%)";
            document.body.style.filter= "hue-rotate(0deg)";
            document.body.style.filter = "contrast(100%)";
        }
        else{
            console.log("n");
            toggle.style.background = '#cb563e';
            cont = true;
            //document.body.style.filter = "grayscale(100%)";
            //document.body.style.filter= "hue-rotate(200deg)";
            document.body.style.filter = "grayscale(1) contrast(1.25)";
        }
    }

    
    var button = document.getElementById('begin-button');
    button.onclick = scroll;
    
    var small = document.getElementById('small');
    small.onclick = setSmall;
    var medium = document.getElementById('medium');
    medium.onclick = setMedium;
    var large = document.getElementById('large');
    large.onclick = setLarge;
    
    
    var sonOnB = document.getElementById('onB');
    sonOnB.onclick = mute;
    var sonMuteB = document.getElementById('muteB');
    sonMuteB.onclick = on;
    
    var sonOnW = document.getElementById('onW');
    sonOnW.onclick = mute;
    var sonMuteW = document.getElementById('muteW');
    sonMuteW.onclick = on;

    var paragraphs = document.getElementsByTagName("p");

    var toggle = document.getElementById('tog');
    var switchButton = document.getElementById('switch');
    var cont = false;
    switchButton.onclick = contraste;

    const body = this.document.body;
    text = document.getElementsByClassName('');

    var textSize = 1;
    if(small.className == "text selected"){
        //this.console.log("gds");
        textSize = 1;
        setSmall();
    }
    else if(medium.className == "text selected"){
        textSize = 2;
        setMedium();
    }
    else if(large.className == "text selected"){
        textSize = 3;
        setLarge();
    }

    const svgElement = document.getElementById('overlay-bg-svg');
    const a = anime({
        targets: svgElement.querySelector('path'),
        easing: 'linear',
        d: paths.map((p, i) => ({
            value: p,
            duration: i===0 ? 0 : 15*1000,
        })),
        loop: true,
        // duration: 30000,
        delay: (el, i) => i == 0 ? 0 : 3000,
        autoplay: true,
        endDelay: 1,
        startDelay: 1,
        elasticity: 200,
        direction: 'alternate',
    });
});	

function setBackgroundColor(col) {
    const appView = document.getElementById('app-view');
    appView.style.backgroundColor = col;
}
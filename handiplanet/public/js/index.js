/*
* File Created: 2020-01-28 09:17:23
* Author: Christophe SONNEVILLE
* Copyright - 2020 Christophe SONNEVILLE
*/
window.soundManager = new SoundManager();
window.scrollBarController = new ScrollBarController();
view = new View1(document.getElementById('view-container'));

const paths = [
'M1046.28 690.003H93.5308C139.078 562.107 -33.4378 539.109 7.27275 390.233C47.9833 241.356 250.447 292.129 308.158 247.408C356.89 209.644 354.875 152.595 356.89 78.3585C358.906 4.12191 500.5 -43.5 556.779 63.4305C600.898 147.257 709.5 100.503 835.224 152.595C957.157 203.116 960.83 303.086 1007.18 345.852C1053.54 388.619 1152.29 392.97 1155.92 526.919C1158.82 634.078 1084.04 676.958 1046.28 690.003Z',
'M1042.4 683.09H89.6465C-53.2773 617 11.5631 490.5 45.2225 448C109.818 366.438 11.5632 312 11.5632 239.589C11.5632 167.178 72.7226 25.5 360.563 150.004C530.977 223.716 656.063 -103.5 852.063 36.4994C917.654 83.3496 899.913 204.54 949.901 239.589C993.401 270.089 1059.8 256.089 1093.11 323.589C1143.71 426.089 1010.6 479.244 996.615 545.089C984.615 601.589 1003.3 649.594 1042.4 683.09Z'
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

    function contraste(){
        if(cont){
            toggle.style.background = '#5a8d8c';
            cont = false;
            document.body.style.filter = "grayscale(0%)";
            document.body.style.filter= "hue-rotate(0deg)";
            document.body.style.filter = "contrast(100%)";
        }
        else{
            toggle.style.background = '#cb563e';
            cont = true;
            //document.body.style.filter = "grayscale(100%)";
            //document.body.style.filter= "hue-rotate(200deg)";
            document.body.style.filter = "grayscale(1) contrast(1.25)";
        }
    }

    
    const button = document.getElementById('begin-button');
    button.onclick = scroll;
    
    const small = document.getElementById('small');
    small.onclick = setSmall;
    const medium = document.getElementById('medium');
    medium.onclick = setMedium;
    const large = document.getElementById('large');
    large.onclick = setLarge;
    

    const paragraphs = document.getElementsByTagName("p");

    const toggle = document.getElementById('tog');
    const switchButton = document.getElementById('switch');
    const cont = false;
    switchButton.onclick = contraste;

    const body = this.document.body;
    text = document.getElementsByClassName('');

    let textSize = 1;
    if(small.className == "text selected"){
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

function setOverlayButton(text, icon) {
    const button = document.createElement('button');
    
    const textContainer = document.createElement('div');
    const textElement = document.createElement('div');
    button.id = 'overlay-next-button';
    textElement.innerHTML = text;
    if (icon) {
        const icon = document.createElement('img');
        icon.src = 'assets/nextButtonIcon.svg';
        button.appendChild(icon);
    }
    textContainer.appendChild(textElement);
    button.appendChild(textContainer);

    button.style.opacity = '0';
    button.style.transition = 'opacity 0.2s';
    const buttonContainer = document.getElementById('overlay-footer');
    buttonContainer.appendChild(button);
    button.style.opacity = '1';
    return button;
}

function hideOverlayButton() {
    const button = document.getElementById('overlay-next-button');
    if(button != null){
        button.style.transition = "opacity 0.2s";
        button.style.opacity = "0";
        setTimeout(() => {
            button.remove();
        }, 200);
    }
}
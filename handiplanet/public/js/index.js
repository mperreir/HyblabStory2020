/*
* File Created: 2020-01-28 09:17:23
* Author: Christophe SONNEVILLE
* Copyright - 2020 Christophe SONNEVILLE
*/

view = new View1();

window.scrollTo(0,0);

window.addEventListener('load', function () {
    function scroll(){
        window.scrollTo(0,window.innerHeight);
    }
    
    function setSmall(){
        small.style.background = '#cb563e';
        medium.style.background = '#5a8d8c';
        large.style.background = '#5a8d8c';
        
        //mettre les textes en small
        text.style.fontSize = "50%" ;
    }
    function setMedium(){
        medium.style.background = '#cb563e';
        small.style.background = '#5a8d8c';
        large.style.background = '#5a8d8c';
        
        //mettre les textes en medium
        text.style.fontSize = "100%" ;
    }
    function setLarge(){
        large.style.background = '#cb563e';
        small.style.background = '#5a8d8c';
        medium.style.background = '#5a8d8c';
        
        //mettre les textes en larges
        text.style.fontSize = "150%" ;
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
    
    text = document.getElementsByClassName('')
});	

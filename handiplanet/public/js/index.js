/*
* File Created: 2020-01-28 09:17:23
* Author: Christophe SONNEVILLE
* Copyright - 2020 Christophe SONNEVILLE
*/

view = new View1(document.getElementById('view-container'));

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
        for(var i = 0; i < paragraphs.length; i++)
        {
            paragraphs[i].style.fontSize = "18px";
        }
    }
    function setMedium(){
        medium.style.background = '#cb563e';
        small.style.background = '#5a8d8c';
        large.style.background = '#5a8d8c';
        
        //mettre les textes en medium
        for(var i = 0; i < paragraphs.length; i++)
        {
            paragraphs[i].style.fontSize = "21px";
        }
    }
    function setLarge(){
        large.style.background = '#cb563e';
        small.style.background = '#5a8d8c';
        medium.style.background = '#5a8d8c';
        
        //mettre les textes en larges
        for(var i = 0; i < paragraphs.length; i++)
        {
            paragraphs[i].style.fontSize = "25px";
        }
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
        }
        else{
            console.log("n");
            toggle.style.background = '#cb563e';
            cont = true;
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


    text = document.getElementsByClassName('')
});	

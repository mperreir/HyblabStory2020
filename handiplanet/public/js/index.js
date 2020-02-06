/*
* File Created: 2020-01-28 09:17:23
* Author: Christophe SONNEVILLE
* Copyright - 2020 Christophe SONNEVILLE
*/
view = new View12Gratuit(document.getElementById('view-container'));
view.load();
//window.scrollTo(0,0);

window.addEventListener('load', function () {
    function scroll(){
        window.scrollTo(0,window.innerHeight);
    }
    
    function setSmall(){
        if(medium.className == "text selected"){
            medium.className = "text diselected";
        }else medium.className = "text";
        small.className = "text selected";
        if(large.className == "text selected"){
            large.className = "text diselected";
        }else large.className = "text";
        
        //mettre les textes en small
        for(var i = 0; i < paragraphs.length; i++)
        {
            paragraphs[i].style.fontSize = "18px";
        }
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
        for(var i = 0; i < paragraphs.length; i++)
        {
            paragraphs[i].style.fontSize = "21px";
        }
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
            document.body.style.filter = "grayscale(0%)";
            document.body.style.filter= "hue-rotate(0deg)";
            document.body.style.filter = "contrast(100%)";
        }
        else{
            console.log("n");
            toggle.style.background = '#cb563e';
            cont = true;
            //document.body.style.filter = "grayscale(100%)";
            document.body.style.filter= "hue-rotate(200deg)";
            //document.body.style.filter = "contrast(150%)";
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

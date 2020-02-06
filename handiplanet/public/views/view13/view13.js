/*
 * Project: handigo
 * Created Date: Thursday February 6th 2020
 * Author: Pierre Le Guen
 * -----
 * Last Modified: Thursday, 6th February 2020 4:34:08 pm
 * Modified By: Pierre Le Guen
 * -----
 * Copyright (c) 2020 Pierre Le Guen
 */


class View13 extends View {
    constructor(receiver){
        super('view13', receiver);
        super.load();
    }

    
    async switchToNextView(){
        // Construction d'une div temporaire positionnée en dehors
        // de l'écran pour faire entrer la prochaine view
        const tempDiv = document.createElement('div');
        document.getElementById('view-container').appendChild(tempDiv);
        tempDiv.style.position = "absolute";
        tempDiv.style.top = '0';
        tempDiv.style.left = '100%';

        // Création de la prochaine view
        const nextView = new ViewThanks(tempDiv);
        await nextView.load();
        this.view.style.animation = 'scrollTransitionHorizontal 1s forwards';
        this.view.style.webkitAnimation = 'scrollTransitionHorizontal 1s forwards';
        tempDiv.style.animation = 'scrollTransitionHorizontal 1s forwards';
        tempDiv.style.webkitAnimation = 'scrollTransitionHorizontal 1s forwards';
        window.scrollBarController.setPosition(1);
        setTimeout(() => {
            tempDiv.replaceWith = nextView.view;
            this.view.parentNode.removeChild(this.view);
        }, 1000);
    }

    linkElements(){
        // Button to next view
        this.btNext = document.getElementById('view-13-next-button');
        this.btNext.addEventListener('click', ()=>{
            this.btNext.style.transition = "opacity 0.2s";
            this.btNext.style.opacity = "0";
            this.switchToNextView();
        });
    }
}
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
        showContextView(this.view);
    }

    linkElements(){
        hideSplash();
        // Button to next view
        this.btNext = document.getElementById('view-13-next-button');
        this.btNext.addEventListener('click', ()=>{
            this.btNext.style.transition = "opacity 0.2s";
            this.btNext.style.opacity = "0";
            this.switchToNextView();
        });
    }
}
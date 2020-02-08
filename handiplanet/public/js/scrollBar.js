/*
* File Created: 2020-01-29 14:11:00
* Author: Pierre MAUPIN
* Copyright - 2020 Pierre MAUPIN
*/


class ScrollBarController {
    constructor() {
        this.points = document.getElementsByClassName('point');
        window.savedContextButtons = {};
        window.savedContextQNb = {};
        this.points[0].addEventListener('click', ()=>{
            for(let i=1; i < this.points.length; i++){
                this.points[i].className = 'point'; 
                this.points[i].parentNode.replaceChild(this.points[i].cloneNode(true), this.points[i]); // To remove event listener
            }
            this.points[0].className = 'point selected last';
            window.contextView = null;
            transitionHorizontalInvert(window.currentView, View1);
        });
    }

    setPosition(position, View) {
        for(let i=position; i < this.points.length; i++){
            this.points[i].className = 'point'; 
            this.points[i].parentNode.replaceChild(this.points[i].cloneNode(true), this.points[i]); // To remove event listener
        }
        console.log(position);
        this.points[position].className = 'point selected last';
        if(position>0) this.points[position-1].className = 'point selected';
        if(window.contextView != null) {
            window.savedContextButtons[position] = {...window.contextView.buttons};
            window.savedContextQNb[position] = window.contextView.questionNumber;
        }
        this.points[position].addEventListener('click', () => {
            window.contextView.buttons = window.savedContextButtons[position];
            window.contextView.questionNumber = window.savedContextQNb[position];
            for(let i=position; i < this.points.length; i++){
                this.points[i].className = 'point'; 
                this.points[i].parentNode.replaceChild(this.points[i].cloneNode(true), this.points[i]); // To remove event listener
            }
            this.points[position].className = 'point selected last';
            if(position>0) this.points[position-1].className = 'point selected';
            transitionHorizontalInvert(window.currentView, View);
        });
    }
}
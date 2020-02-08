/*
* File Created: 2020-01-29 14:11:00
* Author: Pierre MAUPIN
* Copyright - 2020 Pierre MAUPIN
*/


class ScrollBarController {
    constructor() {
        this.points = document.getElementsByClassName('point');
        window.savedContext = {};
    }

    setPosition(View, position) {
        for(let i=position; i < this.points.length; i++){
            this.points[i].className = 'point'; 
            this.points[i].parentNode.replaceChild(this.points[i].cloneNode(true), this.points[i]); // To remove event listener
        }
        this.points[position].className = 'point selected last';
        if(position>0) this.points[position-1].className = 'point selected';
        if(window.contextView != null) window.savedContext[position] = Object.assign(new Contexte(), window.contextView);
        this.points[position].addEventListener('click', () => {
            transitionHorizontalInvert(window.currentView, View);
            window.contextView = window.savedContext[position];
            this.setPosition(View, position);
        });
    }
}
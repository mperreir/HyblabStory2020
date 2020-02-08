/*
* File Created: 2020-01-29 14:11:00
* Author: Pierre MAUPIN
* Copyright - 2020 Pierre MAUPIN
*/


class ScrollBarController {
    constructor() {
        this.title = document.getElementById('scroll-title');
        this.points = document.getElementsByClassName('point');
        window.savedContextButtons = {};
        window.savedContextQNb = {};
        this.points[0].addEventListener('mouseover', (e)=>{
            this.title.style.opacity = '1';
            this.title.innerHTML = View1.titre;
            this.title.style.left = `${e.clientX}px`
            this.title.style.top = `${e.clientY}px`
        });
        this.points[0].addEventListener('mouseleave', ()=>{
            this.title.style.opacity = '0';
        });
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
        if(position>0) this.defineTitlePoint(position, View);
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

    defineTitlePoint(pos, View){
        this.points[pos].addEventListener('mouseover', (e)=>{
            this.title.style.opacity = '1';
            this.title.innerHTML = View.titre;
            this.title.style.left = `${e.clientX}px`
            this.title.style.top = `${e.clientY}px`
        });
        this.points[pos].addEventListener('mouseleave', ()=>{
            this.title.style.opacity = '0';
        });
    }
}
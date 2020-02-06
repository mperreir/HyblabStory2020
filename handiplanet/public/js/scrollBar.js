/*
* File Created: 2020-01-29 14:11:00
* Author: Pierre MAUPIN
* Copyright - 2020 Pierre MAUPIN
*/


class ScrollBarController {
    constructor() {
        this.points = document.getElementsByClassName('point');
        this.linkElement();
    }

    linkElement() {
        this.points[0].addEventListener('click', () => {
            this.transitionToView(View1);
            window.scrollBarController.setPosition(0);
        });
        this.points[1].addEventListener('click', () => {
            this.transitionToView(View2);
            window.scrollBarController.setPosition(1);
        });
        this.points[2].addEventListener('click', () => {
            this.transitionToView(View5);
            window.scrollBarController.setPosition(2);
        });
        this.points[3].addEventListener('click', () => {
            this.transitionToView(View8);
            window.scrollBarController.setPosition(3);
        });
        this.points[4].addEventListener('click', () => {
            this.transitionToView(View11);
            window.scrollBarController.setPosition(4);
        });
    }

    transitionToView(NewView) {
        // Construction d'une div temporaire positionnée en dehors
        // de l'écran pour faire entrer la prochaine view
        const tempDiv = document.createElement('div');
        const viewContainer = document.getElementById('view-container');
        const currentView = viewContainer.children[0];
        viewContainer.appendChild(tempDiv);
        tempDiv.style.position = 'absolute';
        tempDiv.style.top = '100%';

        // Création de la prochaine view
        const nextView = new NewView(tempDiv);
        nextView.load();

        currentView.style.animation = 'scrollTransition 1s forwards';
        currentView.style.webkitAnimation = 'scrollTransition 1s forwards';
        tempDiv.style.animation = 'scrollTransition 1s forwards';
        tempDiv.style.webkitAnimation = 'scrollTransition 1s forwards';
        setTimeout(() => {
            viewContainer.innerHTML = '';
            viewContainer.appendChild(nextView.view);
            currentView.remove();
        }, 1000);
    }

    setPosition(p) {
        for (let i = 0; i < this.points.length; i++) {
            if (i < p - 1) {
                this.points[i].className = 'point selected';
            } else if (i === p - 1) {
                this.points[i].className = 'point selected beforeLast';
            } else if (i === p) {
                this.points[i].className = 'point selected last';
            } else {
                this.points[i].className = 'point';
            }
        }
    }
}

function scrollPosition(int){
    for(var i = 0; i < points.length; i++)
        {
            if(points[i].getAttribute("data-place") < int - 1){
                points[i].className = "point selected";
            }
            else if(points[i].getAttribute("data-place") == int - 1){
                points[i].className = "point selected beforeLast";
            }
            else if(points[i].getAttribute("data-place") == int){
                points[i].className = "point selected last";
            }
            else if(points[i].getAttribute("data-place") > int){
                points[i].className = "point";
            }           
        }

}
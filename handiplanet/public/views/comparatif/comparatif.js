/*
 * File Created: 2020-02-05 20:27
 * Author: Alban LECUIVRE
 * Copyright - 2020 Alban LECUIVRE
 */

class Comparatif extends View {
    constructor(receiver) {
        super('comparatif', receiver);
    }

    linkElements() {

        // Background elements
        this.dot1 = document.getElementById('comparatif-red-ring');
        this.dot2 = document.getElementById('comparatif-green-ring');
        this.dot3 = document.getElementById('comparatif-white-ring');
        this.dot4 = document.getElementById('comparatif-green-tiny-dot');
        
        // Parallax for background elements
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX - window.innerWidth / 2;
            const y = e.clientY - window.innerHeight / 2;
            this.dot1.style.transform = `translateX(${x * 0.1}px) translateY(${y * -0.05}px)`;
            this.dot2.style.transform = `translateX(${x * -0.1}px) translateY(${y * 0.15}px)`;
            this.dot3.style.transform = `translateX(${x * -0.05}px) translateY(${y * -0.07}px)`;
            this.dot4.style.transform = `translateX(${x * 0.05}px) translateY(${y * 0.05}px)`;
        });
        this.btNext = document.getElementById('comparatif-next-button');
        this.btNext.addEventListener('click', ()=>{
            this.btNext.style.transition = "opacity 0.2s";
            this.btNext.style.opacity = "0";
            this.switchNextView();
        });
    }

    async switchNextView(){
        transitionHorizontal(this.view, ViewThanks);
    }
}
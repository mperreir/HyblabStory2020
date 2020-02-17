/*
 * File Created: 2020-02-06 07:59
 * Author: Alban LECUIVRE
 * Copyright - 2020 Alban LECUIVRE
 */

class View6Free extends View {
    constructor(receiver) {
        super('view6-free', receiver);
        
    }

    linkElements() {
        showSplash();
        setBackgroundColor('#CB563E1A', 'red');
        this.arm = document.getElementById("view-6-character-arm");
        this.body = document.getElementById('view-6-character-body');

        this.body.src = window.colorPersoManager.getAsset().back;
        // Background elements
        this.dot1 = document.getElementById('view-6-free-red-ring');
        this.dot2 = document.getElementById('view-6-free-green-dot');
        this.dot6 = document.getElementById('view-6-free-white-ring');
        this.dot4 = document.getElementById('view-6-free-green-tiny-dot');
        
        // Parallax for background elements
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX - window.innerWidth / 2;
            const y = e.clientY - window.innerHeight / 2;
            const angle = (e.clientX / window.innerWidth)*5;

            this.dot1.style.transform = `translateX(${x * -0.1}px) translateY(${y * -0.05}px)`;
            this.dot2.style.transform = `translateX(${x * -0.07}px) translateY(${y * 0.05}px)`;
            this.dot6.style.transform = `translateX(${x * -0.05}px) translateY(${y * -0.07}px)`;
            this.dot4.style.transform = `translateX(${x * 0.05}px) translateY(${y * 0.05}px)`;
            this.arm.style.transform = `translateX(-100%) rotate(${angle}deg)`;
        });
        this.btNext = setOverlayButton('Voir l\'hôtel du Centre', false, 'sound/hover/voir_hotel_centre.mp3');
        this.btNext.addEventListener('click', ()=>{
            this.switchToViewPremium();
        });
    }

    async switchToViewPremium(){
        transitionHorizontalInvert(this.view, View6Premium);
    }

    play() {
        window.soundManager.play('sound/Choix_1_liens_externes.mp3');
    }
}
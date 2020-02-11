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
        showSplash();
        setBackgroundColor('#ffffff');
        // Background elements
        this.dot1 = document.getElementById('comparatif-red-ring');
        this.dot2 = document.getElementById('comparatif-green-ring');
        this.dot3 = document.getElementById('comparatif-white-ring');
        this.dot4 = document.getElementById('comparatif-green-tiny-dot');

        this.overlaySubscribeButton = document.querySelector('#app-overlay header li');
        this.overlaySubscribeButton.style.transition = 'opacity 0.2s';
        this.overlaySubscribeButton.style.opacity = '0';
        setTimeout(() => {
            this.overlaySubscribeButton.style.display = 'none';
        });
        
        // Parallax for background elements
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX - window.innerWidth / 2;
            const y = e.clientY - window.innerHeight / 2;
            this.dot1.style.transform = `translateX(${x * 0.1}px) translateY(${y * -0.05}px)`;
            this.dot2.style.transform = `translateX(${x * -0.1}px) translateY(${y * 0.15}px)`;
            this.dot3.style.transform = `translateX(${x * -0.05}px) translateY(${y * -0.07}px)`;
            this.dot4.style.transform = `translateX(${x * 0.05}px) translateY(${y * 0.05}px)`;
        });
        this.btNext = setOverlayButton('Crédits', false, 'sound/hover/Remerciements.mp3');
        this.btNext.addEventListener('click', ()=>{
            this.switchNextView();
        });

        this.buttonContainer = document.createElement('div');

        this.replayButton = document.createElement('button');
        this.replayButton.id = 'comparatif-replay-button';
        const imgReplay = document.createElement('img');
        imgReplay.src = 'assets/replay.svg';
        const textContainer = document.createElement('div');
        const textDiv = document.createElement('div');
        textDiv.innerHTML = 'Rejouer l\'expérience';
        this.replayButton.appendChild(imgReplay);
        textContainer.appendChild(textDiv);
        this.replayButton.appendChild(textContainer);
        const footer = document.getElementById('overlay-footer');
        this.buttonContainer.appendChild(this.replayButton);

        this.subscribeButtonContainer = document.createElement('div');
        this.subscribeButtonContainer.id = 'comparatif-subscribe-button';
        this.subscribeButton = document.createElement('button');
        this.subscribeButton.innerHTML = 'Souscrire';
        this.subscribeButtonContainer.appendChild(this.subscribeButton);
        this.buttonContainer.appendChild(this.subscribeButtonContainer);
        this.buttonContainer.id = 'comparatif-button-container';
        footer.appendChild(this.buttonContainer);

        this.replayButton.addEventListener('click', () => {
            this.switchToView1();
        });

        this.replayButton.addEventListener('mouseenter', () => {
            window.soundManager.play('sound/hover/replay.mp3');
        });

        this.subscribeButton.addEventListener('click', () => {
            window.open('https://handiplanet.com/pro', '_blank');
        });
    }

    deactivate() {
        this.buttonContainer.remove();
        this.overlaySubscribeButton.style.display = 'initial';
        this.overlaySubscribeButton.style.opacity = '1';
    }

    async switchNextView(){
        transitionHorizontal(this.view, ViewThanks);
        window.scrollBarController.setPosition(5, ViewThanks);
    }

    async switchToView1() {
        window.contextView = null;
        const borderBottom = document.getElementById('overlay-footer');
        borderBottom.className = '';
        transitionHorizontalInvert(this.view, View1);
    }
}
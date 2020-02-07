class View6Premium extends View {
    constructor(receiver){
        super('view6-premium', receiver);
    }

    linkElements(){
        this.btn_like = document.getElementById('view6premium-like');
        this.smartphone = document.getElementById('view6premium-smartphone');
        this.btn_like.addEventListener('click', ()=>{
            this.smartphone.src = "./assets/view6-premium/smartphone-clicked.svg";
        });

        this.btNext = document.getElementById('view6p-next-button');
        this.btNext.addEventListener('click', () => {

        });
        // Button to next view
        this.btNext = document.getElementById('view6p-next-button');
        this.btNext.addEventListener('click', ()=>{
            this.btNext.style.transition = "opacity 0.2s";
            this.btNext.style.opacity = "0";
            this.switchView7();
        });
    }

    async switchView7(){
        // Construction d'une div temporaire positionnée en dehors
        // de l'écran pour faire entrer la prochaine view
        const tempDiv = document.createElement('div');
        document.getElementById('view-container').appendChild(tempDiv);
        tempDiv.style.position = "absolute";
        tempDiv.style.top = '0';
        tempDiv.style.left = '100%';

        // Création de la prochaine view
        const nextView = new View7(tempDiv);
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
}
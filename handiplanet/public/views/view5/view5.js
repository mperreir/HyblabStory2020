class View5 extends View {
    constructor(receiver){
        super('view5', receiver);
    }

    linkElements(){
        this.btHotelA = document.getElementById('view5-button-hotel-a');
        this.btHotelA.addEventListener('click', ()=>{
            this.btHotelA.style.transition = "opacity 0.2s";
            this.btHotelA.style.opacity = "0";
            this.switchToView6Free();
        });
        this.btHotelB = document.getElementById('view5-button-hotel-b');
        this.btHotelB.addEventListener('click', ()=>{
            this.btHotelB.style.transition = "opacity 0.2s";
            this.btHotelB.style.opacity = "0";
            this.switchToView6Premium();
        });
    }

    async switchToView6Free(){
        // Construction d'une div temporaire positionnée en dehors
        // de l'écran pour faire entrer la prochaine view
        const tempDiv = document.createElement('div');
        document.getElementById('view-container').appendChild(tempDiv);
        tempDiv.style.position = "absolute";
        tempDiv.style.top = '0';
        tempDiv.style.left = '100%';

        // Création de la prochaine view
        const nextView = new View6Free(tempDiv);
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
    async switchToView6Premium(){
        // Construction d'une div temporaire positionnée en dehors
        // de l'écran pour faire entrer la prochaine view
        const tempDiv = document.createElement('div');
        document.getElementById('view-container').appendChild(tempDiv);
        tempDiv.style.position = "absolute";
        tempDiv.style.top = '0';
        tempDiv.style.left = '100%';

        // Création de la prochaine view
        const nextView = new View6Premium(tempDiv);
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
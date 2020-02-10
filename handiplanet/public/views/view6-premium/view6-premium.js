class View6Premium extends View {
    constructor(receiver){
        super('view6-premium', receiver);
    }

    linkElements(){
        showSplash();
        setBackgroundColor('#80BEA31A');
        
        this.btn_like = document.getElementById('view6premium-like');
        this.smartphone = document.getElementById('view6premium-smartphone');
        this.btn_like.addEventListener('click', ()=>{
            this.smartphone.src = "./assets/view6-premium/smartphone-clicked.svg";
        });
        // Button to next view
        this.btNext = setOverlayButton('Quelques chiffres', true, 'sound/hover/chiffres.mp3');
        this.btNext.addEventListener('click', ()=>{
            this.switchView7();
        });
    }

    async switchView7(){
        transitionHorizontal(this.view, View7);
    }

    play() {
        window.soundManager.play('sound/Choix_2_liens_externes.mp3');
    }
}
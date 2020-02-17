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

        this.circle1 = document.getElementById('view6p-circle-1');
        this.circle2 = document.getElementById('view6p-circle-2');
        this.circle3 = document.getElementById('view6p-circle-3');

        document.addEventListener('mousemove', (e) => {
            const x = e.clientX - window.innerWidth / 2;
            const y = e.clientY - window.innerHeight / 2;
            this.circle1.style.transform = `translateX(${x * -0.1}px) translateY(${y * -0.05}px)`;
            this.circle2.style.transform = `translateX(${x * -0.05}px) translateY(${y * -0.1}px)`;
            this.circle3.style.transform = `translateX(${x * 0.08}px) translateY(${y * 0.05}px)`;
        });
    }

    async switchView7(){
        transitionHorizontal(this.view, View7);
    }

    play() {
        window.soundManager.play('sound/Choix_2_liens_externes.mp3');
    }
}
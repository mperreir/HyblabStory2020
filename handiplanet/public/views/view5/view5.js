class View5 extends View {
    static titre = 'Visiter les réseaux sociaux';
    constructor(receiver){
        super('view5', receiver);
        
    }

    linkElements(){
        showSplash();
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
        this.btHotelA.addEventListener('mouseenter', () => {
            window.soundManager.play('sound/hover/hotel_chateau.mp3');
        });
        this.btHotelB.addEventListener('mouseenter', () => {
            window.soundManager.play('sound/hover/hotel_centre.mp3');
        });

        this.cercle1 = document.getElementById('view5-cercle-1');
        this.cercle2 = document.getElementById('view5-cercle-2');
        this.cercle3 = document.getElementById('view5-cercle-3');
        this.cercle4 = document.getElementById('view5-cercle-4');

        document.addEventListener('mousemove', (e) => {
            const x = e.clientX - window.innerWidth / 2;
            const y = e.clientY - window.innerHeight / 2;
            this.cercle1.style.transform = `translateX(${x * -0.1}px) translateY(${y * -0.05}px)`;
            this.cercle2.style.transform = `translateX(${x * -0.05}px) translateY(${y * -0.1}px)`;
            this.cercle3.style.transform = `translateX(${x * 0.08}px) translateY(${y * 0.05}px)`;
            this.cercle4.style.transform = `translateX(${x * 0.05}px) translateY(${y * -0.1}px)`;
        });

    }

    async switchToView6Free(){
        transitionHorizontal(this.view, View6Free);
    }
    async switchToView6Premium(){
        transitionHorizontal(this.view, View6Premium);
    }

    play() {
        window.soundManager.play('sound/Question_liens_externes.mp3');
    }
}
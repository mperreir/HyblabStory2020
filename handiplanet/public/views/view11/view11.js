
class View11 extends View {
    constructor(receiver){
        super('view11', receiver);
        super.load();
    }

    
    async switchToView12Free(){
        transitionHorizontal(this.view, View12Gratuit);
    }
    async switchToView12Premium(){
        transitionHorizontal(this.view, View12Premium);
    }
    linkElements(){
        showSplash();
        // Background elements
        this.dot1 = document.getElementById('view-11-premium-white-ring');
        this.dot3 = document.getElementById('view-11-premium-green-ring');
        this.dot4 = document.getElementById('view-11-premium-red-tiny-dot');

        // Parallax for background elements
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX - window.innerWidth / 2;
            const y = e.clientY - window.innerHeight / 2;
            this.dot1.style.transform = `translateX(${x * -0.1}px) translateY(${y * -0.05}px)`;
            this.dot3.style.transform = `translateX(${x * -0.05}px) translateY(${y * -0.07}px)`;
            this.dot4.style.transform = `translateX(${x * 0.05}px) translateY(${y * 0.05}px)`;
        });

        this.btA = document.getElementById('view-11-button-hotel-a');
        this.btA.addEventListener('click',()=>{
            this.switchToView12Free();
        });
        this.btB = document.getElementById('view-11-button-hotel-b');
        this.btB.addEventListener('click',()=>{
            this.switchToView12Premium();
        });

        this.btA.addEventListener('mouseenter', () => {
            window.soundManager.play('sound/hover/hotel_chateau.mp3');
        });
        this.btB.addEventListener('mouseenter', () => {
            window.soundManager.play('sound/hover/hotel_centre.mp3');
        });
    }

    play() {
        window.soundManager.play('sound/Question_informations.mp3');
    }

}

View11.titre = 'Voir les informations';
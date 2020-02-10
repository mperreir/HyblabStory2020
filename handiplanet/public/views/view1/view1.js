
class View1 extends View {
    static titre = 'Introduction';
    constructor(receiver){
        super('view1', receiver);
        super.load().then(() => {
            setBackgroundColor('#ffffff');
            showSplash();
        });
    }

    
    async switchToContext(){
        showContextView(this.view);
    }

    play() {
        window.soundManager.play('sound/Intro_Wendy.mp3');
    }

    linkElements(){
        // Button to next view
        this.btNext = setOverlayButton('Continuer', false);
        this.btNext.addEventListener('click', ()=>{
            this.switchToContext();
        });

        // Background elements
        this.hotel = document.getElementById('view-1-hotel-img');
        this.luggage = document.getElementById('view-1-luggage-img');

        // Parallax for background elements
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX - window.innerWidth / 2;
            const y = e.clientY - window.innerHeight / 2;
            this.hotel.style.transform = `translateX(${x * -0.1}px) translateY(${y * -0.05}px)`;
            this.luggage.style.transform = `translateX(${x * -0.05}px) translateY(${y * -0.1}px)`;
        });

        // Switch color of character
        this.switchCharButton = document.getElementById('view-1-switch-character');
        this.switchCharButton.addEventListener('click', () => {
            this.showSelectChar();
        });

        // Select color of character
        this.selectCharContainer = document.getElementById('view-1-select-character');
        this.caracterImg = document.getElementById('view-1-character-img');

        this.selectCharButtons = document.querySelectorAll('#view-1-select-character li');

        window.colorPersoManager.addObserver((asset) => {
            this.caracterImg.src = asset.face;
        });

        // Change svg of character
        this.selectCharButtons.forEach((li, index) => {
            li.addEventListener('click', () => {
                window.colorPersoManager.setSelected(index);
                this.hideSelectChar();
            });
        });
    }

    showSelectChar() {
        // Show color selector
        this.switchCharButton.style.display = 'none';
        this.selectCharContainer.style.display = 'initial';
    }

    hideSelectChar() {
        // Hide color selector
        this.selectCharContainer.style.display = 'none';
        this.switchCharButton.style.display = 'initial';
    }
}
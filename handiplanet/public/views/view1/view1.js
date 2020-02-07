
class View1 extends View {
    constructor(receiver){
        super('view1', receiver);
        super.load().then(() => {
            setBackgroundColor('#ffffff');
        });
    }

    
    async switchToContext(){
        showContextView(this.view);
    }

    linkElements(){
        // Button to next view
        this.btNext = document.getElementById('view-1-next-button');
        this.btNext.addEventListener('click', ()=>{
            this.btNext.style.transition = "opacity 0.2s";
            this.btNext.style.opacity = "0";
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

        // Change svg of character
        const srcCharSvg = ['character-white-view1.svg', 'character-view1.svg', 'character-red-view1.svg'];
        this.selectCharButtons.forEach((li, index) => {
            li.addEventListener('click', () => {
                this.caracterImg.src = `/handiplanet/assets/${srcCharSvg[index]}`;
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
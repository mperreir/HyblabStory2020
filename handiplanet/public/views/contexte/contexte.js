
class Contexte extends View {
    constructor(receiver){
        super('contexte', receiver);
        this.load()
        .then(()=>{
            this.view = document.getElementById(this.viewName);
            this.linkElements();
        });
    }

    
    async switchToView2(){
        scrollPosition(1);
        // Construction d'une div temporaire positionnée en dehors
        // de l'écran pour faire entrer la prochaine view
        const tempDiv = document.createElement('div');
        document.getElementById('view-container').appendChild(tempDiv);
        tempDiv.style.position = "absolute";
        tempDiv.style.top = '100%';

        // Création de la prochaine view
        const nextView = new View2(tempDiv);
        await nextView.load();
        this.view.style.transition = 'transform 1s';
        tempDiv.style.transition = 'transform 1s';
        this.view.style.transform = 'translateY(-100%)';
        tempDiv.style.transform = 'translateY(-100%)';
        setTimeout(() => {
            tempDiv.replaceWith = nextView.view;
            this.view.parentNode.removeChild(this.view);
        }, 1000);
    }

    linkElements(){
        // Button to next view
        this.btNext = document.getElementById('view-1-next-button');
        this.btNext.addEventListener('click', ()=>{
            this.btNext.style.transition = 'right 1s';
            this.btNext.style.right = '-100%';
            this.switchToView2();
        });

        // Background elements
        this.hotel = document.getElementById('view-1-hotel-img');
        this.luggage = document.getElementById('view-1-luggage-img');

        // Parallax for background elements
        const vc = document.getElementById('view-container');
        vc.addEventListener('mousemove', (e)=>{
            var relX = e.pageX - vc.offsetLeft;
            var relY = e.pageY - vc.offsetTop;

            TweenMax.to(this.hotel, 1, {
                x: (relX - vc.offsetWidth/2) / vc.offsetWidth * -25,
                y: (relY - vc.offsetHeight/2) / vc.offsetHeight * -25,
                ease: Power2.easeOut
            })
            TweenMax.to(this.luggage, 1, {
                x: (relX - vc.offsetWidth/2) / vc.offsetWidth * -25,
                y: (relY - vc.offsetHeight/2) / vc.offsetHeight * -25,
                ease: Power2.easeOut
            })
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
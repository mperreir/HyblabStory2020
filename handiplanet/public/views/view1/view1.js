
class View1 extends View {
    constructor(receiver){
        super('view1', receiver);
        super.load().then(() => {

            
        });
    }

    
    async switchToContext(){
        // Construction d'une div temporaire positionnée en dehors
        // de l'écran pour faire entrer la prochaine view
        const tempDiv = document.createElement('div');
        document.getElementById('view-container').appendChild(tempDiv);
        tempDiv.style.position = "absolute";
        tempDiv.style.top = '0';
        tempDiv.style.left = '100%';

        // Création de la prochaine view
        const nextView = new Contexte(tempDiv);
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

    linkElements(){

        const svg = {
                path: 'M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z',
                pathAlt: 'M 262.9,252.2 C 210.1,338.2 273.3,400.5 298.5,520 323.7,639.6 511.2,537.2 620.3,555.7 750.6,577.8 872.2,707.4 987.3,686.5 1102,665.6 1218,547.8 1173,429.2 1128,310.6 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z',
                scaleX: 1.2,
                scaleY: 1,
                rotate: 0,
                tx: -30,
                ty: -300,
                fill: {
                    color: '#282faf',
                    duration: 500,
                    easing: 'linear'
                },
                animation: {
                    path: {
                        duration: 3000,
                        easing: 'easeOutElastic',
                        elasticity: 600
                    },
                    svg: {
                        duration: 2000,
                        easing: 'easeOutElastic'
                    }
                }
            };

            const el = document.querySelector('#view-1-svg');
            anime({
                targets: el.querySelector('path'),
                easing: 'linear',
                d: [{ value: svg.pathAlt, duration: 3500 }, { value: svg.path, duration: 3500 }],
                loop: true,
                fill: {
                    value: svg.fill.color,
                    duration: svg.fill.duration,
                    easing: svg.fill.easing
                },
                direction: 'alternate'
            });
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
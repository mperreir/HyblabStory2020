
class View3Free extends View {
    constructor(receiver) {
        super('view3-free', receiver);
    }

    async switchToViewPremium() {
        // Construction d'une div temporaire positionnée en dehors
        // de l'écran pour faire entrer la prochaine view
        const tempDiv = document.createElement('div');
        document.getElementById('view-container').appendChild(tempDiv);
        tempDiv.style.position = "absolute";
        tempDiv.style.left = '100%';
        // Création de la prochaine view
        const nextView = new View3Premium(tempDiv);
        await nextView.load();
        this.view.style.transition = 'transform 1s';
        tempDiv.style.transition = 'transform 1s';
        this.view.style.transform = 'translateX(-100%)';
        tempDiv.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            tempDiv.replaceWith = nextView.view;
            this.view.parentNode.removeChild(this.view);
        }, 1000);
    }

    linkElements() {

        // Background elements
        this.dot1 = document.getElementById('view-3-free-red-ring');
        this.dot2 = document.getElementById('view-3-free-green-dot');
        this.dot3 = document.getElementById('view-3-free-white-ring');
        this.dot4 = document.getElementById('view-3-free-green-tiny-dot');

        // Parallax for background elements
        const vc = document.getElementById('view-container');
        vc.addEventListener('mousemove', (e) => {
            var relX = e.pageX - vc.offsetLeft;
            var relY = e.pageY - vc.offsetTop;

            TweenMax.to(this.dot1, 1, {
                x: (relX - vc.offsetWidth / 2) / vc.offsetWidth * -150,
                y: (relY - vc.offsetHeight / 2) / vc.offsetHeight * -50,
                ease: Power2.easeOut
            })
            TweenMax.to(this.dot2, 1, {
                x: (relX - vc.offsetWidth / 2) / vc.offsetWidth * -50,
                y: (relY - vc.offsetHeight / 2) / vc.offsetHeight * -75,
                ease: Power2.easeOut
            })
            TweenMax.to(this.dot3, 1, {
                x: (relX - vc.offsetWidth / 2) / vc.offsetWidth * -100,
                y: (relY - vc.offsetHeight / 2) / vc.offsetHeight * 150,
                ease: Power2.easeOut
            })
            TweenMax.to(this.dot4, 1, {
                x: (relX - vc.offsetWidth / 2) / vc.offsetWidth * 50,
                y: (relY - vc.offsetHeight / 2) / vc.offsetHeight * 100,
                ease: Power2.easeOut
            })
        });

        this.btNext = document.getElementById('view-3-free-next-button');
        this.btNext.addEventListener('click', ()=>{
            this.switchToViewPremium();
        });
    }
}
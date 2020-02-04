
class View3Premium extends View {
    constructor(receiver) {
        super('view3-premium', receiver);
    }


    async switchToView4() {
        // Construction d'une div temporaire positionnée en dehors
        // de l'écran pour faire entrer la prochaine view
        const tempDiv = document.createElement('div');
        document.getElementById('view-container').appendChild(tempDiv);
        tempDiv.style.position = "absolute";
        tempDiv.style.top = '100%';
        // Création de la prochaine view
        const nextView = new View4(tempDiv);
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

    linkElements() {
        // Button to next view
        this.btNext = document.getElementById('view-3-premium-next-button');
        this.btNext.addEventListener('click', ()=>{
            this.switchToView4();
        });
        // Background elements
        this.dot1 = document.getElementById('view-3-premium-white-ring');
        this.dot2 = document.getElementById('view-3-premium-dot');
        this.dot3 = document.getElementById('view-3-premium-green-ring');
        this.dot4 = document.getElementById('view-3-premium-red-tiny-dot');

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
    }
}
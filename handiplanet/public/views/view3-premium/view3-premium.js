
class View3Premium extends View {
    constructor(receiver) {
        super('view3-premium', receiver);
    }


    async switchToView2() {
    }

    linkElements() {

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
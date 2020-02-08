
class View3Free extends View {
    constructor(receiver) {
        super('view3-free', receiver);
    }

    async switchToViewPremium() {
        transitionHorizontalInvert(this.view, View3Premium);
    }

    linkElements() {
        showSplash();
        setBackgroundColor('#CB563E1A', 'red');
        this.btNext = setOverlayButton('Voir l\'hôtel du Centre', false);
        // Background elements
        this.dot1 = document.getElementById('view-3-free-red-ring');
        this.dot2 = document.getElementById('view-3-free-green-dot');
        this.dot3 = document.getElementById('view-3-free-white-ring');
        this.dot4 = document.getElementById('view-3-free-green-tiny-dot');
        
        // Parallax for background elements
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX - window.innerWidth / 2;
            const y = e.clientY - window.innerHeight / 2;
            this.dot1.style.transform = `translateX(${x * -0.1}px) translateY(${y * -0.05}px)`;
            this.dot2.style.transform = `translateX(${x * -0.07}px) translateY(${y * 0.1}px)`;
            this.dot3.style.transform = `translateX(${x * -0.05}px) translateY(${y * -0.07}px)`;
            this.dot4.style.transform = `translateX(${x * 0.05}px) translateY(${y * 0.05}px)`;
        });
        this.btNext.addEventListener('click', ()=>{
            this.switchToViewPremium();
        });
    }
}
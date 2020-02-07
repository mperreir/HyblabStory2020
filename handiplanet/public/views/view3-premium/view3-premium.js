
class View3Premium extends View {
    constructor(receiver) {
        super('view3-premium', receiver);
    }


    async switchToView4() {
        transitionHorizontal(this.view, View4);
    }

    linkElements() {
        showSplash();
        setBackgroundColor('#80BEA31A');
        // Button to next view
        this.btNext = document.getElementById('view-3-premium-next-button');
        this.btNext.addEventListener('click', ()=>{
            this.btNext.style.transition = "opacity 0.2s";
            this.btNext.style.opacity = "0";
            this.switchToView4();
        });
        // Background elements
        this.dot1 = document.getElementById('view-3-premium-white-ring');
        this.dot2 = document.getElementById('view-3-premium-dot');
        this.dot3 = document.getElementById('view-3-premium-green-ring');
        this.dot4 = document.getElementById('view-3-premium-red-tiny-dot');

        // Parallax for background elements
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX - window.innerWidth / 2;
            const y = e.clientY - window.innerHeight / 2;
            this.dot1.style.transform = `translateX(${x * -0.1}px) translateY(${y * -0.05}px)`;
            this.dot2.style.transform = `translateX(${x * -0.07}px) translateY(${y * 0.1}px)`;
            this.dot3.style.transform = `translateX(${x * -0.05}px) translateY(${y * -0.07}px)`;
            this.dot4.style.transform = `translateX(${x * 0.05}px) translateY(${y * 0.05}px)`;
        });
    }
}
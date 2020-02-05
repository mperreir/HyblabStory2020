
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
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX - window.innerWidth / 2;
            const y = e.clientY - window.innerHeight / 2;
            this.dot1.style.transform = `translateX(${x * -0.1}px) translateY(${y * -0.05}px)`;
            this.dot2.style.transform = `translateX(${x * -0.07}px) translateY(${y * 0.1}px)`;
            this.dot3.style.transform = `translateX(${x * -0.05}px) translateY(${y * -0.07}px)`;
            this.dot4.style.transform = `translateX(${x * 0.05}px) translateY(${y * 0.05}px)`;
        });
        this.btNext = document.getElementById('view-3-free-next-button');
        this.btNext.addEventListener('click', ()=>{
            this.switchToViewPremium();
        });
    }
}
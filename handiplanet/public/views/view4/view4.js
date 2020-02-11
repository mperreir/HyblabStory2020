
class View4 extends View {
    constructor(receiver){
        super('view4', receiver);
    }

    
    async switchToNextView(){
        showContextView(this.view);
    }

    linkElements(){
        hideSplash();
        // Button to next view
        this.btNext = setOverlayButton('Retrouver Wendy', false, 'sound/hover/go_to_wendy.mp3');
        const borderBottom = document.getElementById('overlay-footer');
        borderBottom.className = 'hide-after';
        this.btNext.addEventListener('click', ()=>{
            this.switchToNextView();
        });
    }

    deactivate() {
        const borderBottom = document.getElementById('overlay-footer');
        borderBottom.className = '';
    }

    play() {
        window.soundManager.play('sound/Data_1.mp3');
    }

    runAnim() {
        const premiumRect = document.getElementById('view-4-premium-rect');
        const freeRect = document.getElementById('view-4-free-rect');
        premiumRect.className = 'premium-rect-anim';
        freeRect.className = 'free-rect-anim';
    }
}
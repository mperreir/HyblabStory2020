
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
        this.btNext.addEventListener('click', ()=>{
            this.switchToNextView();
        });
    }

    play() {
        window.soundManager.play('sound/Data_1.mp3');
    }
}
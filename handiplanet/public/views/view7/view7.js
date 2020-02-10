
class View7 extends View {
    constructor(receiver){
        super('view7', receiver);
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
        window.soundManager.play('sound/Data_3.mp3');
    }
}
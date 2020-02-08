
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
        this.btNext = setOverlayButton('Retrouver Wendy', false);
        this.btNext.addEventListener('click', ()=>{
            this.switchToNextView();
        });
    }
}
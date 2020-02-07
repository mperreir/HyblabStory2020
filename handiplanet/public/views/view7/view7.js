
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
        this.btNext = document.getElementById('view-7-next-button');
        this.btNext.addEventListener('click', ()=>{
            this.btNext.style.transition = "opacity 0.2s";
            this.btNext.style.opacity = "0";
            this.switchToNextView();
        });
    }
}
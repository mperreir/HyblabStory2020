
class View4 extends View {
    constructor(receiver){
        super('view4', receiver);
        super.load();
    }

    
    async switchToNextView(){
    
    }

    linkElements(){
        // Button to next view
        this.btNext = document.getElementById('view-4-next-button');
        this.btNext.addEventListener('click', ()=>{
            
        });
    }

    showSelectChar() {
        // Show color selector
        this.switchCharButton.style.display = 'none';
        this.selectCharContainer.style.display = 'initial';
    }

    hideSelectChar() {
        // Hide color selector
        this.selectCharContainer.style.display = 'none';
        this.switchCharButton.style.display = 'initial';
    }
}
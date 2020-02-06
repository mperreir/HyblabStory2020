
class View4 extends View {
    constructor(receiver){
        super('view4', receiver);
    }

    
    async switchToNextView(){
    
    }

    linkElements(){
        // Button to next view
        this.btNext = document.getElementById('view-4-next-button');
        this.btNext.addEventListener('click', ()=>{
            
        });
    }
}
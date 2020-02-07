
class View2 extends View {
    constructor(receiver){
        super('view2', receiver);
    }
    
    linkElements(){
        setBackgroundColor('#ffffff');
        this.btFree = document.getElementById('button-hotel-a');
        this.btFree.addEventListener('click', ()=>{
            this.switchToViewFree();
        });
        this.btPremium = document.getElementById('button-hotel-b');
        this.btPremium.addEventListener('click', ()=>{
            this.switchToViewPremium();
        });
    }

    async switchToViewFree() {
        transitionHorizontal(this.view, View3Free);
    }

    async switchToViewPremium() {
        transitionHorizontal(this.view, View3Premium);
    }
}
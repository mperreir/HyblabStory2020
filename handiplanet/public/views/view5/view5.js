class View5 extends View {
    constructor(receiver){
        super('view5', receiver);
        
    }

    linkElements(){
        showSplash();
        this.btHotelA = document.getElementById('view5-button-hotel-a');
        this.btHotelA.addEventListener('click', ()=>{
            this.btHotelA.style.transition = "opacity 0.2s";
            this.btHotelA.style.opacity = "0";
            this.switchToView6Free();
        });
        this.btHotelB = document.getElementById('view5-button-hotel-b');
        this.btHotelB.addEventListener('click', ()=>{
            this.btHotelB.style.transition = "opacity 0.2s";
            this.btHotelB.style.opacity = "0";
            this.switchToView6Premium();
        });
    }

    async switchToView6Free(){
        transitionHorizontal(this.view, View6Free);
    }
    async switchToView6Premium(){
        transitionHorizontal(this.view, View6Premium);
    }
}
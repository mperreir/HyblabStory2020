class View6Premium extends View {
    constructor(receiver){
        super('view6-premium', receiver);
    }

    linkElements(){
        this.btn_like = document.getElementById('view6premium-like');
        this.smartphone = document.getElementById('view6premium-smartphone');
        this.btn_like.addEventListener('click', ()=>{
            this.smartphone.src = "./assets/view6-premium/smartphone-clicked.svg";
        });

        this.btNext = document.getElementById('view6p-next-button');
        this.btNext.addEventListener('click', () => {

        });
        // Button to next view
        this.btNext = document.getElementById('view6p-next-button');
        this.btNext.addEventListener('click', ()=>{
            this.btNext.style.transition = "opacity 0.2s";
            this.btNext.style.opacity = "0";
            this.switchView7();
        });
    }

    async switchView7(){
        transitionHorizontal(this.view, View7);
    }
}
class View1 extends View {
    constructor(){
        super('view1', document.getElementById('view-container'));
        this.load()
        .then(()=>{
            this.view = document.getElementById(this.viewName);
            this.linkElements();
            this.nextView = new View2();
        });
    }

    
    switchToView2(){
        
    }

    linkElements(){
        this.btNext = document.getElementById('view-1-next-button');
        this.btNext.addEventListener('click', ()=>{
            console.log('Hey c\'est Wendy');
        });
    }
}
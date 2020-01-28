class View2 extends View {
    constructor(){
        const tempDiv = document.createElement('div');
        tempDiv.setAttribute("id", "tempDiv");
        tempDiv.style.top = '100%';
        super('view1', tempDiv);
        this.load()
        .then(()=>{
            this.tempDiv = tempDiv;
            this.view = document.getElementById(this.viewName);
            //this.nextView1 = new View3();
            //this.nextView2 = new View4();
        });
    }
}

// this.tempDiv.parentNode.removeChild(this.tempDiv)
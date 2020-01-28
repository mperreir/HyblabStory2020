
class View2 extends View {
    constructor(){
        const tempDiv = document.createElement('div');
        document.getElementById('view-container').appendChild(tempDiv);
        tempDiv.setAttribute("id", "tempDiv");
        tempDiv.style.position = "absolute";
        tempDiv.style.top = '100%';
        super('view2', tempDiv);
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
class View2 extends View {
    constructor(){
        this.tempDiv = document.createElement('div');
        this.tempDiv.setAttribute("id", "tempDiv");
        this.tempDiv.style.top = '100%';
        super('view1', this.tempDiv);
        this.view = document.getElementById(this.viewName);
        //this.nextView1 = new View3();
        //this.nextView2 = new View4();
    }
}
class View1 extends View {
    constructor(){
        super('view1', document.getElementById('view-container'));
        this.view = document.getElementById('view1');
        this.nextView = new View2();
    }
}
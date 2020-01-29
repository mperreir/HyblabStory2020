
class View2 extends View {
    constructor(receiver){
        super('view2', receiver);
    }

    load() {
        return new Promise((resolve) => {
            super.load()
            .then(()=>{
                
                this.view = document.getElementById(this.viewName);
                //this.nextView1 = new View3();
                //this.nextView2 = new View4();
                resolve();
            });
        });
    }
}
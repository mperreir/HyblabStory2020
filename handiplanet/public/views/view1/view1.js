
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
        this.view.style.transition = 'transform 1s';
        this.nextView.tempDiv.style.transition = `transform 1s`;
        this.view.style.transform = `translateY(-100%)`;
        this.nextView.tempDiv.style.transform = `translateY(-100%)`;
        setTimeout(() => {
            this.nextView.tempDiv.replaceWith = this.nextView.view;
        }, 1000);
    }

    linkElements(){
        this.btNext = document.getElementById('view-1-next-button');
        this.btNext.addEventListener('click', ()=>{
            this.switchToView2();
        });
    }
}
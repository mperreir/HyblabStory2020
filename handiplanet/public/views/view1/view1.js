
class View1 extends View {
    constructor(){
        super('view1', document.getElementById('view-container'));
        this.load()
        .then(()=>{
            this.view = document.getElementById(this.viewName);
            this.linkElements();
        });
    }

    
    async switchToView2(){
        const nextView = new View2();
        await nextView.load();
        this.view.style.transition = 'transform 1s';
        nextView.tempDiv.style.transition = `transform 1s`;
        this.view.style.transform = `translateY(-100%)`;
        nextView.tempDiv.style.transform = `translateY(-100%)`;
        setTimeout(() => {
            nextView.tempDiv.replaceWith = nextView.view;
        }, 1000);
    }

    linkElements(){
        this.btNext = document.getElementById('view-1-next-button');
        this.btNext.addEventListener('click', ()=>{
            this.switchToView2();
        });
    }
}
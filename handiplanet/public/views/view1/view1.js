
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
            this.btNext.style.display = 'none';
            this.switchToView2();
        });

        // Switch color of character
        this.switchCharButton = document.getElementById('view-1-switch-character');
        this.switchCharButton.addEventListener('click', () => {
            this.showSelectChar();
        });

        // Select color of character
        this.selectCharContainer = document.getElementById('view-1-select-character');
        this.caracterImg = document.getElementById('view-1-charactere-img');

        this.selectCharButtons = document.querySelectorAll('#view-1-select-character li');

        // Change svg of character
        const srcCharSvg = ['character-white-view1.svg', 'character-view1.svg', 'character-red-view1.svg'];
        this.selectCharButtons.forEach((li, index) => {
            li.addEventListener('click', () => {
                this.caracterImg.src = `/handiplanet/assets/${srcCharSvg[index]}`;
                this.hideSelectChar();
            });
        });
    }

    showSelectChar() {
        // Show color selector
        this.switchCharButton.style.display = 'none';
        this.selectCharContainer.style.display = 'initial';
    }

    hideSelectChar() {
        // Hide color selector
        this.selectCharContainer.style.display = 'none';
        this.switchCharButton.style.display = 'initial';
    }
}
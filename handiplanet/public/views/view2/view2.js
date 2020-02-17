
class View2 extends View {
    constructor(receiver){
        super('view2', receiver);
    }
    
    linkElements(){
        setBackgroundColor('#ffffff');
        showSplash();
        this.btFree = document.getElementById('button-hotel-a');
        this.btFree.addEventListener('click', ()=>{
            this.switchToViewFree();
        });
        this.btPremium = document.getElementById('button-hotel-b');
        this.btPremium.addEventListener('click', ()=>{
            this.switchToViewPremium();
        });

        this.btFree.addEventListener('mouseenter', () => {
            window.soundManager.play('sound/hover/hotel_chateau.mp3');
        });
        this.btPremium.addEventListener('mouseenter', () => {
            window.soundManager.play('sound/hover/hotel_centre.mp3');
        });
    }

    play() {
        window.soundManager.play('sound/Question_photos.mp3');
    }

    async switchToViewFree() {
        transitionHorizontal(this.view, View3Free);
    }

    async switchToViewPremium() {
        transitionHorizontal(this.view, View3Premium);
    }

    deactivate() {
        this.btFree.remove();
        this.btPremium.remove();
    }
}

View2.titre = 'Visionner les photos';
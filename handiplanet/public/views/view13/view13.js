
class View13 extends View {
    constructor(receiver){
        super('view13', receiver);
        super.load();
    }

    
    async switchToNextView(){
        scrollPosition(1);
        // Construction d'une div temporaire positionnée en dehors
        // de l'écran pour faire entrer la prochaine view
        const tempDiv = document.createElement('div');
        document.getElementById('view-container').appendChild(tempDiv);
        tempDiv.style.position = 'absolute';
        tempDiv.style.top = '100%';

        // Création de la prochaine view
        window.contextView = new Contexte(tempDiv);
        this.view.style.animation = 'scrollTransition 1s forwards';
        this.view.style.webkitAnimation = 'scrollTransition 1s forwards';
        tempDiv.style.animation = 'scrollTransition 1s forwards';
        tempDiv.style.webkitAnimation = 'scrollTransition 1s forwards';
        setTimeout(() => {
            document.getElementById('view-container').innerHTML = '';
            document.getElementById('view-container').appendChild(window.contextView.view);
            this.view.remove();
        }, 1000);
    }

    linkElements(){
        // Button to next view
        this.btNext = document.getElementById('view-13-next-button');
        this.btNext.addEventListener('click', ()=>{
            this.switchToNextView();
        });
    }
}
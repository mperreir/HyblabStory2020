
class Contexte extends View {
    constructor(receiver){
        super('contexte', receiver);
        this.load()
        .then(()=>{
            this.view = document.getElementById(this.viewName);

            this.position = 1;
            this.text1 = document.getElementById('context-1');
            this.text2 = document.getElementById('context-2');
            this.text3 = document.getElementById('context-3');
            this.contact = document.getElementById('contexte-contact');
            this.contact.addEventListener('click', ()=>{
                this.contact.className = "contexte-done";
                this.position = this.position+1;
                if(this.position == 2){
                    this.text1.className = "contexte-nonActive";
                    this.text2.className = "contexte-active";
                }
                if(this.position == 3){
                    this.text2.className = "contexte-nonActive";
                    this.text3.className = "contexte-active";
                }
                this.switchToContact();
            });
            this.reseau = document.getElementById('contexte-reseau');
            this.reseau.addEventListener('click', ()=>{
                this.reseau.className = "contexte-done";
                this.position = this.position+1;
                if(this.position == 2){
                    this.text1.className = "contexte-nonActive";
                    this.text2.className = "contexte-active";
                }
                if(this.position == 3){
                    this.text2.className = "contexte-nonActive";
                    this.text3.className = "contexte-active";
                }
                this.switchToReseau();
            });
            this.info = document.getElementById('contexte-info');
            this.info.addEventListener('click', ()=>{
                this.info.className = "contexte-done";
                this.position = this.position+1;
                if(this.position == 2){
                    this.text1.className = "contexte-nonActive";
                    this.text2.className = "contexte-active";
                }
                if(this.position == 3){
                    this.text2.className = "contexte-nonActive";
                    this.text3.className = "contexte-active";
                }
                this.switchToInfo();
            });

            // Background elements
        this.dot1 = document.getElementById('contexte-white-ring');
        this.dot2 = document.getElementById('contexte-green-ring');
        this.dot3 = document.getElementById('contexte-yellow-tiny-dot');
        this.dot4 = document.getElementById('contexte-red-tiny-dot');

        document.addEventListener('mousemove', (e) => {
            const x = e.clientX - window.innerWidth / 2;
            const y = e.clientY - window.innerHeight / 2;
            this.dot1.style.transform = `translateX(${x * -0.1}px) translateY(${y * -0.05}px)`;
            this.dot2.style.transform = `translateX(${x * -0.07}px) translateY(${y * 0.1}px)`;
            this.dot3.style.transform = `translateX(${x * -0.05}px) translateY(${y * -0.07}px)`;
            this.dot4.style.transform = `translateX(${x * 0.05}px) translateY(${y * 0.05}px)`;
        });

        });

    }

    
    async switchToContact(){
        // Construction d'une div temporaire positionnée en dehors
        // de l'écran pour faire entrer la prochaine view
        const tempDiv = document.createElement('div');
        document.getElementById('view-container').appendChild(tempDiv);
        tempDiv.style.position = "absolute";
        tempDiv.style.top = '100%';

        // Création de la prochaine view
        const nextView = new View8(tempDiv);

        this.view.style.animation = 'scrollTransition 1s forwards';
        this.view.style.webkitAnimation = 'scrollTransition 1s forwards';
        tempDiv.style.animation = 'scrollTransition 1s forwards';
        tempDiv.style.webkitAnimation = 'scrollTransition 1s forwards';
        window.scrollBarController.setPosition(3);
        setTimeout(() => {
            document.getElementById('view-container').innerHTML = '';
            document.getElementById('view-container').appendChild(nextView.view);
            this.view.style.animation = '';
            this.view.style.webkitAnimation = '';
        }, 1000);
    }
    async switchToReseau(){
        // Construction d'une div temporaire positionnée en dehors
        // de l'écran pour faire entrer la prochaine view
        const tempDiv = document.createElement('div');
        document.getElementById('view-container').appendChild(tempDiv);
        tempDiv.style.position = "absolute";
        tempDiv.style.top = '100%';

        // Création de la prochaine view
        const nextView = new View5(tempDiv);

        this.view.style.animation = 'scrollTransition 1s forwards';
        this.view.style.webkitAnimation = 'scrollTransition 1s forwards';
        tempDiv.style.animation = 'scrollTransition 1s forwards';
        tempDiv.style.webkitAnimation = 'scrollTransition 1s forwards';
        window.scrollBarController.setPosition(3);
        setTimeout(() => {
            document.getElementById('view-container').innerHTML = '';
            document.getElementById('view-container').appendChild(nextView.view);
            this.view.style.animation = '';
            this.view.style.webkitAnimation = '';
        }, 1000);
    }
    async switchToInfo(){
        // Construction d'une div temporaire positionnée en dehors
        // de l'écran pour faire entrer la prochaine view
        const tempDiv = document.createElement('div');
        document.getElementById('view-container').appendChild(tempDiv);
        tempDiv.style.position = "absolute";
        tempDiv.style.top = '100%';

        // Création de la prochaine view
        const nextView = new View11(tempDiv);

        this.view.style.animation = 'scrollTransition 1s forwards';
        this.view.style.webkitAnimation = 'scrollTransition 1s forwards';
        tempDiv.style.animation = 'scrollTransition 1s forwards';
        tempDiv.style.webkitAnimation = 'scrollTransition 1s forwards';
        window.scrollBarController.setPosition(5);
        setTimeout(() => {
            document.getElementById('view-container').innerHTML = '';
            document.getElementById('view-container').appendChild(nextView.view);
            this.view.style.animation = '';
            this.view.style.webkitAnimation = '';
        }, 1000);
    }

}
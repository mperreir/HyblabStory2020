
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
            });

            // Background elements
        this.dot1 = document.getElementById('contexte-white-ring');
        this.dot2 = document.getElementById('contexte-green-ring');
        this.dot3 = document.getElementById('contexte-yellow-tiny-dot');
        this.dot4 = document.getElementById('contexte-red-tiny-dot');

        // Parallax for background elements
        const vc = document.getElementById('view-container');
        vc.addEventListener('mousemove', (e) => {
            var relX = e.pageX - vc.offsetLeft;
            var relY = e.pageY - vc.offsetTop;

            TweenMax.to(this.dot1, 1, {
                x: (relX - vc.offsetWidth / 2) / vc.offsetWidth * -150,
                y: (relY - vc.offsetHeight / 2) / vc.offsetHeight * -50,
                ease: Power2.easeOut
            })
            TweenMax.to(this.dot2, 1, {
                x: (relX - vc.offsetWidth / 2) / vc.offsetWidth * -50,
                y: (relY - vc.offsetHeight / 2) / vc.offsetHeight * -75,
                ease: Power2.easeOut
            })
            TweenMax.to(this.dot3, 1, {
                x: (relX - vc.offsetWidth / 2) / vc.offsetWidth * -100,
                y: (relY - vc.offsetHeight / 2) / vc.offsetHeight * 150,
                ease: Power2.easeOut
            })
            TweenMax.to(this.dot4, 1, {
                x: (relX - vc.offsetWidth / 2) / vc.offsetWidth * 50,
                y: (relY - vc.offsetHeight / 2) / vc.offsetHeight * 100,
                ease: Power2.easeOut
            })
        });

        });

    }

    
    async switchToView2(){
        scrollPosition(1);
        // Construction d'une div temporaire positionnée en dehors
        // de l'écran pour faire entrer la prochaine view
        const tempDiv = document.createElement('div');
        document.getElementById('view-container').appendChild(tempDiv);
        tempDiv.style.position = "absolute";
        tempDiv.style.top = '100%';

        // Création de la prochaine view
        const nextView = new View2(tempDiv);
        await nextView.load();
        this.view.style.transition = 'transform 1s';
        tempDiv.style.transition = 'transform 1s';
        this.view.style.transform = 'translateY(-100%)';
        tempDiv.style.transform = 'translateY(-100%)';
        setTimeout(() => {
            tempDiv.replaceWith = nextView.view;
            this.view.parentNode.removeChild(this.view);
        }, 1000);
    }

}
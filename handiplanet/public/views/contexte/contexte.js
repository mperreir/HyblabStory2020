
class Contexte extends View {
    textes = {
        0: 'Pour commencer mes recherches, <span>je devrais ?</span>',
        1: 'Pour approfondir mes recherches,<br><span>que me conseilles-tu ?</span>',
        2: 'Selon toi, <span>que devrais-je faire</span> ensuite ?',
        3: '<span>On a bien avancé,</span> il ne reste qu\'à'
    };

    sounds = [
        'sound/context_1.mp3',
        'sound/context_2.mp3',
        'sound/context_3.mp3',
        'sound/context_4.mp3',
    ];

    constructor(receiver) {
        super('contexte', receiver);
        this.questionNumber = 0;
        this.buttons = [true, true, true, true];
    }

    reloadContext(){
        this.text.innerHTML = this.textes[this.questionNumber];
        if(this.buttons[0]) this.photo.style.display = 'flex';
        if(this.buttons[1]) this.contact.style.display = 'flex';
        if(this.buttons[2]) this.reseau.style.display = 'flex';
        if(this.buttons[3]) this.info.style.display = 'flex';
    }

    play() {
        window.soundManager.play(this.sounds[this.questionNumber]);
    }

    linkElements() {
        this.photo = document.getElementById('contexte-photo');
        this.contact = document.getElementById('contexte-contact');
        this.reseau = document.getElementById('contexte-reseau');
        this.info = document.getElementById('contexte-info');
        this.text = document.getElementById('context-message');
        this.persoImg = document.getElementById('contexte-character-img');
        this.text.innerHTML = this.textes[0];

        this.persoImg.src = window.colorPersoManager.getAsset().face;

        this.photo.addEventListener('click', () => {
            this.buttons[0] = false;
            this.photo.style.display = 'none';
            this.switchToPhoto();
        });

        this.photo.addEventListener('mouseenter', () => {
            window.soundManager.play('sound/context_hover_photo.mp3');
        });
        
        this.contact.addEventListener('click', () => {
            this.buttons[1] = false;
            this.contact.style.display = 'none';
            this.switchToContact();
        });

        this.contact.addEventListener('mouseenter', () => {
            window.soundManager.play('sound/context_hover_contact.mp3');
        });
        
        this.reseau.addEventListener('click', () => {
            this.buttons[2] = false;
            this.reseau.style.display = 'none';
            this.switchToReseau();
        });

        this.reseau.addEventListener('mouseenter', () => {
            window.soundManager.play('sound/context_hover_reseau.mp3');
        });
        
        this.info.addEventListener('click', () => {
            this.buttons[3] = false;
            this.info.style.display = 'none';
            this.switchToInfo();
        });

        this.info.addEventListener('mouseenter', () => {
            window.soundManager.play('sound/context_hover_info.mp3');
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
    }

    async switchToContact() {
        this.updateContexte(View8);
        transitionHorizontal(this.view, View8);
    }
    async switchToReseau() {
        this.updateContexte(View5);
        transitionHorizontal(this.view, View5);
    }
    async switchToInfo() {
        this.updateContexte(View11);
        transitionHorizontal(this.view, View11);
    }
    async switchToPhoto() {
        this.updateContexte(View2);
        transitionHorizontal(this.view, View2);
    }

    async updateContexte(View){
        this.questionNumber++;
        window.scrollBarController.setPosition(this.questionNumber, View);
    }
}
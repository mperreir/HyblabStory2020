
class Contexte extends View {
    constructor(receiver) {
        super('contexte', receiver);
    }

    linkElements() {
        this.choicesRemaining = 4;
        this.elements = [];
        this.text1 = document.getElementById('context-1');
        this.text2 = document.getElementById('context-2');
        this.text3 = document.getElementById('context-3');
        this.text4 = document.getElementById('context-4');
        this.photo = document.getElementById('contexte-photo');
        this.contact = document.getElementById('contexte-contact');
        this.reseau = document.getElementById('contexte-reseau');
        this.info = document.getElementById('contexte-info');
        this.photod = document.getElementById('contexte-photo-done');
        this.contactd = document.getElementById('contexte-contact-done');
        this.reseaud = document.getElementById('contexte-reseau-done');
        this.infod = document.getElementById('contexte-info-done');
        this.elements.push(this.photo, this.contact, this.reseau, this.info, this.photod, this.contactd, this.reseaud, this.infod);

        this.photo.addEventListener('click', () => {
            this.photo.className = "contexte-done";
            this.photod.className = "cdone";
            this.elements.splice(this.elements.indexOf(this.photo),1);
            this.elements.splice(this.elements.indexOf(this.photod),1);
            this.switchToPhoto();
        });
        
        this.contact.addEventListener('click', () => {
            this.contact.className = "contexte-done";
            this.contactd.className = "cdone";
            this.elements.splice(this.elements.indexOf(this.contact),1);
            this.elements.splice(this.elements.indexOf(this.contactd),1);
            this.switchToContact();
        });
        
        this.reseau.addEventListener('click', () => {
            this.reseau.className = "contexte-done";
            this.reseaud.className = "cdone";
            this.elements.splice(this.elements.indexOf(this.reseau),1);
            this.elements.splice(this.elements.indexOf(this.reseaud),1);
            this.switchToReseau();
        });
        
        this.info.addEventListener('click', () => {
            this.info.className = "contexte-done";
            this.infod.className = "cdone";
            this.elements.splice(this.elements.indexOf(this.info),1);
            this.elements.splice(this.elements.indexOf(this.infod),1);
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
    }

    refreshUI(){
        console.log('refresh');
        console.log(this.elements);
        if(this.elements.includes(this.photo)) this.photo.className = 'contexte-question cphoto';
        if(this.elements.includes(this.contact)) this.photo.className = 'contexte-question ccontact';
        if(this.elements.includes(this.reseau)) this.photo.className = 'contexte-question creseau';
        if(this.elements.includes(this.info)) this.photo.className = 'contexte-question cinfo';
        if(this.elements.includes(this.photod)) this.photo.className = 'contexte-question-done';
        if(this.elements.includes(this.contactd)) this.photo.className = 'contexte-question-done';
        if(this.elements.includes(this.reseaud)) this.photo.className = 'contexte-question-done';
        if(this.elements.includes(this.infod)) this.photo.className = 'contexte-question-done';
    }

    async switchToContact() {
        transitionHorizontal(this.view, View8);
        this.updateContexte(View8);
    }
    async switchToReseau() {
        transitionHorizontal(this.view, View5);
        this.updateContexte(View5);
    }
    async switchToInfo() {
        transitionHorizontal(this.view, View11);
        this.updateContexte(View11);
    }
    async switchToPhoto() {
        transitionHorizontal(this.view, View2);
        this.updateContexte(View2);
    }

    updateContexte(View){
        this.choicesRemaining--;
        window.scrollBarController.setPosition(View, 4-this.choicesRemaining);   
    }
}
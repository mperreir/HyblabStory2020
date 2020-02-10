class View {
    constructor(name, target){
        this.viewName = name;
        this.target = target;
    }

    linkElements(){}

    load() {
        return new Promise(async (resolve) => {
            await loadTemplate(this.viewName, this.target);
            this.view = document.getElementById(this.viewName);
            this.linkElements();
            resolve();
        });
    }

    play() {}

    runAnim() {}

}
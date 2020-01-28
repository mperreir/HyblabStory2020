class View {
    constructor(name, target){
        this.viewName = name;
        this.target = target;
    }

    load(){
        return loadTemplate(this.viewName, this.target);
    }

}
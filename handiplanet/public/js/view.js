class View {
    constructor(name, target){
        this.viewName = name;
        loadTemplate(name, target);
    }
}
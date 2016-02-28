import angular from "angular";

export default class AppDirective {
    constructor(){
        this.restrict = "E";
        this.templateUrl = "/app/app.template.html"
    }
    
    static factoryFunction(){
        return new AppDirective();
    }
}

angular
    .module("app")
    .directive("tsApp", AppDirective.factoryFunction);
    
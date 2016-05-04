import angular from "angular";

export default class AppDirective {
    constructor(){
        this.restrict = "E";
        this.controller = "AppController";
        this.bindToController = true;
        this.controllerAs = "app";
        this.templateUrl = templateUrl;
    }
    
    static factoryFunction(){
        return new AppDirective();
    }
}

export const templateUrl = "/app/app.template.html";

angular
    .module("app")
    .directive("tsApp", AppDirective.factoryFunction);
    
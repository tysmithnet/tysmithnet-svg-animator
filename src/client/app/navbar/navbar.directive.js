import angular from "angular";
import NavbarController from "./navbar.controller";

export default class NavbarDirective {
    constructor(){
        this.restrict = "E";
        this.templateUrl = "/app/navbar/navbar.template.html";
        this.controller = NavbarController;
        this.controllerAs = "navbar";
        this.bindToController = true;
    }
    
    static factoryFunction(){
        return new NavbarDirective();
    }
}

angular
    .module("navbar")
    .directive("tsNavbar", NavbarDirective.factoryFunction);
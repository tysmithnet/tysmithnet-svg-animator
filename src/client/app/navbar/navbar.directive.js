import angular from "angular";

export default class NavbarDirective {
    constructor(){
        this.restrict = "E";
        this.templateUrl = "/app/navbar/navbar.template.html";
    }
    
    static factoryFunction(){
        return new NavbarDirective();
    }
}

angular
    .module("navbar")
    .directive("tsNavbar", NavbarDirective.factoryFunction);
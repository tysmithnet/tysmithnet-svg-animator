"use strict";

import angular from "angular";

/**
 * Directive for Navbar component
 */
export default class NavbarDirective {
    constructor(){
        this.restrict = "E";
        this.templateUrl = templateUrl;
        this.controller = "NavbarController";
        this.controllerAs = "navbar";
        this.bindToController = true;
    }

    static factoryFunction(){
        return new NavbarDirective();
    }
}

export const templateUrl = "/app/navbar/navbar.template.html";

angular
    .module("navbar")
    .directive("tsNavbar", NavbarDirective.factoryFunction);

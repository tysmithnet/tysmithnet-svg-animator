"use strict";

import angular from "angular";

export default class ViewerDirective {
    constructor(){
        this.restrict = "E";
        this.templateUrl = templateUrl;
        this.controller = "ViewerController";
        this.controllerAs = "viewer";
        this.bindToController = true;
    }
    
    static factoryFunction(){
        return new ViewerDirective();
    }
}

export const templateUrl = "/app/viewer/viewer.template.html";

angular
    .module("viewer")
    .directive("tsViewer", ViewerDirective.factoryFunction);
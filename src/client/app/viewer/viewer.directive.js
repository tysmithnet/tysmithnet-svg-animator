"use strict";

import angular from "angular";

/**
 * Directive definition for the Viewer component
 */
export default class ViewerDirective {
    constructor(){
        this.restrict = "E";
        this.templateUrl = templateUrl;
        this.controller = "ViewerController";
        this.controllerAs = "viewer";
        this.bindToController = true;
        this.scope = {
            scene: "="
        }
    }
    
    static factoryFunction(){
        return new ViewerDirective();
    }
}

export const templateUrl = "/app/viewer/viewer.template.html";

angular
    .module("viewer")
    .directive("tsViewer", ViewerDirective.factoryFunction);
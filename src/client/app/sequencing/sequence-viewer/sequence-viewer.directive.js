"use strict";

import angular from "angular";

export default class SequenceViewerDirective{
    constructor(){
        this.restrict = "E";
        this.controller = "SequenceViewerController";
        this.controllerAs = "sequenceViewerController";
        this.bindToController = true;
        this.templateUrl = templateUrl;
        this.scope = {
            scene: "="
        }
    }
    
    static factoryFunction(){
        return new SequenceViewerDirective();
    }    
}

export const templateUrl = "/app/sequencing/sequence-viewer/sequence-viewer.template.html";

angular
    .module("sequence-viewer")
    .directive("tsSequenceViewer", SequenceViewerDirective.factoryFunction);
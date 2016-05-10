"use strict";

import angular from "angular";
import Scene from "domain/scenes/scene";
import Dimensions from "domain/dimensions";
import ViewBox from "domain/viewbox";
import SceneDisplay from "domain/scenes/scene-display";

/**
 * Backing controller for the new scene modal
 */
export default class NewSceneModalController {
    constructor($uibModalInstance, $scope){
        this.$uibModalInstance = $uibModalInstance;
        this.$scope = $scope;
        this.name = null;
        this.canvas = {
            width: null,
            height: null
        };
        this.viewbox = {
            x: 0,
            y: 0,
            width: null,
            height: null
        };
        
        this.setupWatchers(); 
    }
    
    setupWatchers(){
        this.$scope.$watch("newSceneModalController.canvas", (oldValue, newValue) => {
           
        }, true);
    }
    
    /**
     * Called when OK is clicked on the modal
     */
    ok(){
        let dimensions = new Dimensions(this.canvas.width, this.canvas.height);
        let scene = new Scene();
        this.$uibModalInstance.close("hi");
    }
    
    /**
     * Called when Cancel is clicked on the modal
     */
    cancel(){
        this.$uibModalInstance.dismiss("cancelled");
    }
}

NewSceneModalController.$inject = ["$uibModalInstance", "$scope"];

angular
    .module("scene")
    .controller("NewSceneModalController", NewSceneModalController);
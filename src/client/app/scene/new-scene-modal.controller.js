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
        this.formController = null;
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
    
    /**
     * Creates watchers on certain fields to enable form prefilling
     */
    setupWatchers(){
        let that = this;
        this.$scope.$watch("newSceneModalController.canvas", (newValue, oldValue) => {
            if(!that.formController.viewboxWidth.$dirty)
                that.viewbox.width = newValue.width;
            if(!that.formController.viewboxHeight.$dirty)
                that.viewbox.height = newValue.height;
        }, true);
    }
    
    /**
     * Called when OK is clicked on the modal
     */
    ok(){
        if(!this.formController.$valid){
            this.formController.okPressed = true;
            return;
        }
        let scene = this.createNewSceneFromForm();
        this.$uibModalInstance.close(scene);
    }
    
    /**
     * Called when Cancel is clicked on the modal
     */
    cancel(){
        this.$uibModalInstance.dismiss("cancelled");
    }
    
    /**
     * Returns a scene object created from the values in the form
     */
    createNewSceneFromForm(){
        let dimensions = new Dimensions(this.canvas.width, this.canvas.height);
        let viewbox = new ViewBox(this.viewbox.x, this.viewbox.y, 
            new Dimensions(this.viewbox.width, this.viewbox.height));
        let display = new SceneDisplay(dimensions, viewbox)
        return new Scene(this.name, display);
    }
}

NewSceneModalController.$inject = ["$uibModalInstance", "$scope"];

angular
    .module("scene")
    .controller("NewSceneModalController", NewSceneModalController);
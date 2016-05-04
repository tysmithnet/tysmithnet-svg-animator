"use strict";

import angular from "angular";

/**
 * Backing controller for the new scene modal
 */
export default class NewSceneModalController {
    constructor($uibModalInstance){
        this.$uibModalInstance = $uibModalInstance;
    }
    
    /**
     * Called when OK is clicked on the modal
     */
    ok(){
        this.$uibModalInstance.close("hi");
    }
    
    /**
     * Called when Cancel is clicked on the modal
     */
    cancel(){
        ;
    }
}

NewSceneModalController.$inject = ["$uibModalInstance"];

angular
    .module("scene")
    .controller("NewSceneModalController", NewSceneModalController);
"use strict";

export default class SceneService {
    constructor($uibModal){
        /**
         * Save a reference to the modal service
         */
        this.$uibModal = $uibModal;
        
        /**
         * The current scene under development
         */
        this.scene = null;            
    }
    
    /**
     * Shows a modal that will allow the user to enter in
     * information required to create a new scene
     */
    showNewSceneDialog(){
        let modal = this.$uibModal.open({
            size: "lg",
            templateUrl: newSceneTemplateUrl,
            controller: "NewSceneModalController",
            controllerAs: "newSceneModalController",
            bindToController: true
        });
        return modal.result;
    }
    
    /**
     * Set the current scene
     */
    setScene(scene){
        // event?
        this.scene = scene;
    }
}

export const newSceneTemplateUrl = "/app/scene/new-scene-modal.template.html";

SceneService.$inject = ["$uibModal"];
    
angular
    .module("scene")
    .service("SceneService", SceneService);
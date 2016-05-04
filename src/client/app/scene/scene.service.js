"use strict";

export default class SceneService {
    constructor($uibModal){
        /**
         * Save a reference to the modal service
         */
        this.$uibModal = $uibModal;            
    }
    
    showNewSceneDialog(){
        this.$uibModal.open({
            templateUrl: newSceneTemplateUrl 
        });
    }
}

export const newSceneTemplateUrl = "/app/scene/new-scene-modal.template.html";

SceneService.$inject = ["$uibModal"];
    
angular
    .module("scene")
    .service("SceneService", SceneService);
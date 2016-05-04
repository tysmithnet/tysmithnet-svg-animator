"use strict";

export default class SceneService {
    constructor($uibModal){
        /**
         * Save a reference to the modal service
         */
        this.$uibModal = $uibModal;            
    }
    
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
}

export const newSceneTemplateUrl = "/app/scene/new-scene-modal.template.html";

SceneService.$inject = ["$uibModal"];
    
angular
    .module("scene")
    .service("SceneService", SceneService);
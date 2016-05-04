"use strict";

import angular from "angular";

export default class NavbarController {
    constructor(globals, SceneService){
        /**
         * Reference to the scene service
         */
        this.SceneService = SceneService;
        
        /**
         * This is the branding for the navbar
         */
        this.appTitle = globals.appTitle;
        
        
    }
    
    /**
     * Called when "New Scene" is clicked
     */
    onNewSceneClick(){
        let promise = this.SceneService.showNewSceneDialog();
        promise.then((newScene) => {
           this.SceneService.setScene(newScene); 
        });
    }
}

NavbarController.$inject = ["globals", "SceneService"]

angular
    .module("navbar")
    .controller("NavbarController", NavbarController);

"use strict";

import angular from "angular";

export default class NavbarController {
    constructor(globals){
        /**
         * This is the branding for the navbar
         */
        this.appTitle = globals.appTitle;
    }
    
    /**
     * Called when "New Scene" is clicked
     */
    onNewSceneClick(){
        console.log("new clicked");
    }
}

NavbarController.$inject = ["globals"]

angular
    .module("navbar")
    .controller("NavbarController", NavbarController);

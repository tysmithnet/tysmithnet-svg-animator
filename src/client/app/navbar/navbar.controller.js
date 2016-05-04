"use strict";

import angular from "angular";

export default class NavbarController {
    constructor(globals){
        this.appTitle = globals.appTitle;
    }
    
    onNewSceneClick(){
        console.log("new clicked");
    }
}

NavbarController.$inject = ["globals"]

angular
    .module("navbar")
    .controller("NavbarController", NavbarController);

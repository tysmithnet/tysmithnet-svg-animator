"use strict";

import angular from "angular";

/**
 * Backing controller for the App component
 */
export default class AppController {
    constructor(){
        
        /**
         * The scene currently being constructed
         */
        this.scene = null;
    }
}

AppController.$inject = [];

angular
    .module("app")
    .controller("AppController", AppController);
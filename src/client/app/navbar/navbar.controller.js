"use strict";

import angular from "angular";

export default class NavbarController {
    constructor(globals){
        this.appTitle = globals.appTitle;
    }
}

NavbarController.$inject = ["globals"]

angular
    .module("navbar")
    .controller("NavbarController", NavbarController);

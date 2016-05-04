"use strict";

import angular from "angular";

export default class AppController {
    constructor(){
        this.data = "helloooo";
    }
}

AppController.$inject = [];

angular
    .module("app")
    .controller("AppController", AppController);
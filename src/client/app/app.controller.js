import angular from "angular";

export default class AppController {
    constructor(){
        this.greeting = "hello master";
    }
}

angular
    .module("app")
    .controller("AppController", AppController);
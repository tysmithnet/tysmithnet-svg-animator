"use strict";

import angular from "angular";
import {module, inject} from "angular-mocks";
import {templateUrl} from "./navbar.directive";

describe("Navbar", () => {
    var $controller;
    var $controllerProvider;
    var $compile;
    var $rootScope;
    var $templateCache;
    var $httpBackend;
    
    beforeEach(() => {
        module("app");
        module("navbar");
        module("ngMockE2E");

        inject((_$controller_, _$compile_, _$rootScope_, _$templateCache_, _$httpBackend_, _$controllerProvider_) => {
            $controller = _$controller_;
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            $templateCache = _$templateCache_;
            $httpBackend = _$httpBackend_;
            $controllerProvider = _$controllerProvider_;
            let template = _$templateCache_.get(templateUrl);
            _$httpBackend_.when("GET", templateUrl).respond(template);
        });
    });

    describe("controller", () => {
        it("should have an app title", () => {
            let controller = $controller("NavbarController", { globals: { appTitle: "hi" } });
            expect(controller.appTitle).toEqual("hi");
        });
    });

    describe("directive", () => {
        var compiledElement;

        function getCompiledElement() {
            let html = "<ts-navbar></ts-navbar>";
            let scope = $rootScope.$new();
            let compiled = $compile(html)(scope);
            scope.$digest();
            return compiled;
        }

        beforeEach(() => {
            $controllerProvider.register("NavbarController", function(){
               this.appTitle = "hi"; 
            });
            compiledElement = getCompiledElement();
        });
        
        afterEach(() => {
            compiledElement.remove();
        })

        it("should render some html", () => {
            expect(compiledElement.html()).toMatch(/.+/);
        });

        it("should display the app title", () => {
            let navbar = compiledElement.find(".navbar-brand");
            expect(navbar.text()).toEqual("hi");;
        });
    });
});

"use strict";

import angular from "angular";
import {module, inject} from "angular-mocks";
import {templateUrl} from "./navbar.directive";

describe("Navbar", () => {
    var $controller;
    var $compile;
    var $rootScope;

    beforeEach(() => {
        module("app");
        module("navbar");
        module("ngMockE2E");

        inject((_$controller_, _$compile_, _$rootScope_, _$templateCache_, _$httpBackend_) => {
            $controller = _$controller_;
            $compile = _$compile_;
            $rootScope = _$rootScope_;
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
            let element = angular.element(html);
            let scope = $rootScope;
            scope.navbar = $controller("NavbarController", { globals: { appTitle: "hi" } });
            let compiled = $compile(element)(scope);
            scope.$digest();
            return compiled;
        }

        beforeEach(() => {
            compiledElement = getCompiledElement();
        });

        it("should display the app title", () => {
            expect(compiledElement.find(".navbar-brand").text()).toEqual("hi");;
        });
    });
});

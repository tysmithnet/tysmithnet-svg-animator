"use strict";

import {module, inject} from "angular-mocks";
import {templateUrl} from "./navbar.directive";

describe("Navbar", () => {
    describe("directive", () => {
        var compiledElement;
        var $rootScope;
        var $compile;

        beforeEach(module("navbar", function ($controllerProvider) {
            $controllerProvider.register("NavbarController", function () {
                this.appTitle = "hi";
            })
        }));

        beforeEach(() => {
            module("app");
            module("ngMockE2E");
            inject((_$rootScope_, _$compile_) => {
                $rootScope = _$rootScope_;
                $compile = _$compile_;
            });
        });

        beforeEach(() => {
            inject((_$templateCache_, _$httpBackend_) => {
                let template = _$templateCache_.get(templateUrl);
                _$httpBackend_.when("GET", templateUrl).respond(template);
            });
        });

        beforeEach(() => {
            var html = "<ts-navbar></ts-navbar>";
            var scope = $rootScope.$new();
            compiledElement = $compile(html)(scope);
            scope.$digest();
        });

        it("should render some html", () => {
            expect(compiledElement).toMatch(/.+/);
        });
    });
});
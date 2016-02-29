import angular from "angular";
import {module, inject} from "angular-mocks";

describe("Navbar", () => {
    var $controller;
    var $compile;
    var $rootScope;
    
    beforeEach(() => {
        module("navbar");
        inject((_$controller_, _$compile_, _$rootScope_) => {
            $controller = _$controller_;
            $compile = _$compile_;
            $rootScope = _$rootScope_;
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
        
        function getCompiledElement(){
            let html = "<ts-navbar></ts-navbar>";
            let scope = $rootScope.$new();
            let compiled = $compile(html)(scope);
            scope.$digest();
            return compiled;
        }
        
        beforeEach(() => {
            compiledElement = getCompiledElement();
        });
        
        it("should display the app title", () => {
            expect(compiledElement).toBeDefined();
        });
    });
});
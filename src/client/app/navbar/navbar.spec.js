import angular from "angular";
import {module, inject} from "angular-mocks";

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
            let template = _$templateCache_.get("/app/navbar/navbar.template.html");
            _$httpBackend_.when("GET", "/app/navbar/navbar.template.html").respond(template);
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
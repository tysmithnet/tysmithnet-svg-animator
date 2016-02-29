import {module, inject} from "angular-mocks";

describe("Navbar", () => {
    var $controller;

    beforeEach(() => {
        module("navbar");
        inject((_$controller_) => {
            $controller = _$controller_;
        });
    });

    describe("controller", () => {
        it("should have an app title", () => {
            let controller = $controller("NavbarController", { globals: { appTitle: "hi" } });
            expect(controller.appTitle).toEqual("hi");
        });
    });
    
    describe("directive", () => {
        it("should display the app title", () => {
            
        });
    });
});
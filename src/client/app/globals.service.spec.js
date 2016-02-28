import angular from "angular";
import {module, inject} from "angular-mocks";

describe("globals service", () => {
    var globals;
    beforeEach(() => {
        module("app");
        inject((_globals_) => {
            globals = _globals_;
        });
    });
    
    beforeEach(inject((_globals_) => {
        globals = globals;
    }));
    
    it("should have an application title", () => {
        expect(globals.appTitle).toBeDefined();
    });
});
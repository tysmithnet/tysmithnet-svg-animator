"use strict";

import Scene from "./scene";

describe("Scene", () => {
    it("should take a name", () => {
        let scene = new Scene("test");
        expect(scene.name).toEqual("test");
    });
});
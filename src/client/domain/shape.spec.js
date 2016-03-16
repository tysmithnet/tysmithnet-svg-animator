"use strict";

import Shape from "./shape";

describe("Shape", () => {
    it("should take some data", () => {
        let path = new Shape("M 0 50z");
        expect(path.data).toEqual("M 0 50z");
    });
})

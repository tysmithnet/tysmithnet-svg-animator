"use strict";

import Shape from "../shape";
import AddShapeSequenceItem from "./add-shape-sequence-item";

describe("AddShapeSequenceItem", () => {
    describe("creation", () => {
        it("should require a shape", () => {
            let shape = new Shape("M 0 50");
            let addShape = new AddShapeSequenceItem("blah blah", shape);
            expect(addShape.name).toEqual("blah blah");
            expect(addShape.shape).toEqual(shape);
        });
    });
});

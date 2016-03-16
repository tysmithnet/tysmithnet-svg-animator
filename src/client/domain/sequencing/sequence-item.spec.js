"use strict";

import SequenceItem from "./sequence-item";

describe("SequenceItem", () => {
    describe("creation", () => {

        var item;

        beforeEach(() => {
            item = new SequenceItem("sample");
        });

        it("should require a name", () => {
            expect(item.name).toEqual("sample");
        });

        it("should have an id", () => {
            expect(item.id).toMatch(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/);
        });
    });
});

import Path from "./path";

describe("path", () => {
    describe("creation", () => {
        it("should require name and data to be created", () => {
            let path = new Path("a name", "M 0 50");
            expect(path.name).toEqual("a name");
            expect(path.data).toEqual("M 0 50");
        });
    });
});
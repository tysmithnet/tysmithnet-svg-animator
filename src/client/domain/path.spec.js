import Path from "./path";

describe("path", () => {
    it("should take a name and some data", () => {
        let path = new Path("a name", "M 0 50z");
        expect(path.name).toEqual("a name");
        expect(path.data).toEqual("M 0 50z");
    });
})
import Sequence from "./sequence";

describe("sequence", () => {
    it("should require a name", () => {
        let seq = new Sequence("sample");
        expect(seq.name).toEqual("sample");
    });
});
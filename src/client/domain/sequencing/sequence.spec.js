import Sequence from "./sequence";

describe("Sequence", () => {
    describe("creation", () => {
        it("should require a name", () => {
            let seq = new Sequence("sample");
            expect(seq.name).toEqual("sample");
        });
    });
});
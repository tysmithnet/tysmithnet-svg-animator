import Sequence from "./sequence";
import SequenceItem from "./sequence-item";

describe("Sequence", () => {
    describe("creation", () => {
        it("should require a name", () => {
            let seq = new Sequence("sample");
            expect(seq.name).toEqual("sample");
        });
    });
    
    describe("modifying", () => {
        it("should accept items to place in the timeline", () => {
            let seq = new Sequence("sample");
            let item = new SequenceItem("item");
            seq.append(item);
            expect(seq.getItems()).toEqual([item]);
        });
    });
});
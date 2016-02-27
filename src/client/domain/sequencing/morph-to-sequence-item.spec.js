import MorphToSequenceItem from "./morph-to-sequence-item";

describe("MorphToSequenceItem", () => {
    describe("creation", () => {
        it("should require: a name, target shape id, and destination path", () => {
            let item = new MorphToSequenceItem("name", "ca34fbcf-7299-4e14-8531-0295fe55fa18", "M 0 5 h 10 v 10 z");
            expect(name).toEqual("name");
            expect(item.target).toEqual("ca34fbcf-7299-4e14-8531-0295fe55fa18");
            expect(item.destination).toEqual("M 0 5 h 10 v 10 z");
        }); 
    });
});
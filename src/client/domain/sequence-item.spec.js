describe("SequenceItem", () => {
    describe("creation", () => {
        it("should require a name", () => {
            let item = new SequenceItem("sample");
            expect(item.name).toEqual("sample"); 
        });
    });
});
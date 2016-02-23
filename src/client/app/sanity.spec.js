import AppController from './app.controller';

describe("sanity check", () => {
     it("should pass", () => {
         let controller = new AppController();
         expect(controller.greeting).toEqual("hello master");
     });
});
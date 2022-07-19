import imgProcess from "../../utils/img-process";
import validator from "../../utils/validator";

describe("Testing img-process.ts", () => {
  describe("Test resizeImage function", () => {
    beforeAll(() => {
      validator.thumbnailsFolderExist();
    });

    it("should create a new thumbnail and return true to thumbnailExist function", async () => {
      await imgProcess.resizeImage("fjord", 300, 400);
      expect(validator.thumbnailExist("fjord", 300, 400)).toBeTrue();
    });

    it("should create a new thumbnail and return true to thumbnailExist function", async () => {
      await imgProcess.resizeImage("palmtunnel", 600, 700);
      expect(validator.thumbnailExist("palmtunnel", 600, 700)).toBeTrue();
    });
  });
});

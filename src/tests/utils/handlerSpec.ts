import handler from "../../utils/handler";
import path from "path";

describe("Testing handler.ts", () => {
  describe("Test getImagePath function", () => {
    it("should return the path of fjord.jpg image", () => {
      const imagePath = path.resolve(
        __dirname,
        "../../../public/imgs/original/fjord.jpg"
      );
      expect(handler.getImagePath("fjord")).toEqual(imagePath);
    });

    it("should return the path of encenadaport.jpg image", () => {
      const imagePath = path.resolve(
        __dirname,
        "../../../public/imgs/original/encenadaport.jpg"
      );
      expect(handler.getImagePath("encenadaport")).toEqual(imagePath);
    });
  });
});

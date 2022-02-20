import expect from "expect";
import { IRandomGenerator } from "../Interfaces/IRandomGenerator";
import { RandomNumberGenerator } from "./RandomNumberGenerator";

describe("RandomNumberGenerator", () => {

  function CreateGenerator(minimum : number, maximum : number) : IRandomGenerator {
    return new RandomNumberGenerator(minimum, maximum);
  }

  describe("when called with min and max", () => {
    it("should return a number between min and max", () => {
      const random = CreateGenerator(900,1000);
      const r = random.generate();
      expect(r).toBeLessThanOrEqual(1000);
      expect(r).toBeGreaterThanOrEqual(900);
    });

    it("the maximum is included in the possible results", () => {
      const random = CreateGenerator(1, 1);
      const r = random.generate();
      expect(r).toBe(1);
    });
  });

  describe("when called with negative min and max", () => {
    it("should return an error", () => {
      const random = CreateGenerator(-1, 1);

      expect(() => {
        random.generate();
      }).toThrowError();
    });
  });

  describe("when min is bigger than max", () => {
    it("should return an error", () => {
      const random = CreateGenerator(9, 3);

      expect(() => {
        random.generate();
      }).toThrowError();
    });
  });
});

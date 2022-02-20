import expect from "expect";
import { RandomNumberGenerator } from "./RandomNumberGenerator";

describe("RandomNumberGenerator", () => {
  describe("when called with min and max", () => {
    it("should return a number between min and max", () => {
      const random = new RandomNumberGenerator();
      const r = random.generate(900, 1000);
      expect(r).toBeLessThanOrEqual(1000);
      expect(r).toBeGreaterThanOrEqual(900);
    });

    it("the maximum is included in the possible results", () => {
      const random = new RandomNumberGenerator();
      const r = random.generate(1, 1);
      expect(r).toBe(1);
    });
  });

  describe("when called with negative min and max", () => {
    it("should return an error", () => {
      const random = new RandomNumberGenerator();

      expect(() => {
        random.generate(-1, 1);
      }).toThrowError();
    });
  });

  describe("when min is bigger than max", () => {
    it("should return an error", () => {
      const random = new RandomNumberGenerator();

      expect(() => {
        random.generate(9, 3);
      }).toThrowError();
    });
  });
});

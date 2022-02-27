import expect from "expect";
import { RandomAnimalGenerator } from "./RandomAnimalGenerator";

describe("RandomAnimalGenerator", () => {
  describe("when initialized with one option", () => {
    it("returns that option", () => {
      const randomAnimalGenerator = 
        new RandomAnimalGenerator(["tiger"], (min,max) => 0);

      const result = randomAnimalGenerator.generate();

      expect(result).toBe("tiger");
    });
  });

  describe("when the random number generator selects and option that is not part of the animals collection", () => {
    it("throws an error", () => {
      const randomAnimalGenerator = 
        new RandomAnimalGenerator(["tiger"], (min,max) => 1);

      expect(() => { randomAnimalGenerator.generate() }).toThrowError();
    });
  });
});




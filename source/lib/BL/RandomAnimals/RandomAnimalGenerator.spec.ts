import expect from "expect";
import { RandomAnimalGenerator } from "./RandomAnimalGenerator";

describe("RandomAnimalGenerator", () => {
  describe("when initialized with one option", () => {
    it("returns that option", () => {
      const randomAnimalGenerator = 
        new RandomAnimalGenerator(["tiger"], (max) => 0);

      const result = randomAnimalGenerator.generate();

      expect(result).toBe("tiger");
    });
  });

  describe("when the random number generator selects and option that is not part of the animals collection", () => {
    it("throws an error", () => {
      const randomAnimalGenerator = 
        new RandomAnimalGenerator(["tiger"], (max) => 1);

      expect(() => { randomAnimalGenerator.generate() }).toThrowError();
    });
  });

  describe("when the random animal generator has a 2 item collection", () => {
    it("both items can be returned depending on the random number", () => {
      let randomNumber = 0;

      const randomAnimalGenerator = 
        new RandomAnimalGenerator(["tiger", "elephant"], (max) => {
          randomNumber += 1;
          return randomNumber-1;
        });

      expect(randomAnimalGenerator.generate()).toBe("tiger");
      expect(randomAnimalGenerator.generate()).toBe("elephant");
    });
  });
});




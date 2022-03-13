import expect from "expect";
import { RandomPasswordGenerator } from "./RandomPasswordGenerator";

describe("RandomPasswordGenerator", () => {
  it("returns a string", () => {
    const random = new RandomPasswordGenerator();
    const result = random.generate();

    expect(typeof result).toBe("string");
  });

  it("does not return the same thing twice", () => {
    const random = new RandomPasswordGenerator();
    const result1 = random.generate();
    const result2 = random.generate();
    expect(result1).not.toBe(result2);
  });

  describe("given it is the standard-configuration", () => {
    it("returns a password of length 10", () => {
      const random = new RandomPasswordGenerator();
      const result1 = random.generate();
      expect(result1.length).toBe(10);
    });
  });

  describe("given it is configured to return a password of length 18", () => {
    it("returns a password of length 18", () => {
      const random = new RandomPasswordGenerator(18);
      const result1 = random.generate();
      expect(result1.length).toBe(18);
    });
  });
});

import { IRandomGenerator } from "../Interfaces/IRandomGenerator";
/***
 * RandomNumberGenerator - Generiert Zufallszahlen basierend auf naja, dem Üblichen
 *
 */

export class RandomNumberGenerator implements IRandomGenerator {
  generate(minimum: number, maximum: number): string | number {
    if (minimum < 0 || maximum < 0) {
      throw new Error("The Minimum or Maximum numbers can not be negative");
    }

    if (minimum > maximum) {
      throw new Error(
        "The Minimum number can not be bigger than the maximum number!"
      );
    }

    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  }
}

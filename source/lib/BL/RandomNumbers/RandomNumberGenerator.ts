import { IRandomGenerator } from "../../Interfaces/IRandomGenerator";
/***
 * RandomNumberGenerator - Generiert Zufallszahlen basierend auf naja, dem Üblichen
 *
 */

export class RandomNumberGenerator implements IRandomGenerator {
  _minimum: number;
  _maximum: number;

  constructor(minimum: number, maximum: number) {
    this._minimum = minimum;
    this._maximum = maximum;
  }

  generate(): any {
    if (this._minimum < 0 || this._maximum < 0) {
      throw new Error("The Minimum or Maximum numbers can not be negative");
    }

    if (this._minimum > this._maximum) {
      throw new Error(
        "The Minimum number can not be bigger than the maximum number!"
      );
    }

    return (
      Math.floor(Math.random() * (this._maximum - this._minimum + 1)) +
      this._minimum
    );
  }
}

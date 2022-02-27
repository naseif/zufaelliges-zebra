/**
 * Generates random passwords.
 * These are like passwords - only random.
 * Thats amazing and adds a lot of security, unless you forget them, which is not a good idea.
 * Anyways, I forgot what I wanted to type ... and say ... amum aah, ok, line 7..
 */

import { IRandomGenerator } from "../Interfaces/IRandomGenerator";

export class RandomPasswordGenerator implements IRandomGenerator {
  passwordlength: number;

  constructor(passwordlength?: number) {
    this.passwordlength = passwordlength || 10;
  }

  generate(): any {
    const validCharacters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890?!$";
    const maximalLength = this.passwordlength;
    let result = "";

    for (let i = 0; i < maximalLength; i++) {
      const randomNumber = Math.floor(Math.random() * validCharacters.length);
      result += validCharacters[randomNumber];
    }

    return result;
  }
}

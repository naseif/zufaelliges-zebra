import { IRandomGenerator } from "../../Interfaces/IRandomGenerator";

export class RandomAnimalGenerator implements IRandomGenerator {
    animals : string[] = [];
    randomNumberGenerator : (max : number) => number;

    constructor(
        animals : string[], 
        randomNumberGenerator: (max : number) => number) 
    {
        this.animals = animals;
        this.randomNumberGenerator = randomNumberGenerator;
    }

    generate() {
        const max = this.animals.length;

        const randomIndex = this.randomNumberGenerator(max);

        if (randomIndex < 0 || randomIndex > this.animals.length-1) {
            throw new Error(`The randomly chosen index was out of our animals collection range. (${randomIndex}`);
        }

        return this.animals[randomIndex];
    }
}
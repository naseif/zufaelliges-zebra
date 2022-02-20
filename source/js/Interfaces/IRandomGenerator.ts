export interface IRandomGenerator {
  generate(minimum: number, maximum: number): string | number;
}

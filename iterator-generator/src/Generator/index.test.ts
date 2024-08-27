import { Generator } from "./index";

describe("Generator function", () => {
  test("should generate values from start to end with given step", () => {
    const start = 0;
    const end = 10;
    const step = 2;

    const gen = Generator(start, end, step);
    const result = Array.from(gen);

    expect(result).toEqual([0, 2, 4, 6, 8]);
  });

  test("should return an empty array when start is equal to or greater than end", () => {
    const start = 10;
    const end = 10;
    const step = 2;

    const gen = Generator(start, end, step);
    const result = Array.from(gen);

    expect(result).toEqual([]);
  });

  test("should handle negative step", () => {
    const start = 10;
    const end = 0;
    const step = -2;

    const gen = Generator(start, end, step);
    const result = Array.from(gen);

    expect(result).toEqual([10, 8, 6, 4, 2]);
  });

  test("should handle non-integer steps", () => {
    const start = 0;
    const end = 1;
    const step = 0.2;

    const gen = Generator(start, end, step);
    const result = Array.from(gen);

    // expect(result).toEqual([0, 0.2, 0.4, 0.6, 0.8]);
      // expect(result).toEqual([0, 0.2, 0.4, 0.6, 0.8]);
      expect(result[0]).toBeCloseTo(0);
      expect(result[1]).toBeCloseTo(0.2);
      expect(result[2]).toBeCloseTo(0.4);
      expect(result[3]).toBeCloseTo(0.6);
      expect(result[4]).toBeCloseTo(0.8);
});

  test("should return an empty array when step would cause an infinite loop", () => {
    const start = 0;
    const end = 10;
    const step = -1;

    const gen = Generator(start, end, step);
    const result = Array.from(gen);
    console.log(result);
    expect(result).toEqual([]);
  });
});

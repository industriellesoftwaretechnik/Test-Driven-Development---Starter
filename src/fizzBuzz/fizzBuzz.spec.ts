import { fizzBuzz } from "./fizzBuzz";

describe("fizzbuzz", () => {
  it("should return 1 if passed an an array with only 1 as element", () => {
    const init = 1;
    const expected = [1];

    const actual = fizzBuzz(init);

    expect(actual).toEqual(expected);
  });

  it("should return correct array when passed number up until 3", () => {
    const init = 3;
    const expected = [1, 2, "fizz"];

    const actual = fizzBuzz(init);

    expect(actual).toEqual(expected);
  });

  it("should return correct array when passed number up until 15", () => {
    const init = 15;
    const expected = [
      1,
      2,
      "fizz",
      4,
      "buzz",
      "fizz",
      7,
      8,
      "fizz",
      "buzz",
      11,
      "fizz",
      13,
      14,
      "fizzbuzz",
    ];

    const actual = fizzBuzz(init);

    expect(actual).toEqual(expected);
  });
});

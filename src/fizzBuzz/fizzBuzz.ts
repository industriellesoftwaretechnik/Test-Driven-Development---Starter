export const fizzBuzz = (init: number) => {
  const array = Array.from({ length: init }, (_, index) => index + 1);

  return array.map((elem) => {
    if (elem % 5 === 0 && elem % 3 === 0) return "fizzbuzz";
    if (elem % 3 === 0) {
      return "fizz";
    }
    if (elem % 5 === 0) {
      return "buzz";
    }
    return elem;
  });
};

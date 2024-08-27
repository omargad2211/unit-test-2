// functions.test.js

const {
  fibonacci,
  reverseString,
  maxSubArray,
//   binarySearch,
  mergeSortedArrays,
  flattenArray,
  gcd,
} = require("./functions");

// 1. Test for fibonacci function
test("fibonacci function should return the correct nth Fibonacci number using memoization", () => {
  expect(fibonacci(0)).toBe(0);
  expect(fibonacci(1)).toBe(1);
  expect(fibonacci(5)).toBe(5);
  expect(fibonacci(10)).toBe(55);
  expect(fibonacci(20)).toBe(6765);
});

// 2. Test for reverseString function
test("reverseString function should correctly reverse the string while preserving special character positions", () => {
  expect(reverseString("a,b$c")).toBe("c,b$a");
  expect(reverseString("Ab,c,de!")).toBe("ed,c,bA!");
  expect(reverseString("")).toBe("");
  expect(reverseString("12345")).toBe("12345");
});

// 3. Test for maxSubArray function
test("maxSubArray function should return the maximum sum and the subarray that gives this sum", () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual({
    maxSum: 6,
    subArray: [4, -1, 2, 1],
  });
  expect(maxSubArray([1, 2, 3, 4, 5])).toEqual({
    maxSum: 15,
    subArray: [1, 2, 3, 4, 5],
  });
  expect(maxSubArray([-1, -2, -3, -4])).toEqual({ maxSum: -1, subArray: [-1] });
});

// 4. Test for binarySearch function
// test("binarySearch function should correctly find the index of the target with comparison count", () => {
//   expect(binarySearch([1, 2, 3, 4, 5], 3)).toEqual({
//     found: true,
//     index: 2,
//     comparisons: 2,
//   });
//   expect(binarySearch([10, 20, 30, 40, 50], 40)).toEqual({
//     found: true,
//     index: 3,
//     comparisons: 2,
//   });
//   expect(binarySearch([1, 2, 3, 4, 5], 6)).toEqual({
//     found: false,
//     comparisons: 3,
//   });
// });

// 5. Test for mergeSortedArrays function
test("mergeSortedArrays function should merge two sorted arrays without duplicates", () => {
  expect(mergeSortedArrays([1, 3, 5], [2, 3, 6])).toEqual([1, 2, 3, 5, 6]);
  expect(mergeSortedArrays([10, 20], [5, 15, 25])).toEqual([5, 10, 15, 20, 25]);
  expect(mergeSortedArrays([], [1, 2, 3])).toEqual([1, 2, 3]);
  expect(mergeSortedArrays([1, 2, 3], [])).toEqual([1, 2, 3]);
});

// 6. Test for flattenArray function
test("flattenArray function should correctly flatten a nested array to a specified depth", () => {
  expect(flattenArray([1, [2, [3, [4, [5]]]]], 1)).toEqual([
    1,
    2,
    [3, [4, [5]]],
  ]);
  expect(flattenArray([1, [2, [3, [4, [5]]]]], 2)).toEqual([1, 2, 3, [4, [5]]]);
  expect(flattenArray([1, [2, [3, [4, [5]]]]], 3)).toEqual([1, 2, 3, 4, [5]]);
  expect(flattenArray([1, [2, [3, [4, [5]]]]], 4)).toEqual([1, 2, 3, 4, 5]);
});

// 7. Test for gcd function
test("gcd function should correctly find the greatest common divisor with step tracking", () => {
  expect(gcd(10, 5)).toEqual({
    gcd: 5,
    steps: [
      { a: 10, b: 5 },
      { a: 5, b: 0 },
    ],
  });
  expect(gcd(15, 10)).toEqual({
    gcd: 5,
    steps: [
      { a: 15, b: 10 },
      { a: 10, b: 5 },
      { a: 5, b: 0 },
    ],
  });
  expect(gcd(7, 3)).toEqual({
    gcd: 1,
    steps: [
      { a: 7, b: 3 },
      { a: 3, b: 1 },
      { a: 1, b: 0 },
    ],
  });
});




function fibonacci(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}





function reverseString(str) {
  let letters = str.match(/[a-zA-Z]/g);
  if (!letters) return str;
  return str
    .split("")
    .map((char) => (/[a-zA-Z]/.test(char) ? letters.pop() : char))
    .join("");
}



function maxSubArray(arr) {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];
  let start = 0,
    end = 0,
    s = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxEndingHere + arr[i]) {
      maxEndingHere = arr[i];
      s = i;
    } else {
      maxEndingHere += arr[i];
    }

    if (maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere;
      start = s;
      end = i;
    }
  }

  return { maxSum: maxSoFar, subArray: arr.slice(start, end + 1) };
}



// function binarySearch(arr, target, left = 0, right = arr.length - 1) {
//   let comparisons = 0;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     comparisons++;

//     if (arr[mid] === target) {
//       return { found: true, index: mid, comparisons };
//     } else if (arr[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   return { found: false, comparisons };
// }




function mergeSortedArrays(arr1, arr2) {
  let merged = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      if (!merged.includes(arr1[i])) merged.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      if (!merged.includes(arr2[j])) merged.push(arr2[j]);
      j++;
    } else {
      if (!merged.includes(arr1[i])) merged.push(arr1[i]);
      i++;
      j++;
    }
  }

  while (i < arr1.length) {
    if (!merged.includes(arr1[i])) merged.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    if (!merged.includes(arr2[j])) merged.push(arr2[j]);
    j++;
  }

  return merged;
}



function flattenArray(arr, depth = 1) {
  return depth > 0
    ? arr.reduce(
        (flat, toFlatten) =>
          flat.concat(
            Array.isArray(toFlatten)
              ? flattenArray(toFlatten, depth - 1)
              : toFlatten
          ),
        []
      )
    : arr.slice();
}



function gcd(a, b, steps = [{ a, b }]) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
    steps.push({ a, b });
  }
  return { gcd: a, steps };
}

module.exports = {
  fibonacci,
  reverseString,
  maxSubArray,
//   binarySearch,
  mergeSortedArrays,
  flattenArray,
  gcd,
};

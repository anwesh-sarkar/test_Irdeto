let numOfFlips = 0;

// flip the array from index 0 to index k
let flipArray = (arr, k) => {
  for (let i = 0; i < k; i++) {
    let temp = arr[k];
    arr[k] = arr[i];
    arr[i] = temp;
    k--;
    numOfFlips++;
  }

  // stop execution of number of flips > 10 * length of array
  if (numOfFlips > 10 * arr.length) {
    return "Invalid answer. Number of flips > 10 * array.length";
  } else {
    return arr;
  }
};

// find index of max value in the array
let findIndexOfMaxValue = (arr, k) => {
  let maxValue = 0;
  let maxValueIndex = 0;

  for (let i = 0; i < k; i++) {
    if (arr[i] >= maxValue) {
      maxValue = arr[i];
      maxValueIndex = i;
    }
  }

  return maxValueIndex;
};

// check that every element in array is >= 1 AND is <= length of array
let checkElemConstraint = (arr) => {
  function threshold(currentValue) {
    return currentValue >= 1 && currentValue <= arr.length;
  }

  let checkThreshold = arr.every(threshold);

  return checkThreshold;
};

// check that array has no duplicate values
let checkHasDuplicate = (arr) => {
  let checkSameValue = arr.some(
    (currentValue, i) => arr.indexOf(currentValue) !== i
  );

  return checkSameValue;
};

// check that array is not empty
let checkLengthOfArray = (arr) => {
  let result;
  if (arr.length >= 1 && arr.length <= 100) {
    result = true;
  } else {
    result = false;
  }
  return result;
};

//perform flip sort
var flipSort = function (arr) {
  let output = [];

  if (checkElemConstraint(arr) === false) {
    return "Invalid Array. An element is either < 1 OR > array length";
  } else if (checkHasDuplicate(arr) === true) {
    return "Invalid Array. Array has duplicate elements";
  } else if (checkLengthOfArray(arr) === false) {
    return "Invalid Array. Is empty";
  } else {
    for (let i = arr.length; 1 <= i && i <= 100; i--) {
      let maxValueIndex = findIndexOfMaxValue(arr, i); // find the index of the max value in array. First iteration, index of 4 in [3,2,4,1] is 2

      // check if index of max value is not the same as position in the array. First iteration, check that max value = 4 is not at index = 3 (or position 4)
      if (maxValueIndex !== i - 1) {
        flipArray(arr, maxValueIndex); // First iteration, flip the array from 0 to maxValueIndex = 2.  [3,2,4,1] will be flipped to [4,2,3,1]
        flipArray(arr, i - 1); // First iteration, flip the array from to 0 to last index = 3. [3,2,4,1] will be flipped to [1,3,2,4]
        output.push(maxValueIndex + 1); // Push value of position of max value = 3.
        output.push(i); // Push value of length of array which is same as value being sorted
      }
    }
  }
  return output;
};

module.exports = flipSort;

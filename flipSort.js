let numOfFlips = 0;

let flip = (arr, k) => {
  for (let i = 0, j = k; i < k; i++, j--) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    numOfFlips++;
  }

  if (numOfFlips > 10 * arr.length) {
    return;
  } else {
    return arr;
  }
};

let findMaxIndex = (arr, k) => {
  let max = -Infinity;
  let maxIndex = 0;

  for (let i = 0; i < k; i++) {
    if (arr[i] >= max) {
      max = arr[i];
      maxIndex = i;
    }
  }

  return maxIndex;
};

let checkElemConstraint = (arr) => {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < 1 || arr[i] > arr.length) {
      console.log("inside if");
      break;
    } else {
      console.log("inside else");
      return arr;
    }
  }
};

var flipSort = function (arr) {
  let i = arr.length;
  let output = [];

  while (1 <= i && i <= 100) {
    if (checkElemConstraint(arr)) {
      let maxIndex = findMaxIndex(arr, i);

      if (maxIndex !== i - 1) {
        flip(arr, maxIndex);
        flip(arr, i - 1);
        output.push(maxIndex + 1);
        output.push(i);
      }
    }
    i--;
  }
  console.log(arr);
  return output;
};

console.log(flipSort([3, 5, 0]));

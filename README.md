In this project, I created the flip sort algorithm and created unit tests for this algorithm. Unlike a traditional sorting algorithm, which sorts with the fewest comparisons possible, the goal is to sort the sequence in as few reversals as possible.

The first part of the algorithm is to find the index of maximum value in the array.
```
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
```

The second part of the algorithm is to reverse the array from 0 to index of max value
```
let flipArray = (arr, k) => {
  for (let i = 0; i < k; i++) {
    let temp = arr[k];
    arr[k] = arr[i];
    arr[i] = temp;
    k--;
  }
};
```

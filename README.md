# Flip Sort

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

Then, we find the next max value and reverse the array with the index of that max value.
The constraints of the algorithm are:

- The array is not empty
- All elements in the array are unique and are numbers
- The value of each element is > 0 and < length of array
- The values do not repeat
- The number of reversals does not exceed 10 times array length

After cloning the repo, please run

```
yarn
```

or

```
npm install
```

### Unit tests for Flip Sort

The unit tests for this algorithm are written in jest and they exist in the unit-test folder.
To run these tests, please run

```
yarn test
```

or

```
npm test
```

# Bored API tests

The API tests are on the [boredapi](https://www.boredapi.com/)

The tests exist in the **api-test** folder, with the tests written in **jest-cucumber**. The _features_ folder contains the different feature file. Each file represents tests for different APIs:

>

- GET Bored API
- GET Bored API /activity
- GET Bored API /activity/type with search params
- GET Bored API /activity/participants with search params
  >

The _step-definitions_ folder contains the coded steps for the feature file.
To run these tests, please run

```
yarn test
```

or

```
npm test
```

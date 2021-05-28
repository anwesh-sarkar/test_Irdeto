const flipSort = require("../flipSort");

describe("flip sorting of [3,2,4,1] should produce [3,4,2,3,1,2,2,4,1]", () => {
  test("flip sort of [3,2,4,1]", () => {
    expect(flipSort([3, 2, 4, 1])).toEqual([3, 4, 2, 3, 1, 2]);
  });
});

describe("flip sorting of [1,2,3,4] should produce []", () => {
  test("flip sort of [1,2,3,4]", () => {
    expect(flipSort([1, 2, 3, 4])).toEqual([]);
  });
});

describe('invalid element of [2,"a",1] should produce []', () => {
  test('flip sort of [2,"a",1]', () => {
    expect(flipSort([2, "a", 1])).toEqualCaseInsensitive(
      "Invalid Array. Elements may not be numbers"
    );
  });
});

describe("invalid element less than 1 thrown on flip sorting [0,2,1]", () => {
  test("flip sort of [0,2,1]", () => {
    expect(flipSort([0, 2, 1])).toEqualCaseInsensitive(
      "Invalid Array. An element is either < 1 OR > array length"
    );
  });
});

describe("invalid element less than 1 thrown on flip sorting [1,0.2,3]", () => {
  test("flip sort of [1,0.2,3]", () => {
    expect(flipSort([1, 0.2, 3])).toEqualCaseInsensitive(
      "Invalid Array. An element is either < 1 OR > array length"
    );
  });
});

describe("invalid element less than 1 thrown on flip sorting [2,-1,3]", () => {
  test("flip sort of [2,-1,3]", () => {
    expect(flipSort([2, -1, 3])).toEqualCaseInsensitive(
      "Invalid Array. An element is either < 1 OR > array length"
    );
  });
});

describe("invalid element greater than array length thrown on flip sorting [2,5,1,3]", () => {
  test("flip sort of [2,5,1,3]", () => {
    expect(flipSort([2, 5, 1, 3])).toEqualCaseInsensitive(
      "Invalid Array. An element is either < 1 OR > array length"
    );
  });
});

describe("duplicate element error thrown on flip sorting [1,2,2]", () => {
  test("flip sort of [1,2,2]", () => {
    expect(flipSort([1, 2, 2])).toEqualCaseInsensitive(
      "Invalid Array. Array has duplicate elements"
    );
  });
});

describe("empty array error thrown on flip sorting []", () => {
  test("flip sort of []", () => {
    expect(flipSort([])).toEqualCaseInsensitive("Invalid Array. Is empty");
  });
});

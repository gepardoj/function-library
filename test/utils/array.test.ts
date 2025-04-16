import { getContinuousIntervals } from "../../src/utils/array"

test('continuous intervals are correct', () => {
  expect(getContinuousIntervals([1, 4, 5, 2, 3, 9, 8, 11, 0])).toBe("0-5,8-9,11");
  expect(getContinuousIntervals([1, 4, 3, 2])).toBe("1-4");
  expect(getContinuousIntervals([1])).toBe("1");
  expect(getContinuousIntervals([])).toBe("");
});

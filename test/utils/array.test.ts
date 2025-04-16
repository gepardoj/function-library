import { getIntervals } from "../../src/utils/array"

test('get intervals equal ', () => {
  expect(getIntervals([])).toBe("0-");
});

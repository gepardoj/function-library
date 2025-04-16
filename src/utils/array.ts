/**
 * 
 * @param arr unsorted array of number, i.e. [0,2,1,3,4,5,8,9,11]
 * @returns string containing a list of continuous intervals, i.e. "0-5,8-9,11"
 */
export function getContinuousIntervals(arr: number[]): string {
  if (arr.length === 0) return "";
  const intervals: string[] = [];
  const sorted = [...arr].sort((a, b) => a - b);
  intervals.push(`${sorted[0]}`);
  let isAnyGap = false;
  for (let i = 1; i < sorted.length; i++) {
    const prev = sorted[i - 1];
    const curr = sorted[i];
    if (curr - prev > 1) {
      intervals[intervals.length - 1] += `-${prev}`;
      intervals.push(`${curr}`);
      isAnyGap = true;
    }
  }
  if (!isAnyGap && sorted.length > 1) intervals[0] += `-${sorted[sorted.length - 1]}`
  return intervals.join(",")
}
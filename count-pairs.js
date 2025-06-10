// add whatever parameters you deem necessary
function countPairs(arr, targetSum) {
  let numberFrequencies = {};
  let numPairs = 0;

  for (let num of arr) {
    let otherNum = targetSum - num;
    if (numberFrequencies[otherNum] && numberFrequencies[otherNum] > 0) {
      numberFrequencies[otherNum]--;
      numPairs++;
    } else {
      numberFrequencies[num] = (numberFrequencies[num] + 1) || 1;
    }
  }

  return numPairs;
}

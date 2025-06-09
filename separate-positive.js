// add whatever parameters you deem necessary
function separatePositive(arr) {
  let headPointer = 0;
  let tailPointer = 0;

  while (headPointer < arr.length) {
    if (arr[tailPointer] > 0) {
      headPointer++;
      tailPointer++;
    } else if (arr[headPointer] < 0) {
      headPointer++;
    } else {
      //tailPointer points to negative number, headPointer points to positive number, time to swap.
      [arr[tailPointer], arr[headPointer]] = [arr[headPointer], arr[tailPointer]];
      headPointer++;
      tailPointer++;
    }
  }

  return arr;
}

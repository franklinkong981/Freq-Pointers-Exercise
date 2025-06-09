// add whatever parameters you deem necessary
function averagePair(arr, averageValue) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex < rightIndex) {
    let average = arr[leftIndex] + arr[rightIndex] / 2;
    if (average == averageValue) {
      return true;
    } else if(average < averageValue) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }

  return false;
}

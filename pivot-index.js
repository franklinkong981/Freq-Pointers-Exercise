// add whatever parameters you deem necessary
function pivotIndex(nums) {
  if (nums.length == 0) return false;
  if (nums.length == 1) return true;

  let leftSum = 0;
  let rightSum = 0;

  //We assume pivot index could be first value (leftSum = 0) or last value (rightSum = 0)
  let pivotIndex = 0;
  //calculate rightSum first, aka sum from second value to end of array.
  for (let i = 1; i < nums.length; i++) {
    rightSum += nums[i];
  }

  if (leftSum == rightSum) return 0;

  while (pivotIndex < nums.length - 1) {
    leftSum += nums[pivotIndex];
    pivotIndex++;
    rightSum -= nums[pivotIndex];
    if (leftSum == rightSum) return pivotIndex;
  }

  return -1;
}

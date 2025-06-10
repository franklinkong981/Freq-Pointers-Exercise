// add whatever parameters you deem necessary
function longestFall(nums) {
  let longestFall = 1;
  let currentFall = 1;

  if (nums.length == 0) return 0;
  if (nums.length == 1) return 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i-1]) {
      currentFall++;
    } else {
      longestFall = Math.max(longestFall, currentFall);
      currentFall = 1;
    }
  }

  return Math.max(longestFall, currentFall);
}

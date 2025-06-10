// add whatever parameters you deem necessary
function isSubsequence(substring, fullString) {
  let substringPointer = 0;
  let fullStringPointer = 0;

  while (substringPointer < substring.length && fullStringPointer < fullString.length) {
    if (substring[substringPointer] == fullString[fullStringPointer]) {
      substringPointer++;
    }
    fullStringPointer++;
  }

  return substringPointer == substring.length;
}

// add whatever parameters you deem necessary
function twoArrayObject(keyArray, valueArray) {
  let arrayObject = {};
  for (let keyIndex = 0; keyIndex < keyArray.length; keyIndex++) {
    if (keyIndex < valueArray.length) {
      arrayObject[keyArray[keyIndex]] = valueArray[keyIndex];
    } else {
      arrayObject[keyArray[keyIndex]] = null;
    }
  }
  return arrayObject;
}

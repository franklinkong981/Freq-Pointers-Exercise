// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  let num1DigitFrequencies = constructDigitFrequencies(num1);
  let num2DigitFrequencies = constructDigitFrequencies(num2);

  for (let digitKey in num1DigitFrequencies) {
    if (!num2DigitFrequencies[digitKey]) return false;
    if (num1DigitFrequencies[digitKey] != num2DigitFrequencies[digitKey]) return false;
  }

  return true;
}

function constructDigitFrequencies(num) {
  let digitFrequencies = {};

  while (num > 0) {
    let nextDigit = num % 10;
    digitFrequencies[nextDigit] = (digitFrequencies[nextDigit] + 1 || 1);
    num = Math.floor(num / 10);
  }

  return digitFrequencies;
}
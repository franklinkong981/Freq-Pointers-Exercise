// add whatever parameters you deem necessary
function constructNote(message, letters) {
  if (message.length > letters.length) return false;
  const messageFreqCounter = makeFreqCounter(message);
  const lettersFreqCounter = makeFreqCounter(letters);

  for (let letter in messageFreqCounter) {
    if (!lettersFreqCounter[letter]) return false;
		if (messageFreqCounter[letter] > lettersFreqCounter[letter]) return false;
  }
  return true;
}

function makeFreqCounter(str) {
	const freqCounter = {};
	for (let el of str) {
		// If the key exists in freqCounter, increment it by 1. Otherwise, set it to 1.
		freqCounter[el] = (freqCounter[el] + 1) || 1;
	}
	return freqCounter;
}


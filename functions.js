// Sum Zero
function sumToZero(array) {
	let value = false;
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			console.log(array[i], array[j]);
			if (i !== j) {
				if (array[i] + array[j] === 0) {
					value = true;
				}
			}
		}
	}
	console.log(value);
	return value;
}

let array1 = [28, 43, -12, 30, 4, 0, 12];
// sumToZero(array1);

// runtime complexity of the function is O(n^2)

// Unique Characters

function hasUniqueChars(word) {
	let uniqueChars = new Set([]);
	for (let i = 0; i < word.length; i++) {
		uniqueChars.add(word[i]);
	}
	return uniqueChars.size === word.length;
}

// runtime complexity of the function is O(n)

// Pangram Sentence

function isPangram(sentence) {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	const charSet = new Set();
	const lowerSentence = sentence.toLowerCase();

	for (let i = 0; i < lowerSentence.length; i++) {
		const char = lowerSentence[i];
		if (alphabet.includes(char) && !charSet.has(char)) {
			charSet.add(char);
		}
	}
	return charSet.size === alphabet.length;
}

// runtime complexity of the function is O(n)

// Longest Word

function find_longest_word(words) {
	let longestLength = 0;

	for (let i = 0; i < words.length; i++) {
		const word = words[i];
		if (word.length > longestLength) {
			longestLength = word.length;
		}
	}
	return longestLength;
}

// runtime complexity of the function is O(n)

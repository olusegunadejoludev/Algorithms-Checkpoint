function analyzeSentence(sentence) {
  // Check if the sentence ends with a point
  if (sentence.charAt(sentence.length - 1) !== '.') {
      console.log("Error: The sentence does not end with a point.");
      return;
  }

  // Initialize counters for length, words, and vowels
  let lengthCounter = 0;
  let wordsCounter = 0;
  let vowelsCounter = 0;

  // Define a set of vowels for easy and efficient checking
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

  // Iterate through each character in the sentence
  for (let i = 0; i < sentence.length; i++) {
      const char = sentence.charAt(i);

      // Increment the length counter for each character
      lengthCounter++;

      // Check if the character is a space, indicating a new word
      if (char === ' ') {
          wordsCounter++;
      }

      // Check if the character is a vowel
      if (vowels.has(char)) {
          vowelsCounter++;
      }
  }

  // Increment the words counter for the last word (after the last space)
  wordsCounter++;

  // Print the results
  console.log("Length of the sentence:", lengthCounter);
  console.log("Number of words in the sentence:", wordsCounter);
  console.log("Number of vowels in the sentence:", vowelsCounter);
}

// Example usage
const inputSentence = prompt("Enter a sentence ending with a point: ");
analyzeSentence(inputSentence);

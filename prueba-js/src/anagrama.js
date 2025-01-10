export default (word1, word2) => {
  return wordToTest(word1) === wordToTest(word2);
};

function wordToTest(word) {
  return word.toLowerCase().split('').sort().join('');
}
const Sentence = require('./sentence')

test('wordCount', () => {
  expect(Sentence.wordCount('one two')).toBe(2);
});

test('wordsUnique', () => {
  expect(Sentence.wordsUniqueArr('one two')).toEqual(['one', 'two']);
});

test('wordCountUnique', () => {
  expect(Sentence.wordCountUnique('one two')).toBe(2);
  expect(Sentence.wordCountUnique('one one')).toBe(1);
});

test('wordArrayToLength', () => {
  expect(Sentence.wordArrayToLengths(['ab', 'cde'])).toEqual([2, 3]);
});

test('wordLengthSumArray', () => {
  expect(Sentence.wordLengthSumArray('ab cde')).toBe(5);
});

test('wordLengthAverage', () => {
  expect(Sentence.wordLengthAverage('ab cde')).toBe(2.5);
});

test('wordLengthAverageUnique', () => {
  expect(Sentence.wordLengthAverageUnique('ab cde ab')).toBe(2.5);
});

test('provided string', () => {
  const testStr = "The quick brown fox jumps over the lazy dog"
  expect(Sentence.wordsUniqueArr(testStr)).toEqual(['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'lazy', 'dog']);
  expect(Sentence.wordCount(testStr)).toBe(9);
  expect(Sentence.wordCountUnique(testStr)).toBe(8);
  expect(Sentence.wordLengthSumArray(testStr)).toBe(35);
  expect(Sentence.wordLengthAverage(testStr)).toBeCloseTo(3.888);
  expect(Sentence.wordLengthAverageUnique(testStr)).toBe(4);
});
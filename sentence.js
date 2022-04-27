const R = require('ramda')

function toWordsArr(str) {
    return R.map(
        R.toLower,
        R.split(' ', str)
    )
}

function wordArrayToLengths(arr) {
    return R.map(
        R.length,
        arr
    )
}

function wordCount(str) {
    return R.pipe(
        toWordsArr,
        R.length
    )(str)
}

function wordCountUniq(str) {
    return R.pipe(
        toWordsArr,
        R.uniq,
        R.length
    )(str)
}

function wordsUniqueArr(str) {
    return R.pipe(
        toWordsArr,
        R.uniq
    )(str)
}

function wordCountUnique(str) {
    return R.pipe(
        wordsUniqueArr,
        R.length
    )(str)
}

function wordLengthSumArray(str) {
    return R.pipe(
        toWordsArr,
        wordArrayToLengths,
        R.sum,
    )(str)
}

function wordLengthUniqueSumArray(str) {
    return R.pipe(
        toWordsArr,
        R.uniq,
        wordArrayToLengths,
        R.sum,
    )(str)
}

function wordLengthAverage(str) {
    return wordLengthSumArray(str) / wordCount(str)
}

function wordLengthAverageUnique(str) {
    return wordLengthUniqueSumArray(str) / wordCountUniq(str)
}

exports.wordCount = wordCount
exports.wordsUniqueArr = wordsUniqueArr
exports.wordCountUnique = wordCountUnique
exports.wordArrayToLengths = wordArrayToLengths
exports.wordLengthSumArray = wordLengthSumArray
exports.wordLengthAverage = wordLengthAverage
exports.wordLengthUniqueSumArray = wordLengthUniqueSumArray
exports.wordLengthAverageUnique = wordLengthAverageUnique
const palindromes = function (word) {
    const allPossibleCharacters = 'abcdefghijklmopqrstuvwxyz1234567890';

    let cleansed = word
    .toLowerCase()
    .split('')
    .filter((character) => allPossibleCharacters.includes(character))
    .join('');

    const reversedWord = cleansed.split('').reverse().join('');

    return cleansed == reversedWord;

};

// Do not edit below this line
module.exports = palindromes;

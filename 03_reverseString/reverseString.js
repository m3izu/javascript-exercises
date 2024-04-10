const reverseString = function(toReverse) {
    let stringy = toReverse.length;
    let theReversed = '';
    for (let i = stringy; i >= 0; i--) {
        let chary = toReverse.charAt(i)
        theReversed += chary
    };

    return theReversed;
};

// Do not edit below this line
module.exports = reverseString;

const sumAll = function(firstNum, secondNum) {
    if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum)) return "ERROR";
    if (firstNum < 0 || secondNum < 0) return "ERROR";
    if (secondNum < firstNum) {
        const tempo = firstNum;
        firstNum = secondNum;
        secondNum = tempo;
    }

    let sum = 0;
    for (i = firstNum; i <= secondNum; i++) {
        sum += i
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

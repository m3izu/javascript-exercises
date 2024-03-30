const repeatString = function(ball, sack) {
    if (sack < 0) {
        return "ERROR"
    }
    let doodoo = "";
    for (let i = 0; i < sack; i++) {
        doodoo += ball;
    }
    return doodoo
};

// Do not edit below this line
module.exports = repeatString;

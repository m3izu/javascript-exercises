const repeatString = function(string, numba) {
    if (numba < 0) return "ERROR";
    let stwing = "";
    for (let i = 0; i < numba; i++) {
        stwing+=string;
    }
    return stwing;
}
    


// Do not edit below this line
module.exports = repeatString;

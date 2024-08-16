const leapYears = function(leapY) {
    const isItDivisiblebyFour = leapY % 4 === 0;
    const isItACentury =  leapY % 100 === 0;
    const isItDivisibleCentury = leapY % 400 === 0;

    if (isItDivisiblebyFour && (!isItACentury || isItDivisibleCentury)) {
        return true;
    } else {
        return false;
    }


    
};

// Do not edit below this line
module.exports = leapYears;

const fibonacci = function(infut) {
let numb
if (typeof infut !== 'number') {
    numb = parseInt(infut)
} else {
    numb = infut
}

if (numb < 0) return "OOPS";
if (numb == 0) return 0;

let oneP = 1;
let twoP = 0;

for (let i = 2; i <= numb; i++) {
    let current = oneP + twoP;
    twoP = oneP;
    oneP = current;
}
return oneP;
};

// Do not edit below this line
module.exports = fibonacci;

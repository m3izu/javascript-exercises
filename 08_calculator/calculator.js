const add = function(add1, add2) {
	let result = add1 + add2;
  return result;
};

const subtract = function(sub1, sub2) {
  let result2 = sub1 - sub2;
	return result2;
};

const sum = function(arr) {
  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
  }
  return totalSum;
};

const multiply = function(mult) {
  let totalProduct = 1;
  for (let j = 0; j < mult.length; j++) {
    totalProduct *= mult[j];
  }
  return totalProduct;
};

const power = function(base, expo) {
  let totalProd = 1;
  for (let i = 0; i < expo; i++) {
    totalProd *= base
  }
  return totalProd;
};

const factorial = function(fact) {
  let totalProd2 = 1;
  for (let i = fact; i > 1; i--) {
    totalProd2 *= i
  }
	return totalProd2;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

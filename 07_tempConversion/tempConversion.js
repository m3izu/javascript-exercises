const convertToCelsius = function(fahr) {
  const toCelsius = (fahr - 32) * 5/9;
  const finalC = Math.round(toCelsius * 10) / 10;
  return finalC;
};

const convertToFahrenheit = function(celc) {
  const toFahrenheit = (celc * 9/5) + 32
  const finalF = Math.round(toFahrenheit * 10) / 10;
  return finalF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

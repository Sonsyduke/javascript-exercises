const ftoc = function (num) {
  const farenheitNum = ((num - 32) * 5) / 9;
  return Number(farenheitNum.toFixed(1));
};

const ctof = function (num) {
  const celsuisNum = (num * 9) / 5 + 32;
  return Number(celsuisNum.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};

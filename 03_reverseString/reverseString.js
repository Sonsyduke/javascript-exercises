const reverseString = function (string) {
  const newArr = string.split("").reverse().join("");
  console.log(newArr);
  return newArr;
};

// Do not edit below this line
module.exports = reverseString;

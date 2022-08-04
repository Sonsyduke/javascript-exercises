const palindromes = function (str) {
  //   const len = str.length;
  //   for (let i = 0; i < len / 2; i++) {
  //     if (str[i] !== str[len - 1 - i]) {
  //       return false;
  //     }
  //   }
  //   return true;
  const regex = /[^A-Z0-9]/gi;
  const lowCapString = str.toLowerCase().replace(regex, "");
  const reverseString = lowCapString.split("").reverse().join("");
  return reverseString === lowCapString;
};

// Do not edit below this line
module.exports = palindromes;

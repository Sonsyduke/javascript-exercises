const palindromes = function (str) {
  // To get rid of any special characters, spaces
  const regex = /[^A-Z0-9]/gi;
  // To change everything to lowercase and replace the special characters or spaces with an empty string
  const lowCapString = str.toLowerCase().replace(regex, "");
  //   split the lower case string, then reverse it and join it again
  const reverseString = lowCapString.split("").reverse().join("");
  //   Check if they are the same
  return reverseString === lowCapString;
};

// Do not edit below this line
module.exports = palindromes;

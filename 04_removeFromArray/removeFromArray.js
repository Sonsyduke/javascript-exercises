const removeFromArray = function (arr, ...nums) {
  //   const indexNum = arr.indexOf(num);
  //   const removedNum = arr.splice(indexNum, 1);
  //   console.log(arr);
  //   return arr;
  return arr.filter((item) => !nums.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;

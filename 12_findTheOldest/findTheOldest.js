// 1. Create a function to get the age of the person
// 2. Use reduce method to figure out the oldest
// 2.1 create a variale for the oldest
// 2.2 create one for the current

function getAge(year, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - year;
}

const findTheOldest = function (arr) {
  return arr.reduce((oldest, current) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
    return oldestAge < currentAge ? current : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;

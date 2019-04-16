
function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here

  let smallNums = []

  //check each number in supplied array, if < 1 add to the end of the small number array
  nums.forEach(element => {
    if (element < 1) {
      smallNums.push(element)
    }
  })
  return smallNums
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here

  let matchNames = []

  names.forEach(element => {
    if (element[0] == char) {
      matchNames.push(element)
    }
  })
  return matchNames
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  let verbWords = []

  words.forEach(element => {
    if (element.slice(0, 3) === "to ") {
      verbWords.push(element)
    }
  })
  return verbWords

}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let integerNums = []

  nums.forEach(element => {
    if (Number.isInteger(element)) {
      integerNums.push(element)
    }
  })
  return integerNums
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  let userCities = []

  users.forEach(element => {
    userCities.push(element.data.city.displayName)
  })

  return userCities
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here

  let squareRoots = []

  nums.forEach(element => {
    squareRoots.push(
      // get the square root of the number then round to 2 dec places
      Math.round(Math.sqrt(element) * 100) / 100
    )
  })
  return squareRoots
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here

  let matchingSentences = []

  sentences.forEach(element => {
    // check whether the sentence includes the supplied string, having first converted both to lowercase so case-insensitive
    if (
      element.toLowerCase().includes(str.toLowerCase())
    ) {
      // if so add the sentence to the array
      matchingSentences.push(element)
    }
  })
  return matchingSentences
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  let longestSides = []

  triangles.forEach(element => {
    // find the highest value number for this triangle (3 number array) and add it to the list of longest sides
    longestSides.push(Math.max.apply(null, element))
  })

  return longestSides
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};

function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  return word[0].toUpperCase() + word.slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
  return firstName[0] + "." + lastName[0]; 
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
  let totalWithVAT = originalPrice + (originalPrice * (vatRate / 100))
  // return answer to 2 dec places
  return Math.round(totalWithVAT * 100) / 100;

}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
  let reducedPrice = originalPrice - (originalPrice * (reduction/100))
  // return answer to 2 dec places
  return Math.round(reducedPrice * 100) / 100;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
  // find middle of the string 
  // for even numbers this will provide a pointer to the leftmost of the two middle characters
  let middleIndex = Math.round(str.length / 2) - 1

  if (str.length % 2 === 0)
  {
    // string of even length - return middle two characters
   return str.charAt(middleIndex) + str.charAt(middleIndex + 1) 
  }
  else
  {
    // string of odd length - return middle character
    return str.charAt(middleIndex)
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!

  let reversedWord = "";

  for (let i=0; i<word.length; i++)
  {
    reversedWord += word[word.length-1-i]
  }

  return reversedWord
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!

  let reversedArray = [];

  // go thru each word in the array and call the above function to reverse the word
  for (let i=0; i<words.length; i++)
  {
    reversedArray[i] = reverseWord(words[i])
  }

  return reversedArray
}



function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};

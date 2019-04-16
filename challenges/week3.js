function getSquares(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here!

  let squares = [];

  for (let i = 0; i < nums.length; i++) {
    squares[i] = nums[i] * nums[i];
  }
  return squares
}

function camelCaseWords(words) {
  if (!words) throw new Error("words is required");
  // Your code here!

  let camelWords = words[0];

  // go thru each word in the input array (except the first) and call the above function to reverse the word
  for (let i = 1; i < words.length; i++) {
    camelWords += words[i].charAt(0).toUpperCase();
    camelWords += words[i].slice(1);
  }
  return camelWords;
}

function getTotalSubjects(people) {
  if (!people) throw new Error("people is required");
  // Your code here!

  let subjectCount = 0;

  // check each person and their subjects to the count
  people.forEach(
    function (element) {
      for (let i = 0; i < element.subjects.length; i++) {
        subjectCount++
      }
    }
  )
  return subjectCount
}

function checkIngredients(menu, ingredient) {
  if (!menu) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!

  // although working, this code is not v efficient as it continues to execute function
  // after an ingredient has been found, i.e. checks all menus thereafter which is unnecessary
  // would be grateful for advice on efficient alternative - thanks
  ingredientFound = false

  // go through each menu in the array 
  menu.forEach(
    function (element) {
      // check each ingredient in this menu 
      for (let i = 0; i < element.ingredients.length; i++) {
        if (element.ingredients[i] === ingredient) {
          // match found
          ingredientFound = true
        }
      }
    }
  )
  return ingredientFound
}



function checkIfNumExists(array, num)
// a simple function to check if a number is present in an array - to be used in duplicateNumbers function
{
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num)
      return true
  }
  return false
}

function duplicateNumbers(arr1, arr2) {
  if (!arr1) throw new Error("arr1 is required");
  if (!arr2) throw new Error("arr2 is required");
  // Your code here!

  let duplicateArray = []
  let duplicateCount = 0

  // loop to check each number in the first array
  for (let i = 0; i < arr1.length; i++) {
    // check the number versus each element in the second array
    for (let j = 0; j < arr2.length; j++) {
      // check if the numbers match and have not been found before
      if (arr1[i] === arr2[j] &&
        checkIfNumExists(duplicateArray, arr1[i]) === false) {
        // if so then add the number to the array and stop checking this number
        duplicateArray[duplicateCount] = arr1[i]
        duplicateCount++
        break
      }
    }
  }

  // now sort in ascending order to finish off
  duplicateArray.sort()

  return duplicateArray
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};

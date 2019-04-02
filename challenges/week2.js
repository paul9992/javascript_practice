function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  let fillings = [];

  // go thru each word in the array and call the above function to reverse the word
  for (let i=0; i<sandwich.fillings.length; i++)
  {
    fillings[i] = sandwich.fillings[i];
  }

  return fillings
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  if (person.city === "Manchester")
    {return true}
  else
    {return false}
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  const busCapacity = 40;

  return Math.floor ((people-1)/busCapacity) + 1
}

function countSheep(arr) {
  if (!arr) throw new Error("arr is required");
  // Your code here!

  let countSheep = 0;

  arr.forEach (
    function(element)
    {
      if (element === "sheep")
         {countSheep ++}
    }
  )
  return countSheep
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  // Mcr postcode if 1st char is M and second char is a number
  if (
     (person.address.postCode[0] === "M") &&
     (isNaN(person.address.postCode[1]) === false)
     )
  {return true}
else
  {return false}
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};

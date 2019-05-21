const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!

  /* only check up to the penultimate array position */
  for (let i = 0; i < (nums.length - 1); i++) {
    if (nums[i] === n) {
      return nums[i + 1];
    }
  }

  /* if not found, or (possibly) was in final position, return null */
  return null;
}




const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!

  let count0 = 0;
  let count1 = 0;
  let result = {
    0: 0,
    1: 0
  };

  for (let i = 0; i < (str.length); i++) {
    if (str[i] === '0') {
      count0++;
    }
    else if (str[i] === '1') {
      count1++;
    }
  }

  result["0"] = count0;
  result["1"] = count1;

  return (result);
};



const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!

  let num_string = n.toString();
  let reverse_string = "";

  for (let i = 0; i < (num_string.length); i++) {
    reverse_string += num_string[num_string.length - 1 - i];
  }

  return (Number(reverse_string))
};



const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!

  let total = 0;

  arrs.forEach(element => {
    for (let i = 0; i < (element.length); i++) {
      total += element[i];
    }
  }
  )
  return total;
}



const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  let new_arr = [];

  for (let i = 0; i < (arr.length); i++) {
    if (i === 0 || i === arr.length - 1) {
      new_arr[i] = arr[arr.length - 1 - i]
    }
    else {
      new_arr[i] = arr[i]
    }
  }
  return (new_arr)
};



const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!

  var result;

  for (let key in haystack) {
    if ((typeof (haystack[key]) === "string") &&
      (haystack[key].toLowerCase().includes(searchTerm.toLowerCase()))) {
      return true
    }
    else {
      if (haystack[key] === searchTerm) {
        return true
      }
    }
  }
  return false;
};



const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!

  /* declare an unpopulated array (of strings) */
  let str_array = []

  /* declare an unpopulated object with no properties defined as yet */
  let frequencies = {}

  str_array = str.trim().split(" ");

  for (let i = 0; i < str_array.length; i++) {
    let word = str_array[i].toLowerCase().replace(/[^a-zA-Z ]/g, "")

    if (frequencies[word] === undefined) {
      frequencies[word] = 1;
    }
    else {
      frequencies[word]++
    }
  }
  return frequencies
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};

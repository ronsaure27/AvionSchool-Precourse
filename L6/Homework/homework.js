// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  // return the last item of the array
  return arr[arr.length -1];
}

function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  let array = arr;
  for(i = 0; i < array.length; i++){
    array[i] = array[i] + 1;
  };
  return array;
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  let theString = "";
  for(i = 0; i < words.length; i++){
    if(i == words.length - 1){
      theString += words[i];
    }else{
      theString += words[i] + " ";
    }
  }
  return theString;
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  let val = arr.includes(item);
  return val;
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  var theNumber = 0;
  numbers.forEach((number)=>{
    theNumber += number;
  })
  return theNumber;
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  let scores = 0;
  testScores.forEach((testscore)=>{
    scores += testscore
  })
  return scores / testScores.length;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  numbers.sort((a,b)=>{return a-b});
  return numbers[numbers.length - 1];
}

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  if(arguments.length == 0){
    return 0;
  }
  if(arguments.length == 1){
    return arguments[0];
  }
  var theArrayProduct = 1;
	for(i = 0; i < arguments.length; i++){
    theArrayProduct *= arguments[i];
  }
  return theArrayProduct;
}
// Do not modify code below this line.
// --------------------------------

module.exports = {
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber,
  multiplyArguments,
};
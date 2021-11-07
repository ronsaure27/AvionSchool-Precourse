// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  var product = n;
  loop(n);
  function loop(n){
      if(n == 1) {
        return;
      };
      if(n != 1){
          n -= 1;
      }
      product *= n; 
      loop(n);
  }
  return product;
}

function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  var initial = 1;
  var next = 2;
  loop(n);
  function loop(n){
      if(n <= 1){
          return;
      }
      var temp = initial + next;
      initial = next;
      next = temp;
      n -= 1;
      loop(n);
  }       
  return initial;         
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
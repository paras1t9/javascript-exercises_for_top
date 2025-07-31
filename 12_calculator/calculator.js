const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
  let sum = 0;
	for (let element of arr){
    sum += element;
  }
  return sum;
};

const multiply = function(arr) {
  let product = 1;
  for (let num of arr){
    product *= num;
  }
  return product;
};

const power = function(a, b) {
  let result = 1
  for (let count = 0; count < b; count++){
    result *= a;
  }
  return result;
};

const factorial = function(int) {
	let num = 1;
  if (int === 0){
    return num;
  }else{
    for(let digit = int; digit > 0; digit--){
      num *= digit;
    }
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

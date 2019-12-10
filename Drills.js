// #12, 13, 14
// 1
function countSheep(num) {
  for(let i=0; i<num; i++) {
    console.log('Another sheep jumps over the fence')
  };
  console.log('All sheep jumped over the fence')
}
//console.log(countSheep(1));
//Big 0: 

// 2
function powerCalculator(base, exponent) {
  let result = base;
  for(let i=1; i<exponent; i++) {
    result = result * base;
  }
  return result;
}
//console.log(powerCalculator(2, 2));
//Big O: 

// 3
function reverseString(str) {
  let reverse = '';
  for(let i=str.length-1; i>=0; i--) {
    reverse += str.charAt(i)
  }
  return reverse;
}
//console.log(reverseString('seed'));
//Big O:

// 4
function trianglar(n) {
  let result = 0;
  for(let i=n; i>=0; i--) {
    result += 1
  }
  return result;
}
//console.log(trianglar(10));
//Big 0:

// 5
function splitString(str) {
  let result = [];
  let newString = '';
  for(let i=0; i<=str.length; i++) {
    if(str[i] !== '/' && str[i] !== undefined) {
      newString += str[i]
    } else {
      result.push(newString);
      newString = '';
    }
  }
  return result;
}
//console.log(splitString('02/22/2020'))
//Big O:

// 6
function fibonacci(n) {

}

// 7
function factorial(n) {

}



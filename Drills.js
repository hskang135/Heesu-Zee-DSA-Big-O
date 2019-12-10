// #11
let count = 0;
function hanoi(disks, origin, destination, temp) {
  if(disks === 1) {
    console.log(`${disks} moving ${origin} -> ${destination} count: ${++count}`)
  } else {
    hanoi(disks-1, origin, temp, destination);
      console.log(`${disks} moving ${origin} -> ${destination} count: ${++count}`);
    hanoi(disks-1, temp, destination, origin)
  }
}
console.log(hanoi(3, 'A', 'B', 'C'));

//#11 - 1
// After 7 recursive calls, 2 largest disks will be on A and 3 smallest disks will be on B.

//#11 -2
// 3 disks = 7 moves
// 4 disks = 15 moves
// 5 disks = 31 moves

// #11 - 3 
// Big O: Exponential time 0(2^n - 1)

// #12, 13, 14
// 1
function countSheep(num) {
  for(let i=0; i<num; i++) {
    console.log('Another sheep jumps over the fence')
  };
  console.log('All sheep jumped over the fence')
}
//console.log(countSheep(1));
//Big 0: Linear 0(n)

// 2
function powerCalculator(base, exponent) {
  let result = base;
  for(let i=1; i<exponent; i++) {
    result = result * base;
  }
  return result;
}
//console.log(powerCalculator(2, 2));
//Big O: Linear 0(n)

// 3
function reverseString(str) {
  let reverse = '';
  for(let i=str.length-1; i>=0; i--) {
    reverse += str.charAt(i)
  }
  return reverse;
}
//console.log(reverseString('roftshjhw'));
//Big O: Linear 0(n)

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
//Big O: Linear 0(n)

// 6
function fibonacci(n) {
  let result = [];
  if(n <= 0) return 0;

  for(let i=1; i<=n; i++) {
    let fibnum = null;
    if(i == 1) {
      fibnum = 1
    }
    if(i == 2) {
      fibnum = 1
    }
    if(i > 2) {
      fibnum = result[i-2] + result[i-3]
    }
    result.push(fibnum)
  }
  return result
}
//console.log(fibonacci(13));
//Big 0: Linear 0(n)

// 7
function factorial(n) {
  let result = 1;
  for(let i=n; i>0; i--) {
    if(i === 1) {
      result = result
    }
    result = result * i
  }
  return result
}
//console.log(factorial(5));
//Big 0: Linear 0(n)



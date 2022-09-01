// Write a function that calculates the sum of all numbers from 1 up to (and including) some number n

// SOLUTION 1
// we create a function that takes (n) as an argument and then loop through (n) using for loop

function addUpTo(n){
    let total = 0;
    for(var i=1; i<=n; i++){
        total += i;
    }
    return total;
}

addUpTo();

// solution 2
function addUpTo(n){
   return  n *(n + 1) / 2;
}

addUpTo();

//in finding ways to ascertain which algorithm is best or fast for solving a problem,
// i found out that timing our code to check which is faster has some problems which are listed below
// 1. different manchines will record different times.
// 2. the same manchine will record different times.
// 3. for fast algorithms, speed measurements may not be precise enough.

// below is a code snippet to time/measure the speed of your code.

var time1 = performance.now();
// write your invoked function here!
var time2 = performance.now();
console.log(`Time elapsed: ${t2-t1/1000} seconds.`)
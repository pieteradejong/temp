function factorial(n) {
        if (n < 0) {
            return;
        }
        if (n === 0) {
          return 1;
        } 
        var accum = n;
        for (var i = n-1; i >= 1; i--){ 
            accum *= i;
        }
        return accum;
    }

    function nChooseR(n, r) {
        return factorial(n) / (factorial(r) * factorial(n-r));
    }


console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
// console.log(factorial(1)); // 1
// console.log(factorial(1)); // 1

console.log("nCr: ", nChooseR(1,1));

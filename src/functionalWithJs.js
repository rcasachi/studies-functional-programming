// First-Class Citizen Functions
// you can always insert functions inside a function
// without any restrictions present.
function executeFunctions(x, y) {
    const add = (x, y) => x + y;
    const subtract = (x, y) => x - y;
    console.log(`sum: ${add(x,y)}`);
    console.log(`difference: ${subtract(x,y)}`);
}

// Higher-Order Functions
// A higher order function either takes a function as an 
// argument or returns a function. Or both.
function greaterThan(n) {
    return x => x > n;
}
let greaterThanTwo = greaterThan(2);
console.log(greaterThanTwo(5));

// Function Composition
// is an act of composing/creating functions that allow
// you to further simplify and compress your functions 
// by taking functions as an argument and return an output.
// It may also return another function as its output other 
// than numerical/string values.
var compose = (f, g) => (x) => f(g(x));
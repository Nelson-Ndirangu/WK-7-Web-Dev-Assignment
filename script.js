// Local and global value declarations in a function
globalVar = "I am global"; // Implicitly global
function myFunction() {
    var localVar = "I am local";
    console.log(localVar); // Accessible here
    console.log(globalVar); // Accessible here
}
myFunction();

// Return values from functions
function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // Outputs: 8


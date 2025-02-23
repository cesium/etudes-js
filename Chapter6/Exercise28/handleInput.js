// Create a function that handles both string and number types using union types.
function handleInput(input) {
    if (typeof input == 'string') {
        console.log("Length: " + input.length);
    }
    else {
        console.log("Square: " + (Math.pow(input, 2)));
    }
}
handleInput("TypeScript"); // Output: "Length: 10"
handleInput(4); // Output: "Square: 16"

// Create a function that handles both string and number types using union types.

function handleInput(input: string | number): void {
  if (typeof input == "string") {
    console.log("Length:", input.length)
  } else {
    console.log("Square:", input*input)
  }
}

handleInput("TypeScript"); // Output: "Length: 10"
handleInput(4); // Output: "Square: 16"

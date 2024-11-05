// Define a function that takes an object and a key, returning the value of that key.

// function getProperty<T, K extends keyof T>(obj: ?, key: ?): T[K] {}

const car = { make: "Toyota", model: "Corolla", year: 2020 };
console.log(getProperty(car, "make")); // Output: "Toyota"
console.log(getProperty(car, "year")); // Output: 2020

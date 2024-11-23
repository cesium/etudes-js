// Define a function that returns the first element of an array using generics.
// TIP: Read about generics in TypeScript at https://www.typescriptlang.org/docs/handbook/2/generics.html.

function getFirstElement<Type>(arg : Array<Type>): Type {
    return arg[0]
};

console.log(getFirstElement<number>([1, 2, 3])); // Output: 1
console.log(getFirstElement<string>(["a", "b", "c"])); // Output: "a"

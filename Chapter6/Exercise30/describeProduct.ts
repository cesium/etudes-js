// Define a type alias for a Product and create a function that describes the product.

type Product = {
  // Your implementation here
};

function describeProduct(product: Product): string {
  // Your implementation here
}

console.log(describeProduct({ name: "Laptop", price: 999 })); // Output: "Laptop costs $999"
console.log(describeProduct({ name: "Phone", available: true })); // Output: "Phone is available"
console.log(describeProduct({ name: "Printer", available: true, price: 70 })); // Output: "Printer is available" "Printer costs $70"
console.log(describeProduct({ name: "Table" })); // Output: "Table is not available"

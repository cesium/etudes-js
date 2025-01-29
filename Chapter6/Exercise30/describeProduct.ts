// Define a type alias for a Product and create a function that describes the product.

type Product = {
  name: string;
  available?: boolean;
  price?: number;
};

function describeProduct(product: Product): string {
  let result = `${product.name} `;

  if (product.available === false || product.available === undefined) {
    if (product.price === undefined) {
      return result += "is not available";
    }
    else return result += `costs $${product.price}`;
  }

  if (product.available) {
    result += "is available";
  }

  if (product.price !== undefined) {
    result += `\n${product.name} costs $${product.price}`;
  }

  return result;
}

console.log(describeProduct({ name: "Laptop", price: 999 })); // Output: "Laptop costs $999"
console.log(describeProduct({ name: "Phone", available: true })); // Output: "Phone is available"
console.log(describeProduct({ name: "Printer", available: true, price: 70 })); // Output: "Printer is available" "Printer costs $70"
console.log(describeProduct({ name: "Table" })); // Output: "Table is not available"

// Define a type alias for a Product and create a function that describes the product.

type Product = {
  name : string, 
  price?: number, 
  available?: boolean 
};

function describeProduct(product: Product): string {
  if (product.hasOwnProperty("price")) { 
    if (product.hasOwnProperty("available")) { 
      return `${product.name} is available. ${product.name} costs $${product.price}`
    } else { 
      return `${product.name} costs $${product.price}`
    }
  } else if (product.hasOwnProperty("available")) { 
    return `${product.name} is available`
  }  else { 
    return `${product.name} is not available`
  }
}

console.log(describeProduct({ name: "Laptop", price: 999 })); // Output: "Laptop costs $999"
console.log(describeProduct({ name: "Phone", available: true })); // Output: "Phone is available"
console.log(describeProduct({ name: "Printer", available: true, price: 70 })); // Output: "Printer is available" "Printer costs $70"
console.log(describeProduct({ name: "Table" })); // Output: "Table is not available"

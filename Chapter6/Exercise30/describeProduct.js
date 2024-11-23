// Define a type alias for a Product and create a function that describes the product.
function describeProduct(product) {
    var msg = product.name;
    if ("available" in product) {
        if (product.available)
            msg = msg += " is available";
        else
            msg += " is not available";
    }
    if ("price" in product) {
        msg += " costs $" + product.price;
    }
    return msg;
}
console.log(describeProduct({ name: "Laptop", price: 999 })); // Output: "Laptop costs $999"
console.log(describeProduct({ name: "Phone", available: true })); // Output: "Phone is available"
console.log(describeProduct({ name: "Printer", available: true, price: 70 })); // Output: "Printer is available" "Printer costs $70"
console.log(describeProduct({ name: "Table" })); // Output: "Table is not available"

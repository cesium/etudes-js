// Define a type alias for a Product and create a function that describes the product.
function describeProduct(product) {
    var str;
    str = product.name;
    if (product.available != undefined) {
        str += " is available";
        if (product.price != undefined) {
            str += "\n" + product.name + " costs $" + product.price;
        }
    }
    else {
        if (product.price != undefined) {
            str += " costs $" + product.price;
        }
        else {
            str += " is not available";
        }
    }
    return str;
}
console.log(describeProduct({ name: "Laptop", price: 999 })); // Output: "Laptop costs $999"
console.log(describeProduct({ name: "Phone", available: true })); // Output: "Phone is available"
console.log(describeProduct({ name: "Printer", available: true, price: 70 })); // Output: "Printer is available" "Printer costs $70"
console.log(describeProduct({ name: "Table" })); // Output: "Table is not available"

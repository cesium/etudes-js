// Define an interface for User and create a function that greets the user by name.
function greetUser(user) {
    console.log('Welcome,', user.name);
}
var user = { name: "Alice", age: 25 };
greetUser(user); // Output: "Welcome, Alice!"

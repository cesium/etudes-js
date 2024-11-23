// Define an interface for User and create a function that greets the user by name.

interface User {
  name: string
  age?: number
}

function greetUser(user: User): void {
  console.log('Welcome,', user.name)
}

const user: User = { name: "Alice", age: 25 };
greetUser(user); // Output: "Welcome, Alice!"

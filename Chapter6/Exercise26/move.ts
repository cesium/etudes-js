// Define an enum for Directions and a function that performs an action based on the direction.

enum Direction {
  Up = 'up', 
  Down = 'down', 
  Right = 'right', 
  Left = 'left'
}

function move(direction: Direction): void {
  console.log("Moving " + direction);
}

move(Direction.Up); // Output: "Moving up"
move(Direction.Left); // Output: "Moving left"

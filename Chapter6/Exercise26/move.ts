// Define an enum for Directions and a function that performs an action based on the direction.

enum Direction {
  Up,
  Down,
  Left,
  Right 
}
// Your implementation here

function move(direction: Direction): void {
  if (direction == Direction.Up) { 
    console.log ("Moving up");
  } else if (direction == Direction.Down) { 
    console.log("Moving down") 
  } else if (direction == Direction.Left) { 
    console.log ("Moving left")
  } else {
    console.log("Moving right");
  }
}

move(Direction.Up); // Output: "Moving up"
move(Direction.Left); // Output: "Moving left"

// Define an enum for Directions and a function that performs an action based on the direction.

enum Direction {
  Up,
  Down,
  Left,
  Right,
}
// Your implementation here

function move(direction: Direction): void {
  switch (direction) {
    case Direction.Up:
      console.log("Moving up");
      break;
    case Direction.Down:
      console.log("Moving down");
      break;
    case Direction.Left:
      console.log("Moving left");
      break;
    case Direction.Right:
      console.log("Moving right");
      break;
    default:
      console.log("Error!");
      break;
  }
}

move(Direction.Up); // Output: "Moving up"
move(Direction.Left); // Output: "Moving left"

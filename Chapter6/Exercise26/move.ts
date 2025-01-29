// Define an enum for Directions and a function that performs an action based on the direction.

enum Direction {
  Up,
  Down,
  Left,
  Right,
};

function move(direction: Direction): void {
  console.log(`Moving ${Direction[direction].toLowerCase()}`);
}

move(Direction.Up); // Output: "Moving up"
move(Direction.Left); // Output: "Moving left"

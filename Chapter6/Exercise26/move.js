// Define an enum for Directions and a function that performs an action based on the direction.
var Direction;
(function (Direction) {
    Direction["Up"] = "up";
    Direction["Down"] = "down";
    Direction["Right"] = "right";
    Direction["Left"] = "left";
})(Direction || (Direction = {}));
function move(direction) {
    console.log("Moving " + direction);
}
move(Direction.Up); // Output: "Moving up"
move(Direction.Left); // Output: "Moving left"

console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    if (count < 1){
        console.log("Please enter a positive number.");
        return;
    }
  for (let i = 0; i <= count; i++) {
    if (i % 2 == 1){
      console.log(i);
    }
  }
}

printOdds(30);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
    let aboveSixteen = `Congrats ${userName}, you can drive!`
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`
    // if (userName, age) {
    //     console.log("Please enter your name and age.")
    if (age < 16) {
        console.log(belowSixteen);
    } else {
        console.log(aboveSixteen);
    }
}


checkAge("JPJ", 21)

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function whichQuadrant(x, y) {
  let quadrant1 = "Your point is in Quadrant 1.";
  let quadrant2 = "Your point is in Quadrant 2.";
  let quadrant3 = "Your point is in Quadrant 3.";
  let quadrant4 = "Your point is in Quadrant 4.";
  if (x == 0 && y == 0) {
    console.log("Your point is at the origin.");
  } else if (x == 0 || y == 0) {
    if (x == 0) {
      console.log("Your point is on the y axis.");
    } else {
      console.log("Your point is on the x axis.");
    }
  }
  if (x > 0 && y > 0) {
    console.log(quadrant1);
  } else if (x < 0 && y > 0) {
    console.log(quadrant2);
  } else if (x < 0 && y < 0) {
    console.log(quadrant3);
  } else if (x > 0 && y < 0) {
    console.log(quadrant4);
  }
}

whichQuadrant(-1, 5);

// Exercise 4 Section
console.log("EXERCISE 3:\n==========\n");

function triangle(a, b, c) {
  if (a + b <= c || b + c <= a || c + a <= b) {
    console.log("Invalid triangle.");
  } else if (a === b && b === c) {
    console.log("Equilateral triangle.");
  } else if (a === b || b === c || a === c) {
    console.log("Isosceles triangle.");
  } else {
    console.log("Scalene triangle.");
  }
}

triangle(3, 3, 3);

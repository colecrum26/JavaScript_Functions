console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
  if (count < 1) {
    console.log("Please enter a positive number.");
    return;
  }
  for (let i = 0; i <= count; i++) {
    if (i % 2 == 1) {
      console.log(i);
    }
  }
}

// printOdds(30);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
  let aboveSixteen = `Congrats ${userName}, you can drive!`;
  let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
  if ((userName, age)) {
    if (age < 16) {
      console.log(belowSixteen);
    } else {
      console.log(aboveSixteen);
    }
  } else {
    console.log("Please enter both your name and age.");
  }
}

// checkAge("JPJ", 21);

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

// whichQuadrant(-1, 5);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

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

// triangle(3, 3, 3);

// BONUS Exercise 5 Section
console.log("BONUS EXERCISE 5:\n==========\n");

function planStatus(planLimit, day, usage) {
  let plan = 30;
  let daysRem = plan - day;
  let avgUse = planLimit / plan;
  let dayUse = usage / day;
  let dataRem = planLimit - usage;
  let planRem = dataRem / day;
  let expUsage = dayUse * plan - planLimit;
  console.log(`${day} days used, ${daysRem} days remaining`);
  console.log(`Average expected daily use: ${avgUse} GB/day`);
  if (dayUse > avgUse && usage < planLimit) {
    console.log(
      `You are EXCEEDING the average expected daily use at ${dayUse} GB/day. You have ${dataRem} GB left for the plan. Continuing this high usage, 
you'll exceed your data plan by ${expUsage} GB. To stay below your plan, use no more than ${planRem} GB/day.`);
  } else if (dayUse == avgUse) {
    console.log(
      `You are RIGHT ON the average daily use under the plan. You have ${dataRem} GB left for the plan. Continue this usage to stay in line with the data plan.`);
  } else if (dayUse < avgUse) {
    console.log(
      `You are BELOW the average daily use. You have ${dataRem} GB left for the plan. You may continue at the current usage or move up to ${planRem} GB/day.`
    );
  } else {
    console.log(
      "You are out of data for the plan period. Your phone will self-destruct in 3... 2... 1..."
    );
  }
}

planStatus(100, 15, 25);

/* https://www.typescriptlang.org/docs/handbook/2/narrowing.html#instanceof-narrowing */

class Bird {
  fly() {
    console.log("flying...");
  }
  layEggs() {
    console.log("laying eggs...");
  }
}

const pet = new Bird();

// instanceof
if (pet instanceof Bird) {
  pet.fly();
} else {
  console.log("pet is not a bird");
}

function logValue(x: Date | string) {
  if (x instanceof Date) {
    // X is date
    console.log(x.toUTCString());
  } else {
    // X is string
    console.log(x.toUpperCase());
  }
}

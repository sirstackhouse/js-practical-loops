// Fizz Buzz
for (let x = 0; x < 100; x++) { //incrementing to 100
    if (x % 15 == 0){ //checking if x is divisible by both 3 and 5 (must come first)
        console.log("Fizz Buzz")
    } else if (x % 5 ==0) { //checking if x is divisible by 5
        console.log("Buzz")
    } else if (x % 3 === 0) { //checking if x is divisible by 3
        console.log("Fizz");
    } else {
        console.log(x); //if x is not divisible by 3 or 5, print x
    }
}

// Prime Time
let n = 13;
let closePrime = n + 1;

for (let b = closePrime; ; b++) {
  let prime = true;

  for (let f = 2; f <= Math.sqrt(b); f++) {
    if (b % f === 0) {
      prime = false;
      break;
    }
  }
  if (prime) {
    closePrime = b;
    break;
  }
}
console.log(closePrime);
// Example:

// 	•	For n = 13, the code starts with closePrime = 14.
// 	•	It checks 14 (not prime), then 15 (not prime), 16 (not prime), and finally reaches 17, which is prime.
// 	•	The code outputs 17, the next prime number after 13.

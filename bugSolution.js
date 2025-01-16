function myFunc() {
  let x = 10;
  if (true) {
    // Avoid redeclaring the variable.  Instead, just assign a new value.
    x = 20; 
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 20
}
let num = 4;
function increment(callback) {
  num += 1;
  console.log(num);
  callback();
}
function decrement() {
  num -= 1;
  console.log(num);
}

increment(decrement);

//function passed as an argument to another function, and then executed later.
// passed function will execute/call after main function work complete

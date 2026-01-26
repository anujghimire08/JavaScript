// always remember to clear TIMER , if not the kep running in bg.
let count = 0;
let clr = setInterval(() => {
  if (count < 4) {
    count++;
    console.log("hello");
  } else {
    clearInterval(clr);
  }
}, 1000);

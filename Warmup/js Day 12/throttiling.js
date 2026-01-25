const input = document.querySelector("input");

function throttling(fun, delay) {
  let lastTime = 0;
  return function (...args) {
    let now = Date.now();
    if (now - lastTime >= delay) {
      lastTime = now;
      fun(...args);
    }
  };
}

input.addEventListener(
  "input",
  throttling(function (e) {
    console.log(e.target.value);
  }, 2000),
);

// throttling - invocation of a function at a given interval , does not depends upon events

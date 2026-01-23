const input = document.getElementById("xyz");

function debounce(fnc, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fnc(...args);
    }, delay);
  };
}

input.addEventListener(
  "input",
  debounce(function (e) {
    console.log(e.target.value);
  }, 1000),
);

// // Step 1: Create the debounce function
// function debounce(func, delay) {
//   let timeoutId;
//   return function (...args) {
//     clearTimeout(timeoutId); // reset the timer on every call
//     timeoutId = setTimeout(() => {
//       func.apply(this, args); // call the function after delay
//     }, delay);
//   };
// }

// // Step 2: Function we want to debounce
// function searchQuery(query) {
//   console.log("Searching for:", query);
// }

// // Step 3: Create a debounced version
// const debouncedSearch = debounce(searchQuery, 500); // 500ms delay

// // Step 4: Simulate typing in an input box
// document.getElementById("xyz").addEventListener("input", (e) => {
//   debouncedSearch(e.target.value);
// });

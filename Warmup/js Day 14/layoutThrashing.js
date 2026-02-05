const ul = document.querySelector("ul");
const space = document.createDocumentFragment();

for (let i = 0; i < 100; i++) {
  const li = document.createElement("li");
  li.textContent = i;
  space.appendChild(li);
}

ul.appendChild(space);
// <h1>Layout Thrashing(reflows/ repaints)</h1>
// <i>ways of avoiding layout thrashing</i>

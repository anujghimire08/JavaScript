const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const body = document.querySelector("body");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const card = document.createElement("div");
  card.classList.add("card");

  const profile = document.createElement("div");
  profile.classList.add("image");

  let img = document.createElement("img");
  img.setAttribute("src", inputs[0].value);
  img.classList.add("img");
  profile.appendChild(img);

  let h1 = document.createElement("h1");
  h1.textContent = inputs[1].value;

  let h4 = document.createElement("h4");
  h4.textContent = inputs[2].value;

  let p = document.createElement("p");
  p.textContent = inputs[3].value;
  p.classList.add("p");

  card.appendChild(profile);
  card.appendChild(h1);
  card.appendChild(h4);
  card.appendChild(p);
  body.appendChild(card);
  form.reset();
});

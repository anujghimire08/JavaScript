const jokeCard = document.getElementById("joke-card");
const jokeSetup = document.getElementById("setup");
const box = document.getElementById("box");
const jokePunchline = document.getElementById("punchline");
const jokeBtn = document.getElementById("jokeBtn");

async function getJokes() {
  const res = await fetch("https://official-joke-api.appspot.com/random_joke");
  if (!res.ok) throw new Error("Network response was not OK");

  const data = await res.json();
  console.log(data);
  box.innerHTML = `
  <div id="setup">${data.setup}</div>
  <div id="genre">${data.type}</div>
  <br />
  <div id="punchline">${data.punchline}</div>
  <br />`;
}

getJokes();

jokeBtn.addEventListener("click", getJokes);

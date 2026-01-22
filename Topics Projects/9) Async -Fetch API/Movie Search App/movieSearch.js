const searchBtn = document.getElementById("searchBtn");
const infoBox = document.getElementById("info-box");
const title = document.getElementById("title");
const released = document.getElementById("released");
const genre = document.getElementById("genre");
const language = document.getElementById("language");

async function getDetails(movie) {
  let apiKey = "e8ff634a";
  try {
    const res = await fetch(
      `http://www.omdbapi.com/?t=${movie}&apikey=${apiKey}`,
    );
    const data = await res.json();
    console.log(data);
    infoBox.innerHTML = ` <div class="movie-card" id="movieCard">
        <img
          id="poster"
          src="${data.Poster}"
          alt="Movie Poster"
        />

        <div class="movie-info">
          <h2 id="title">${data.Title}</h2>
          <p>
            <strong>Released:</strong> <span id="released">${data.Released}</span>
          </p>
          <p>
            <strong>Genre:</strong>
            <span id="genre">${data.Genre}</span>
          </p>
          <p><strong>Language:</strong> <span id="language">${data.Language}</span></p>
          <p><strong>Rating:</strong> <span  id="rating">${data.imdbRating}</span>/10</p>
          <p class="plot" id="plot">
          ${data.Plot}
          </p>
        </div>
      </div>`;
  } catch (err) {
    alert("rejected");
  }
}

searchBtn.addEventListener("click", () => {
  getDetails(document.getElementById("movieInput").value);
  document.getElementById("info-box").style.display = "flex";
});

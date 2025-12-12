const API_URL = "http://103.16.116.155:8000/movies";

async function loadMovies() {
  const res = await fetch(API_URL);
  const movies = await res.json();

  const container = document.getElementById("movies");

  movies.forEach(m => {
    const card = document.createElement("div");
    card.className = "movie-card";

    card.innerHTML = `
      <img src="${m.poster}" alt="${m.title}" />
      <h3>${m.title}</h3>
      <p>${m.overview.substring(0, 100)}...</p>
    `;

    container.appendChild(card);
  });
}

loadMovies();

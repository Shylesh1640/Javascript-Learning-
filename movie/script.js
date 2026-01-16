const API_KEY = "e96bac2b";

const input = document.getElementById("movie-input");
const button = document.getElementById("fetch-button");
const poster = document.getElementById("movie-poster");
const info = document.getElementById("movie-info");
const errorel = document.getElementById("error-message");

const showerror = (message) => {
    errorel.textContent = message;
};

const clearui = () => {
    showerror("");
    poster.style.display = "none";
    poster.src = "";
    info.innerHTML = "";
};

button.addEventListener("click", fetchmovie);
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        fetchmovie();
    }
});
 
async function fetchmovie() {
    clearui();

    const movieName = input.value.trim();
    if (movieName === "") {
        showerror("Please enter a movie name.");
        return;
    }

    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(movieName)}&plot=short`;

    try {
        const response = await fetch(url, { cache: "no-store" });
        const data = await response.json();

        if (!response.ok || data.Response === "False") {
            showerror(data.Error || "Movie not found.");
            return;
        }

        if (data.Poster && data.Poster !== "N/A") {
            poster.src = data.Poster;
            poster.style.display = "block";
        }

        info.innerHTML = `
            <strong>${data.Title}</strong> (${data.Year || "-"})<br>
            ⭐ IMDb Rating: ${data.imdbRating || "-"}<br>
            🎬 Genre: ${data.Genre || "-"}<br>
            🗣️ Language: ${data.Language || "-"}<br>
            📃 Plot: ${data.Plot || "-"}<br>
            🎭 Actors: ${data.Actors || "-"}<br>
            🏆 Awards: ${data.Awards || "-"}<br>
        `;
    } catch (error) {
        showerror("Failed to fetch movie data. Please try again later.");
        console.error(error);
    }
}

button.addEventListener("click", fetchmovie);
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        fetchmovie();
    }
});
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
    info.innerHTML = "";
};

async function fetchmovie() {
    clearui();

    const movieName = input.value.trim();
    if (movieName === "") {
        showerror("Please enter a movie name.");
        return;
    }
    const url = `https://www.omdbapi.com/?t=apikey=${API_KEY}&t=${encodeURIComponent(movieName)}&plot=sort`;
    try{
        const response = await fetch(url,{cache: "no-store"});
        const text = await response.text();

        let data;
        try {
            data = JSON.parse(text);
        } catch (parseError) {
            showerror("Received malformed data from the server.");
            return;
        }
    }
    catch (error) {
        showerror("Failed to fetch movie data. Please try again later.");
        return;
    }
}
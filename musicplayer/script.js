const songs = [
    {
        image: "./img1.jpg",
        name: "Song 1",
        artist: "Artist 1",
        music: "./music1.mpeg"
    },
    {
        image: "./img2.jpg",
        name: "Song 2",
        artist: "Artist 2",
        music: "./music2.mpeg"
    },
    {
        image: "./img3.jpg",
        name: "Song 3",
        artist: "Artist 3",
        music: "./music3.mpeg"
    }
];

// Get DOM elements
const img = document.getElementById("img");
const songTitle = document.getElementById("songTitle");
const artist = document.getElementById("artist");
const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const shuffleBtn = document.getElementById("shuffle");
const repeatBtn = document.getElementById("repeat");
const slider = document.getElementById("slider");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");

let currentSong = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;

// Load song
function loadSong(index) {
    const song = songs[index];
    img.src = song.image;
    songTitle.textContent = song.name;
    artist.textContent = song.artist;
    audio.src = song.music;
}

// Play song
function playSong() {
    isPlaying = true;
    audio.play();
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline";
    img.classList.add("playing");
}

// Pause song
function pauseSong() {
    isPlaying = false;
    audio.pause();
    playBtn.style.display = "inline";
    pauseBtn.style.display = "none";
    img.classList.remove("playing");
}

// Previous song
function prevSongFunc() {
    currentSong--;
    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }
    loadSong(currentSong);
    if (isPlaying) playSong();
}

// Next song
function nextSongFunc() {
    if (isShuffle) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSong);
        currentSong = randomIndex;
    } else {
        currentSong++;
        if (currentSong >= songs.length) {
            currentSong = 0;
        }
    }
    loadSong(currentSong);
    if (isPlaying) playSong();
}

// Format time (seconds to mm:ss)
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

// Update progress bar
function updateProgress() {
    if (audio.duration) {
        const progress = (audio.currentTime / audio.duration) * 100;
        slider.value = progress;
        currentTimeEl.textContent = formatTime(audio.currentTime);
    }
}

// Set duration when metadata loads
audio.addEventListener("loadedmetadata", () => {
    durationEl.textContent = formatTime(audio.duration);
});

// Update progress as song plays
audio.addEventListener("timeupdate", updateProgress);

// Seek when slider changes
slider.addEventListener("input", () => {
    const seekTime = (slider.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

// Song ended
audio.addEventListener("ended", () => {
    if (isRepeat) {
        audio.currentTime = 0;
        playSong();
    } else {
        nextSongFunc();
    }
});

// Toggle shuffle
function toggleShuffle() {
    isShuffle = !isShuffle;
    shuffleBtn.classList.toggle("active", isShuffle);
}

// Toggle repeat
function toggleRepeat() {
    isRepeat = !isRepeat;
    repeatBtn.classList.toggle("active", isRepeat);
}

// Event listeners
playBtn.addEventListener("click", playSong);
pauseBtn.addEventListener("click", pauseSong);
prevBtn.addEventListener("click", prevSongFunc);
nextBtn.addEventListener("click", nextSongFunc);
shuffleBtn.addEventListener("click", toggleShuffle);
repeatBtn.addEventListener("click", toggleRepeat);

// Initialize
loadSong(currentSong);
pauseBtn.style.display = "none";
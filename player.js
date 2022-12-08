let music = [
    {
        "artist": "damso",
        "imgArtist": "img-damso",
        "title": "Damso - Mosaique Solitaire",
        "played": false,
        "audio": new Audio("./audio/damso.mp3")
    },
    {
        "artist": "luther",
        "imgArtist": "img-luther",
        "title": "Luther - ALAKAZAM",
        "played": false,
        "audio": new Audio("./audio/luther.mp3")
    },
    {
        "artist": "khali",
        "imgArtist": "img-khali",
        "title": "Khali - Couleurs",
        "played": false,
        "audio": new Audio("./audio/khali.mp3")
    }
];

function changeVolume() {
    let value = document.getElementById("volume").value;
    for (let i = 0; i <= 2; i++) {
        music[i].audio.volume = value/10;
    }
}

function ch() {
    console.log(document.getElementsByClassName("carousel-item active")[0].getElementsByClassName("d-flex justify-content-center")[0].getElementsByTagName("img")[0].id);
}

function playPause() {
    for (let j = 0; j <= 2; j++) {
        document.getElementById(music[j].imgArtist).className = "rotate";
        document.getElementById(music[j].imgArtist).style.animationPlayState = "paused";
    }

    let status = document.getElementById("status");
    let idArtist = document.getElementsByClassName("carousel-item active")[0].getElementsByClassName("d-flex justify-content-center")[0].getElementsByTagName("img")[0].id
    for (let i = 0; i <= 2; i++) {
        if(idArtist === music[i].imgArtist) {
            if (music[i].played === false) {
                music[i].audio.play();
                music[i].played = true;
                document.getElementById(music[i].imgArtist).style.animationPlayState = "running";

                document.getElementById("listenning").innerHTML = music[i].title;

                document.getElementById("playing").style.visibility = "visible";

                status.src = "./img/playing.gif";
                document.getElementById("pause-play").src = "./player/pause.png"

            } else {
                music[i].audio.pause();
                music[i].played = false;
                document.getElementById(music[i].imgArtist).style.animationPlayState = "paused";
                status.src = "./img/pause.png";
                document.getElementById("pause-play").src = "./player/play.png"
            }
        } else {
            music[i].played = false;
            music[i].audio.pause();
            music[i].audio.currentTime = 0;
        }
    }
}

function play(elem) {
    for (let j = 0; j <= 2; j++) {
        document.getElementById("img-" + elem.id).className = "rotate";
        document.getElementById("img-" + music[j].artist).style.animationPlayState = "paused";
    }

    let status = document.getElementById("status");

    for (let i = 0; i <= 2; i++) {
        if (elem.id === music[i].artist) {
            if (music[i].played === false) {
                music[i].audio.play();
                music[i].played = true;
                document.getElementById("img-" + elem.id).style.animationPlayState = "running";

                document.getElementById("listenning").innerHTML = music[i].title;

                document.getElementById("playing").style.visibility = "visible";

                status.src = "./img/playing.gif";

            } else {
                music[i].audio.pause();
                music[i].played = false;
                document.getElementById("img-" + elem.id).style.animationPlayState = "paused";
                status.src = "./img/pause.png";
            }
        } else {
            music[i].played = false;
            music[i].audio.pause();
            music[i].audio.currentTime = 0;
        }
    }
}
let music = [
    {
        "artist": "damso",
        "title": "Damso - Mosaique Solitaire",
        "played": false,
        "audio": new Audio("./audio/damso.mp3")
    },
    {
        "artist": "luther",
        "title": "Luther - ALAKAZAM",
        "played": false,
        "audio": new Audio("./audio/luther.mp3")
    },
    {
        "artist": "khali",
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
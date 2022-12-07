let audioDamso = new Audio('./audio/damso.mp3');
let audioLuther = new Audio('./audio/luther.mp3');
let audioKhali = new Audio('./audio/khali.mp3');

let playingDamso = false, playingKhali = false, playingLuther = false;

let h1Title = document.getElementsByClassName("listenning");


function goDownArtists() {
  document.getElementsByClassName('page2')[0].scrollIntoView();
}

function playMusic(artist) {

  if (artist === "Damso") {
    let hh = document.getElementById('playing');
    
    hh.style.visibility = "visible";
    audioKhali.pause();
    audioKhali.currentTime = 0;
    playingKhali = false;

    audioLuther.pause();
    audioLuther.currentTime = 0;
    playingLuther = false;

    if (playingDamso == false) {
      h1Title[0].innerHTML = "Damso - MOSAIQUE SOLITAIRE";
      playingDamso = true;
      audioDamso.play();
    } else {
      audioDamso.pause();
      playingDamso = false;
    }
  } else if (artist === "Khali") {
    audioDamso.pause();
    audioDamso.currentTime = 0;
    playingDamso = false;

    audioLuther.pause();
    audioLuther.currentTime = 0;
    playingLuther = false;

    if (playingKhali == false) {
      h1Title[0].innerHTML = "Khali - COULEURS";
      playingKhali = true;
      audioKhali.play();

    } else {
      audioKhali.pause();
      playingKhali = false;
    }
  } else if (artist === "Luther") {
    audioDamso.pause();
    audioDamso.currentTime = 0;
    playingDamso = false;

    audioKhali.pause();
    audioKhali.currentTime = 0;
    playingKhali = false;


    if (playingLuther == false) {
      h1Title[0].innerHTML = "Luther - ALAKAZAM";
      playingLuther = true;
      audioLuther.play();

    } else {
      audioLuther.pause();
      playingLuther = false;
    }
  }

}
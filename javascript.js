let audioDamso = new Audio('./audio/damso.mp3');
let audioLuther = new Audio('./audio/luther.mp3');
let audioKhali = new Audio('./audio/khali.mp3');

let playingDamso = false, playingKhali = false, playingLuther = false;

let h1Title = document.getElementsByClassName("listenning");

let ran = document.getElementById("volume").addEventListener("click", myFunction);

function myFunction() {
  let value = document.getElementById("volume").value;
  alert(value/10);
  audioDamso.volume = value/10;
  audioKhali.volume = value/10;
  audioLuther.volume = value/10;
}


function goDownArtists() {
  document.getElementsByClassName('page2')[0].scrollIntoView();
}

function playMusic(artist) {

  if (artist === "Damso") {
    let hh = document.getElementById('playing');

    let vinyl = document.getElementsByClassName('damso')[0];



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
      vinyl.id="rotate";
    } else {
      audioDamso.pause();
      playingDamso = false;
      vinyl.id="";
      
    }
  } else if (artist === "Khali") {

    let vinyl = document.getElementsByClassName('khali')[0];

    
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
      vinyl.id="rotate";
    } else {
      audioKhali.pause();
      playingKhali = false;
      vinyl.id="";
    }
  } else if (artist === "Luther") {

    let vinyl = document.getElementsByClassName('luther')[0];
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
      vinyl.id="rotate";

    } else {
      audioLuther.pause();
      playingLuther = false;
      vinyl.id="";
    }
  }

}

function nextPrev() {
  let khali = document.getElementsByClassName('khali')[0];
  let damso = document.getElementsByClassName('damso')[0];
  let luther = document.getElementsByClassName('luther')[0];

  luther.id="";
  damso.id="";
  khali.id="";

  audioKhali.pause();
  audioKhali.currentTime = 0;

  audioDamso.pause();
  audioDamso.currentTime = 0;

  audioLuther.pause();
  audioLuther.currentTime = 0;
}

var range = $('.input-range'),
    value = $('.range-value');
    
value.html(range.attr('value'));

range.on('input', function(){
    value.html(this.value);
    alert("Test");
}); 
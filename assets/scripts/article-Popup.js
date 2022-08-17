document.getElementById("open-popup").addEventListener("click", function(){
    document.getElementsByClassName("popup")[0].classList.add("active");
});

document.getElementById("dismiss-popup-btn").addEventListener("click", function(){
    document.getElementsByClassName("popup")[0].classList.remove("active");
});

const audio = document.querySelector('audio');
const audioDuration = document.querySelector('.time-remainer');
const playButton = document.querySelector('.play-btn');
let isPlaying = false;

function toggle(){
    var blur = document.getElementById('overlay');
    blur.classList.toggle('active');

    var popup = document.getElementById('popup-section');
    popup.classList.toggle('active');
}

function toggleAudio () {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    playButton.classList.remove('playing');
    playButton.classList.add('fa-play');
    playButton.classList.remove('fa-pause');
  } else {
    audio.play();
    isPlaying = true;
    playButton.classList.add('playing');
    playButton.classList.add('fa-pause');
    playButton.classList.remove('fa-play');
}
  
  audio.onloadedmetadata = () => {
    let minutes = Math.floor(audio.duration / 60);
    let seconds = Math.floor(audio.duration - minutes * 60);
    audioDuration.innerHTML = `${minutes}:${seconds}`;
  }
}
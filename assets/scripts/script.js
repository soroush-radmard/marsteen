const audio = document.querySelector('audio');
const audioDuration = document.querySelector('.time-remainer');
const playButton = document.querySelector('.play-btn');
let isPlaying = false;

function toggleAudio () {
  if (isPlaying) {
    audio.pause()
    isPlaying = false
    playButton.classList.remove('playing')
    playButton.classList.add('fa-play')
    playButton.classList.remove('fa-pause')
  } else {
    audio.play()
    isPlaying = true
    playButton.classList.add('playing')
    playButton.classList.add('fa-pause')
    playButton.classList.remove('fa-play')
}
  
  audio.onloadedmetadata = () => {
    let minutes = Math.floor(audio.duration / 60)
    let seconds = Math.floor(audio.duration - minutes * 60)
    audioDuration.innerHTML = `${minutes}:${seconds}`
  }
}

//////////////////////////////////////////////////////////////

let slidePosition = 0;
const slides = document.getElementsByClassName('customer-info');
const play = document.querySelector('.play-btn')
const next = document.querySelector('#next')
const prev = document.querySelector('#previous')
const time = document.querySelector('.time-remainer')
const totalSlides = slides.length;

document.
  getElementById('next')
  .addEventListener("click", function() {
    moveToNextSlide();
  });
document.
  getElementById('previous')
  .addEventListener("click", function() {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('active-info');
  }

  // for (let voice of voices){
  //   voice.classList.remove('active-info');
  // }

  slides[slidePosition].classList.add('active-info');
  // voices[slidePosition].classList.add('active-info');

  // audio.pause();
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}
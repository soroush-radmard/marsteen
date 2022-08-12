const audio = document.querySelector('audio');
const container = document.querySelector('.container');
const audioDuration = document.querySelector('.duration');
const playButton = document.querySelector('.play-button');
let isPlaying = false;

let slidePosition = 0;
const slides = document.getElementsByClassName('customer-info');
const totalSlides = slides.length;

const toggleAudio = (event) => {
	if (isPlaying) {
		audio.pause()
		isPlaying = false
		playButton.classList.remove('playing')
	} else {
		audio.play()
		isPlaying = true
		playButton.classList.add('playing')
	}
}

audio.onloadedmetadata = () => {
	let minutes = Math.floor(audio.duration / 60)
	let seconds = Math.floor(audio.duration - minutes * 60)
	audioDuration.innerHTML = `${minutes}:${seconds}`
}

//////////////////////////////////////////////////////////////

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
    // slide.classList.add('carousel__item--hidden');
  }

  slides[slidePosition].classList.add('active-info');
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
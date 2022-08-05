const audio = document.querySelector('audio');
const container = document.querySelector('.container');
const audioDuration = document.querySelector('.duration');
const playButton = document.querySelector('.play-button');
let isPlaying = false;

let navMenu = document.querySelector(".menu-items");
let navMenuBtn = document.querySelector(".dropdown-menu");
let navMenuBtnIcon = document.querySelector(".dropdown-menu i");

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



navMenuBtn.addEventListener("click", function(){
    if(navMenuBtnIcon.classList.contains("fa-bars")){
        navMenu.style.left = "0";
        navMenuBtnIcon.classList = "fa fa-times";
        navMenuBtnIcon.style.transition = ".5s all";
    }
    else{
        navMenu.style.left = "-192px";
        navMenuBtnIcon.classList = "fa fa-bars";
    }
})
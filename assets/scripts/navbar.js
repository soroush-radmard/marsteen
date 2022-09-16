let navMenu = document.querySelector(".menu-items");
let navMenuBtn = document.querySelector(".dropdown-menu");
let navMenuBtnIcon = document.querySelector(".dropdown-menu i");

navMenuBtn.addEventListener("click", function(){
    if(navMenuBtnIcon.classList.contains("fa-bars")){
        navMenu.style.left = "0";
        navMenuBtnIcon.classList = "fa fa-times";
        navMenuBtnIcon.style.transition = ".5s all";
    }
    else{
        navMenu.style.left = "-230px";
        navMenuBtnIcon.classList = "fa fa-bars";
    }
});

document.addEventListener('keydown', preventKeyBoardScroll, false);

function preventKeyBoardScroll(e) {
  var keys = [37, 39];
  if (keys.includes(e.keyCode)) {
    e.preventDefault();
    return false;
  }
}   

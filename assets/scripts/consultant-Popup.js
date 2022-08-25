document.getElementById("send").addEventListener("click", function () {
  document.getElementsByClassName("popup")[0].classList.add("active");
});

document
  .getElementById("dismiss-popup-btn")
  .addEventListener("click", function () {
    document.getElementsByClassName("popup")[0].classList.remove("active");
  });

function toggle() {
  var blur = document.getElementById("overlay");
  blur.classList.toggle("active");

  var popup = document.getElementById("popup-section");
  popup.classList.toggle("active");
}

$(function() {
  $('form').on('submit', function(e) {
    e.preventDefault();
    
    let dataString = $(this).serialize();

    $.ajax({
      type: 'POST',
      URL: 'process.php',
      data: dataString,
      success: function() {
        $('.popup .title-wrapper .title-popup').append('w')
      }
    })
  });
})
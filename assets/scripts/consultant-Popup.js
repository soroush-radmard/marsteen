document.getElementById("send").addEventListener("click", function(){
    document.getElementsByClassName("popup")[0].classList.add("active");
});

document.getElementById("dismiss-popup-btn").addEventListener("click", function(){
    document.getElementsByClassName("popup")[0].classList.remove("active");
});

function toggle(){
    var blur = document.getElementById('overlay');
    blur.classList.toggle('active');

    var popup = document.getElementById('popup-section');
    popup.classList.toggle('active');
}

// $(function () {
//     $("#UploadForm").submit(function (e) {
//         e.preventDefault();

//         //console.log('Doing ajax submit');

//         var formAction = $(this).attr("action");
//         var fdata = new FormData();

//         var txtNameInput = $('#upload-name')[0];
//         var txtMobileInput = $('#upload-mobile')[0];
//         var txtName = txtNameInput.files[0];
//         var txtMobile = txtMobileInput.files[0];
//         fdata.append("file", file);

//         $.ajax({
//             type: 'post',
//             url: formAction,
//             data: fdata,
//             processData: false,
//             contentType: false
//         }).done(function (result) {
//             // do something with the result now
//             console.log(result);
//             if (result.status === "success") {
//                 alert(result.url);
//             } else {
//                 alert(result.message);
//             }
//         });
//     });
// })

// $(':button').on('click', function () {
//     $.ajax({
//       // Your server script to process the upload
//       url: 'upload.php',
//       type: 'POST',
  
//       // Form data
//       data: new FormData($('form')[0]),
  
//       // Tell jQuery not to process data or worry about content-type
//       // You *must* include these options!
//       cache: false,
//       contentType: false,
//       processData: false,
  
//       // Custom XMLHttpRequest
//       xhr: function () {
//         var myXhr = $.ajaxSettings.xhr();
//         if (myXhr.upload) {
//           // For handling the progress of the upload
//           myXhr.upload.addEventListener('progress', function (e) {
//             if (e.lengthComputable) {
//               $('progress').attr({
//                 value: e.loaded,
//                 max: e.total,
//               });
//             }
//           }, false);
//         }
//         return myXhr;
//       }
//     });
//   });
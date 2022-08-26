$(function () {
    $("#UploadForm").submit(function (e) {
        e.preventDefault();
  
        var formAction = $(this).attr("action");
        var nameInput = $('#name').val();
        var mobileInput = $('#mobile').val();
  
        $.ajax({
            type: 'post',
            url: formAction,
            data: nameInput + " " + mobileInput,
            processData: false,
            contentType: false
        }).done(
            submitForm()
        );
    });
  })
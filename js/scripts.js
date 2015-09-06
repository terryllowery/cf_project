$(document).ready(function() {
    $(".message-box").css("background-color", "pink");
    $("#form-contact-message").on("keyup", function(){
        var charCount = $("#form-contact-message").val().length;
        console.log(charCount);
        $("#char-count").html(charCount);

        if (charCount > 50 ) {
            $("#char-count").css("color", "red");
            console.log("charCount is greater than 50");
        }
        else {
            $("#char-count").css("color", "white");
            console.log("charCount is currently: " + charCount);
        }

    });
    $("#submit-button").on("click", function() {
        var message = $(".message-box").val();
        console.log("clicked!");
        console.log(message);
        $("#visible-comment").html(message.toUpperCase());
        $("#visible-comment").css("color", "red");
        return false;
    });
});
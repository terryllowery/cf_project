$(document).ready(function() {
    $(".message-box").css("background-color", "pink");
    $("#form-contact-message").on("keyup", function(){
        const MAX_MBOX_SIZE = 50; //This is the max size of the message box.

        var charCount = $("#form-contact-message").val().length;
        $("#char-count").html(charCount);

        if (charCount > MAX_MBOX_SIZE ) {
            $("#char-count").css("color", "red");
            console.info("charCount is greater than 50");
        }
        else {
            $("#char-count").css("color", "white");
            console.info("charCount is currently: " + charCount);
        }

    });
    var servicesRow = $(".services-row");
        for (var i = 0; i < servicesRow.length; ++i) {
            if (i%2 === 0) {
            $(servicesRow[i]).css("background-color", "rgb(153, 204, 255)");
            }
        }

    $("#submit-button").on("click", function() {
        var message = $(".message-box").val();
        console.info("clicked!");
        console.log(message);
        $("#visible-comment").html(message.toUpperCase());
        $("#visible-comment").css("color", "red");
        return false;
    });
});
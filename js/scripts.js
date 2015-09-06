$(document).ready(function() {
    $(".message-box").css("background-color", "pink");
    $("#submit-button").on("click", function() {
        var message = $(".message-box").val();
        console.log("clicked!");
        console.log(message);
        $("#visible-comment").html(message.toUpperCase());
        $("#visible-comment").css("color", "red");
        return false;
    });
});
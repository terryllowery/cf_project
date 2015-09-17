var myKitties = [ { title: "First Project", pic: "img/coming-soon.jpg"},
    { title: "Second Project", pic: "img/coming-soon.jpg"},
    { title: "Third Project", pic: "img/coming-soon.jpg"},
    { title: "Fourth Project", pic: "img/coming-soon.jpg"}
];

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


    for (var i = 0; i < myKitties.length; ++i ) {
        console.log("i is: " + i);
        console.log("url = " + myKitties[i].pic);
        console.log("id = " +  myKitties[i].title );
        $("#" + i).css("background-image", "url(" + myKitties[i].pic + ")");

    }

    $(".image").mouseenter( function() {
        console.info(this);
        console.log(myKitties[this.id].title);
        $(this).html("<p class='info'><span class='proj-title'>Title:</span> " + myKitties[this.id].title + "</p> ");
        $("p.info").css("color", "rgb(255, 0, 0");
    }).mouseleave( function() {
        $('p.info').html("");
    });

    function initialize() {
        var mapOptions = {
            center: new google.maps.LatLng(52.4918598,13.427565,18),
            zoom: 8
        };
    var map = new google.maps.map(document.getElementById("maps-canas"), mapOptions);


    };
    google.maps.event.addDomListener(window, 'load', initialize);
});

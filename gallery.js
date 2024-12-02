$(document).ready(function () {
    // Added hover effect in gallery.css

    // Adding a click event to smaller images 
    $("#gallery img").click(function () {
        // Declaring new src and storing the src clicked in it
        var newSrc = $(this).attr("src");
        // Declaring new alt and storing the alt clicked in it
        var newAlt = $(this).attr("alt");

        // Replaces large image with new variable containing new image
        $("#lgPic").attr("src", newSrc);
        // Replaces caption with new variable containing new caption 
        $("#lgTitle").text(newAlt);
    });

    // Adding click event to large image 
    $("#lgPic").click(function () {
        // Declaring new variable and storing src clicked in it
        var largeImageSrc = $(this).attr("src");
        // Opens new blank window with image stored in new varriable
        window.open(largeImageSrc, "_blank");
    });
});

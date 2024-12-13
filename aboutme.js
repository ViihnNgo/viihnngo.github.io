//Jquery effects
$(document).ready(function () {
    //Fade in header
    $('h1').fadeIn(1000);
    //Slide down navigation menu 
    $('ul').hide().slideDown(1000);
});

// Custom Function: Toggle Skills Section
function toggleSkills() {
    $("#skills ul").slideToggle(); // Use jQuery effect to toggle the skills list
}
    $("#toggle-skills").on("click", toggleSkills);

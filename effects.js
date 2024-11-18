$(document).ready(function () {
    $("#newsSignup").hide(); //Hides the sign up form first 

    $("#signuplink").click(function (e) {
        e.preventDefault(); //Cancels default link action 
        $("#newsSignup").slideToggle(); //Adds slideToggle to signuplink 
    });

    $("#slogan").hover(function () { //Adds hoverfunction to slogan
        $(this).fadeOut("normal", "linear", function () { //Fades slogan out at normal speed
            $(this).text("Hand Picked Just for You").fadeIn("slow", "swing"); //Fades slogan in using swing easing

        $(this).fadeOut("fast", "swing", function () { //Fades slogan on mouse out fast speed 
            $(this).text("The Power of Flowers").fadeIn("slow", "linear"); //Fades original slogan in at slow speed 
        });
    });

    $("#rose").animate( //Animates rose picture to swing in 
        {
            right: "100px", //Positions rose when it swings in at 100px to the right 
            opacity: 1,
        }, "swing"
    );

    $("#newsSignup").submit(function (e) {
        e.preventDefault(); //Prevents form submission
        alert("Thank you for registering"); //Shows alert when sign up submitted
        $(this).hide(); //Hides the form when submitted 
        $("#signuplink").fadeTo("slow", 0.3); //Fades link to 30% opacity when done signing up
    });

});

});


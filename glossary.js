$(document).ready(function() {
    //hides botanic names of flowers first 
    $('.botanic').hide(); 
    //hides images first 
    $('.imgdiv').hide();

    //mouseover function to change color of header, h1, and h2 when hovered over
    $('header, h1, h2').mouseover(function() {
        $(this).css('color', '#f00'); 
    }); //end mouseover

    //mouseout function to revert color
    $('header, h1, h2').mouseout(function() {
        $(this).css('color', '#07a'); 
      }); //end mouseout 

      //adding click function for flowers 
      $('.flower').click(function() {
        // Hide all botanic names
        $('.botanic').hide();
        //shows botanic names of flowers when clicked 
        $(this).children('.botanic').show();
      }); //end click 

      //hover function to show image when hovering over specific title
      $('.pic').hover(
        function(evt) {
          var flowerId = $(this).attr('title');
          var imgDiv = $('#' + flowerId);
          
          //adjusting image position to not cover title 
          var x = evt.pageX + 150;
          var y = evt.pageY;
            
          //shows image 
          imgDiv.css({
            'top': y + 'px',
            'left': x + 'px'
          }).show();
        },

        //hides image 
        function() {
          var flowerId = $(this).attr('title');
          $('#' + flowerId).hide();
        }
      ); //hover end

      //keypress function to jump to flower corresponding to letter pressed 
      $(document).keypress(function(e) {
        //assigning variable to get letter pressed including lowercase
        var keyPressed = String.fromCharCode(e.which).toLowerCase();
        //jumps to flower corresponding to letter pressed 
        window.location = '#' + keyPressed; 
      });
          
}); //end ready


$(document).ready(function () {
    // Variable to count items in the shopping cart
    var itemCount = 0;

    // Delete button in HTML
    var deleteButton = "<span class='del'>Remove</span>";

    // Adds click event to Add to Cart 
    $('.add').on('click', function () {
        // Adds one when add to cart is clicked 
        itemCount++;

        // Hide the cart if it is empty 
        if (itemCount > 0) {
            $('#empty').hide();
        }

        // Get the name and attributes of the clicked element
        var itemName = $(this).attr('name');
        var itemID = $(this).attr('id');

        // Create a new list item for the shopping cart
        var cartLink = "<li class='cartItem' name='" + itemID + "'>" + itemName + " <span class='del'>Remove</span></li>";

        // Adds itmes to cart link
        $('#cart').append(cartLink);

        // Hides add to cart button when it is clicked 
        $(this).hide();

    });

    // Removing items from cart function
    $('#cart').on('click', '.del', function () {
        // Removes the flower from list
        $(this).parent('li').remove();

        // Removes item from cart 
        itemCount--;

        // Shows empty cart if it is empty
        if (itemCount === 0) {
            $('#empty').show();
        }

        // Shows add to cart for flower
        var itemID = $(this).parent('li').attr('name');
        $('#' + itemID).show();
    });

    // Star rating for flowers
    $('.rating img').on('click', function () {
        // Change all siblings to staroff.gif
        $(this).siblings('img').attr('src', 'staroff.gif');

        // Changes star clicked to on
        $(this).attr('src', 'staron.gif');

        // Star on for all stars before staron.gif
        $(this).prevAll('img').attr('src', 'staron.gif');
    });
});

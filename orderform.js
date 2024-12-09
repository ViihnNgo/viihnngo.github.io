$(document).ready(function () {
    //Focuses on name
    $('#name').focus();

    //Form Validation
    function validateField(field, regex, errorMsg) {
        var value = $(field).val().trim();
        var errorField = `#${field.id}Error`;
    
        if (!regex.test(value)) {
            $(errorField).text(errorMsg);
            return false;
        } else {
            $(errorField).text('');
            return true;
        }
    }
    
    //Validate Field function 
    function validateField(selector, condition, errorMessage) {
        $(selector).on('blur', function () {
            const value = $(this).val().trim();
            if (!condition(value)) {
                $(this).next('.error').text(errorMessage);
            } else {
                $(this).next('.error').text('');
            }
        });
    }
    
    //Validates if user fields are empty or not
    $(document).ready(function () {
        validateField('#name', value => value !== '', 'Name is required.');
        validateField('#email', value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), 'Enter a valid email.');
        validateField('#address', value => value !== '', 'Address is required.');
        validateField('#city', value => value !== '', 'City is required.');
        validateField('#zip', value => /^\d{5}$/.test(value), 'Enter a 5-digit ZIP code.');
    });
    
    
    $('input').on('blur', validateForm);

    //If copy checkbox checked then copy field to shipping 
    $('#copy').change(function () {
        if ($(this).is(':checked')) {
            $('#shipaddr').val($('#address').val());
            $('#shipcity').val($('#city').val());
            $('#shipzip').val($('#zip').val());
        } else {
            $('#shipaddr, #shipcity, #shipzip').val('');
        }
    });

    //Quantity and subtotal function 
    $('qty').on('blur', function () {
        //initializing order total 
        var orderTotal = 0;
    
        $('qty').each(function (index) {
            //Sets to 0 if not a number 
            var quantity = parseInt($(this).val()) || 0;
            $(this).val(quantity); 
    
            var price = parseFloat($(`#price`).text());
            //getting total 
            var total = quantity * price;
    
            $(`#total`).text(total.toFixed(2));
            //update order total 
            orderTotal += total;
        });
    
        // Calculate tax
        var shippingState = $('#shipstate').val();
        var tax = 0;
        //If shipping state it TX then using 0.8 tax
        if (shippingState == 'TX') {
            tax = 0.8;
        }
        //Anything else is 0
        else {
            tax = 0;
        }
    
        // Calculate shipping
        var shipping = 0;
        //If shipping to TX shipping will cost 5 dollars
        if (shippingState == 'TX') {
            shipping = 5;
        } 
        //if shipping to CA or NY shipping will cost 20 dollars
        else if (['CA', 'NY'].includes(shippingState)) {
            shipping = 20;
        }
        //Anywhere else will be 10 dollars 
        else {
            shipping = 10;
        }
    
        // Update totals
        $('#subt').text(orderTotal.toFixed(2));
        $('#tax').text(tax.toFixed(2));
        $('#ship').text(shipping.toFixed(2));
        $('#gTotal').text((orderTotal + tax + shipping).toFixed(2));
    });
    
});

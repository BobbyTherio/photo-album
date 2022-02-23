$(document).ready(function(){
    $("#feedback").validate({
        rules: {
            username : {
                required: true, 
                minlength: 6
            },
            imageTitle: {required: true},
            comment: {required: true},
        },
        messages: {
            username: "Your username must be at least 6 characters long",
            imageTitle: "Please enter an image title", 
            comment: "Please enter a comment", 
        }
    });
});


$('#button').click(function(){
    $('.submitbutton').css('border','4px solid red')
    .css('font-family','verdana')
})

    .mouseenter(function(){
    $(this).css("background", "white")
    .css('color', 'black')
    .css('border', '2px solid black');
})
        
    .mouseleave(function(){
    $(this).css("background", "black")
    .css('color', 'white');
});

























/////////////////////////////////////////////////////////////////////
/* $('#button').click(function(){
    $('#error').hide();
    let usernameValue = $('#username').val();
    if (usernameValue.length == '') {
    $('#error').show();
        usernameError = false;
        return false;
        }
    });
*/
/////////////////////////////////////////////////////////////////////
/*
$('#submitButton').click(function () {
	
    // Validate Username
        $('.username_error').hide();
        let usernameError = true;
        $('#username').keyup(function() {
            validateUsername();
        });
        
        function validateUsername() {
        let usernameValue = $('#username').val();
        if (usernameValue.length == '') {
        $('.username_error').show();
            usernameError = false;
            return false;
        }
        else if((usernameValue.length < 6)){
            $('.username_error').show();
            $('.username_error').html
    ("Username must be at least 6 characters");
            usernameError = false;
            return false;
        }
        else {
            $('.username_error').hide();
        }
        }
    
    // Submit button
        $('#submitButton').click(function () {
            validateUsername();
            if ((usernameError == true)) {
                return true;
            } else {
                return false;
            }
        });
    });
*/
/////////////////////////////////////////////////////////////////////
/*
    $(document).ready(function() { 
        $("#username").focusout(function() { 
            if($(this).val()=='') { 
                $(this).css('border', 'solid 2px red'); 
            }
            else {
                // If it is not blank.
                $(this).css('border', 'solid 2px green');    
            }    
        }) .trigger("focusout");
    }); 
*/
/////////////////////////////////////////////////////////////////////
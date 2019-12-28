$(function(){
    //to check if email is in the format abc@xyz.abc
    jQuery.validator.addMethod("validateEmail",function(value,element){
        return this.optional(element) || value.match(/^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.([a-zA-Z0-9-]+)$/i)
    }) 
    
    
    //to check if number is in the formart +1 (023) 123-1234
    jQuery.validator.addMethod("validateNumber",function(value,element){
        return this.optional(element) || value.match(/^(\+){1}[0-9]{1} \([0-9]{3}\) [0-9]{3}\-[0-9]{4}$/)
    })
    
    //To check if the web address is in the format http://x.y.z
    jQuery.validator.addMethod("validateAddress",function(value,element){
        return this.optional(element) || value.match(/^(http\:\/\/)([a-zA-Z0-9]+)(\.[a-zA-Z0-9]+){2}$/i)
    })
    
    jQuery.validator.addMethod("checkWhiteSpaces",function(value,element){
        return this.optional(element) || $.trim(value).length != 0
    })
    
    
    
    $("#form").validate({
        rules: {
            name: {
                required: true,
                checkWhiteSpaces: true
            },
            email: {
                required: true,
                validateEmail: true,
                email: false
            },
            password: {
                required: true
            },
            confPassword: {
                required: true,
                equalTo: "#password"
            },
            tel:{
                validateNumber: true
            },
            address:{
                url: false,
                validateAddress: true
            }
        },
        messages: {
            name: {
                required: "<br>Please enter a name" ,
                checkWhiteSpaces:"<br>Please enter a name" 
            },
            email: {
                required: "<br>Please enter an email" ,
                validateEmail: "<br>Enter a valid email like john@abc.com"
            },
            password: {
                required: "<br>Please enter a password"   
            },
            confPassword: {
                required: "<br>Please enter the password",
                equalTo: "<br>Passwords don't match"
            },
            tel:{
                validateNumber: "<br>Enter a valid number like +1 (453) 123-1234<br>Take care of the spaces"
            },
            address: {
                validateAddress: "<br>Enter a valid address like http://www.google.com"
            }
        }
    });
});

$("#reset").click(function(){
   $(".error").html(" "); 
});
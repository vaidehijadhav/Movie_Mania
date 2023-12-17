function sendEmail(){
    var param = {
        fname: document.getElementById("fname").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        form: document.getElementById("contactForm"),
        name_error_name: document.getElementById("name_error_name"),
        name_error_email: document.getElementById("name_error_email"),
        name_error_message: document.getElementById("name_error_message"),    
    };
}
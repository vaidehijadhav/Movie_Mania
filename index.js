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


    const serviceID = 'service_5wsh1h2';
    const templateID = 'template_p1hav18';

    emailjs.send(serviceID, templateID, param)
    .then(function(res){
        console.log(res);
        alert("Thank you for contacting us!");
        // document.getElementById('contactForm').reset();
        param.form.reset();
        }, function(error) {
        console.log("Email failed to send:", error);
        alert("Oops! Something went wrong. Please try again later.");
    });
}
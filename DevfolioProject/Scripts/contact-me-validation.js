function validateName(name) {
    return name.length > 1;
}

function validateEmail(email) {
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegEx.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    var phonenumRegEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phonenumRegEx.test(String(phone));
}

function validateMessage(message) {
    return message.length > 1;
}

function validateForm() {
	var name = document.forms["contactForm"]["name"].value;
	var email = document.forms["contactForm"]["email"].value;
	var phone = document.forms["contactForm"]["phone"].value;
    var message = document.forms["contactForm"]["message"].value;
    
    if (validateName(name) && validateEmail(email) && validatePhone(phone) && validateMessage(messages)) {
        var elementVar = document.getElementById("contactForm");
        elementVar.setAttribute("data-netlify", "true");
    } else {
        if (!validateName(name)) {
            document.getElementById('error-name').innerHTML = " Please Enter A Valid Name *".fontcolor("red");
        }
        if (!validateEmail(email)) {
            document.getElementById('error-email').innerHTML = " Please Enter A Valid Email *".fontcolor("red");
        }
        if (!validatePhone(phone)) {
            document.getElementById('error-phone').innerHTML = " Please Enter A Valid Phone *".fontcolor("red");
        }
        if (!validateMessage(message)) {
            document.getElementById('error-message').innerHTML = " Please Enter Your Message *".fontcolor("red");
        }
        if (name.length < 1 || email.length < 1 || phone.length < 1 || message.length < 1) {
            return false;
        }
    }
}

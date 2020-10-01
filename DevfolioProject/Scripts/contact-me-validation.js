function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateForm() {
	var name = document.forms["contactForm"]["name"].value;
	var email = document.forms["contactForm"]["email"].value;
	var phone = document.forms["contactForm"]["phone"].value;
    var message = document.forms["contactForm"]["message"].value;
    var phonenum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

	if (name.length < 1) {
        document.getElementById('error-name').innerHTML = " Please Enter A Valid Name *".fontcolor("red");
    }
    if (!validateEmail(email)) {
        document.getElementById('error-email').innerHTML = " Please Enter A Valid Email *".fontcolor("red");
    }
    if (!phone.value.match(phonenum)) {
        document.getElementById('error-phone').innerHTML = " Please Enter A Valid Phone *".fontcolor("red");
    }
    if (message.length < 1) {
        document.getElementById('error-message').innerHTML = " Please Enter Your Message *".fontcolor("red");
    }
    if(name.length<1 || email.length<1 || phone.length<1 || message.length<1){
       	return false;
    }
}

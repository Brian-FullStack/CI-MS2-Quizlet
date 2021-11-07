function sendMail(contactForm) {
    emailjs.send("gmail", "template_kea8qvi", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "message": contactForm.message.value
        })
        .then(
            function (response) {
                console.log('SUCCESS', response);
                document.getElementById('sendBtn').style.backgroundColor = "#48DEA8";
                document.getElementById('sendBtn').innerHTML = "Sent";
            },
            function (error) {
                console.log('FAILED', error);
                document.getElementById('sendBtn').style.backgroundColor = "#CD4115";
                document.getElementById('sendBtn').innerHTML = "Not Sent";
            })
    return false;
}
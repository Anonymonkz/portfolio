const formButton = document.getElementById('accordion')
const formContact = document.getElementById('contact-form')
const submitButton = document.querySelector('.btn-sbmt')
const popUp = document.getElementById('t-pop')
const messageBox = document.getElementById('textarea')


formButton.addEventListener('click', (t) => {
    toggleForm(t)
});

function toggleForm(t) {
    if (formButton.toggleAttribute(true)) {
        formContact.style.maxWidth = '100%';
        formContact.style.maxHeight = '948px';
    }
    else {
        formContact.style.maxWidth = null;
        formContact.style.maxHeight = null;
    }
}

submitButton.addEventListener('click', (a) => {
    alertPop(a)
})

function alertPop(a) {
    if (messageBox.value){
    a.preventDefault();
    popUp.style.opacity = 1;

    setTimeout(() => {
        popUp.style.opacity = 0;
    }, 3000)
}
}

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Adjust the value as needed
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "sender@email_address.com",
        Password: "Enter your password",
        To: 'receiver@email_address.com',
        From: "sender@email_address.com",
        Subject: "Sending Email using javascript",
        Body: "Well that was easy!!",
    })
        .then(function (message) {
            alert("mail sent successfully")
        });
}

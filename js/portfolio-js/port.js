const formButton = document.getElementById('accordion')
const formContact = document.getElementById('contact-form')
const submitButton = document.querySelector('.btn-sbmt')
const popUp = document.getElementById('t-pop')
const messageBox = document.getElementById('textarea')


formButton.addEventListener('click', toggleForm);

function toggleForm() {
    formContact.classList.toggle('contact-form-toggle');
}

submitButton.addEventListener('click', (a) => {
    alertPop(a)
})

function alertPop(a) {
    if (messageBox.value){
    window.location.hash = document.getElementById('contact')
    popUp.style.opacity = 1;

    setTimeout(() => {
        popUp.style.opacity = 0;
    }, 3000)
}
}

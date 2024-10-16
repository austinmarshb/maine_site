function validateEmails() {
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirmEmail').value;
    const errorMessage = document.getElementById('errorMessage');

    if (email !== confirmEmail) {
        errorMessage.style.display = 'block';
        return false;
    } else {
        errorMessage.style.display = 'none';
        alert('Thank you for your message!');
        return true;
    }
}
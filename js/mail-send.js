function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "info.socotraprint@gmail.com",
        Password : "password",
        To : 'them@website.com',
        From : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Body : document.getElementById("message").value
    }).then(
    message => alert(message)
    );
}

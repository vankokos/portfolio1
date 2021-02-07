var email = document.getElementById("email")
var emailSubm = document.getElementById("emailSubm")
// var emailVal = email.value

console.log(email)
emailSubm.addEventListener("click", function() {
    if(email.value.indexOf("@") == -1) {
        alert("YOU HAVE ENTERED A WRONG E-MAIL!")
        console.log(email.value)
        email.value=""
    } else {
        alert("YOUR E-MAIL IS: " + email.value)
        email.value=""
    }
})
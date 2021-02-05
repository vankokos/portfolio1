var about = document.getElementById("about")
var btnAbout = document.getElementById("scrollAbout")
var hist = document.getElementById("history")
var btnHistory = document.getElementById("btnHistory")
var contacts = document.getElementById("contacts")
var btnContact = document.getElementById("btnContact")


btnAbout.addEventListener("click", function() {
    about.scrollIntoView({behavior: "smooth"})
})

btnHistory.addEventListener("click", function() {
    hist.scrollIntoView({behavior: "smooth"})
})

btnContact.addEventListener("click", function() {
    contacts.scrollIntoView({behavior:"smooth"})
})


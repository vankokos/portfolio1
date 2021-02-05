var btn = document.getElementById("dropdown")
var dropdownContent = document.getElementById("dropdownContent")
var timer;

btn.addEventListener("mouseover", dropdownOpen)
btn.addEventListener("mouseleave", function() {
    timer = setTimeout(() => {
        dropdownClose()
    }, 500);
})

dropdownContent.addEventListener("mouseover", function() {
    clearTimeout(timer)
    dropdownOpen()
})

dropdownContent.addEventListener("mouseleave", function() {
    setTimeout(() => {
        dropdownClose()
    }, 300);
})

function dropdownOpen () {
    dropdownContent.classList.add("active")
    dropdownContent.classList.remove("unactive")
}

function dropdownClose () {
    dropdownContent.classList.add("unactive")
    dropdownContent.classList.remove("active")
}


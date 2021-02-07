var slideout = document.getElementById("slideout")
var slideoutBtn = document.getElementById("slideoutBtn")

slideoutBtn.addEventListener("click", function () {
    if(slideout.classList.contains("unactive") == true) {
        slideout.classList.add("active") 
        slideout.classList.remove("unactive")
    } else {
        slideout.classList.add("unactive")
        slideout.classList.remove("active")
    }
})

var li = document.querySelectorAll(".header__inner-menu-item-burger-dropdown-li")
var underLi = document.querySelectorAll(".header__inner-menu-item-burger-dropdown-li div")
var p = document.querySelectorAll(".header__inner-menu-item-burger-dropdown-li p")


for(let i = 0; i<li.length; i++) {
    li[i].addEventListener("click", function(e) {
        
        console.log(e.target.querySelector("div"))
        var div = e.target.querySelector("div")
        if(div.classList.contains("unactive") == true) {
            div.classList.add("activeFlex")
            div.classList.remove("unactive")
        } else {
            div.classList.remove("activeFlex")
            div.classList.add("unactive")
        } 

    })
} 




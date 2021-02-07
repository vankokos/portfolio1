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


for(let i = 0; i<li.length; i++) {
    li[i].addEventListener("click", function() {
        for (let i = 0; i < underLi.length; i++) {
            if(underLi[i].classList.contains("unactive") == true) {
                underLi[i].classList.add("activeFlex")
                underLi[i].classList.remove("unactive")
            } else {
                underLi[i].classList.remove("activeFlex")
                underLi[i].classList.add("unactive")
            }
        }
    })
} 




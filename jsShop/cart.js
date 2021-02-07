var btn = document.getElementById("cart")
var content = document.getElementById("content")

btn.addEventListener("click", function () {
    if(content.classList.contains("unactive") == true) {
        content.classList.add("active")
        content.classList.remove("unactive")
    } else {
        content.classList.remove("active")
        content.classList.add("unactive")
    }
})


var btnAdd = document.querySelectorAll(".main__inner-grid-item-btn")
var cartButtons = document.querySelectorAll(".header__inner-menu-item-cart-content-bottom button")

for (let i = 0; i < btnAdd.length; i++) {
    btnAdd[i].addEventListener("click", function(e) {
        var div = e.target.closest("div")
        console.log(div)
        
        var img = div.querySelector(".main__inner-grid-item-img")
        var price = div.querySelector(".main__inner-grid-item-price")
        
        console.log(img.src)
        console.log(price.innerHTML)
        
        var cartItem = document.createElement("div")
        cartItem.classList.add("header__inner-menu-item-cart-content-item")
        
        var close = document.createElement("img")
        close.classList.add("header__inner-menu-item-cart-content-item-delete")
        close.src = "img/cancel.svg"
        close.addEventListener("click", function(e) {
            var targetDiv = e.target.closest("div")
            content.removeChild(targetDiv)
        })
        
        var shoeImg = document.createElement("img")
        shoeImg.classList.add("header__inner-menu-item-cart-content-item-shoe")
        shoeImg.src = img.src
        
        var shoePrice = document.createElement("p")
        shoePrice.classList.add("header__inner-menu-item-cart-content-item-price")
        shoePrice.innerHTML = price.innerHTML
        
        var cartPop = document.querySelector(".header__inner-menu-item-cart-pop")
        console.log(cartPop)
        var count;


        setTimeout(() => {
            cartPop.classList.add("active")
            cartPop.classList.remove("unactive")
            setTimeout(() => {
                cartPop.classList.remove("active")
                cartPop.classList.add("unactive")        
            }, 1000);
        }, 100);
        
        content.appendChild(cartItem)
        cartItem.appendChild(close)
        cartItem.appendChild(shoeImg)
        cartItem.appendChild(shoePrice)
        
        for (let i = 0; i < cartButtons.length; i++) {
            cartButtons[i].addEventListener("click", function(e) {
                if(e.target.id == "del") {
                    content.removeChild(cartItem)
                }
            })  
        }
    })
    
}


var getPopupBtn = document.querySelectorAll(".main__inner-grid-item-name")
var lightBox = document.getElementById("lightbox")
for (let i = 0; i < getPopupBtn.length; i++) {
    getPopupBtn[i].addEventListener("click", function(e) {
        lightBox.style.display = "block"
        lightBox.addEventListener("click", function() {
            body.removeChild(shoePopupBody)
            lightBox.style.display = "none"
            body.style.overflowY = "auto"
        })
        var body = document.querySelector("body")
        body.style.overflowY = "hidden"
        var div = e.target.closest("div")
        
        var img = div.querySelector("img")
        console.log(img)
        var name = div.querySelector(".main__inner-grid-item-name")
        console.log(name)
        var price = div.querySelector(".main__inner-grid-item-price")
        console.log(price)
        var size = div.querySelector("select")
        console.log(size)
        var btn = div.querySelector("button")
        console.log(btn)

        var shoePopupBody = document.createElement("div")
        shoePopupBody.classList.add("shoePopup")

        var shoePopupClose = document.createElement("img")
        shoePopupClose.classList.add("shoePopup__close")
        shoePopupClose.src = "img/cancel.svg"
        shoePopupClose.addEventListener("click", function() {
            body.removeChild(shoePopupBody)
            lightBox.style.display = "none"
            body.style.overflowY = "auto"
        })

        var imgInPopup = document.createElement("img")
        imgInPopup.classList.add("shoePopup__img")
        imgInPopup.src = img.src

        var divInsidePopup = document.createElement("div")

        var shoePopupNameAndSize = document.createElement("div")
        shoePopupNameAndSize.classList.add("shoePopup__top")

        var nameInPopup = document.createElement("p")
        nameInPopup.classList.add("shoePopup__top-name")
        nameInPopup.innerHTML = name.innerHTML

        var selectInPopup = document.createElement("select")
        selectInPopup.classList.add("shoePopup__top-sizes")
        for (let i = 0; i < size.length; i++) {
            var options = size[i]
            selectInPopup.options.add(new Option(options.value))
        }

        var shoePopupBtnAndPrice = document.createElement("div")
        shoePopupBtnAndPrice.classList.add("shoePopup__bottom")

        var priceInPopup = document.createElement("p") 
        priceInPopup.classList.add("shoePopup__bottom-price")
        priceInPopup.innerHTML = price.innerHTML

        var btnInPopup = document.createElement("button")
        btnInPopup.innerHTML = btn.innerHTML
        btnInPopup.addEventListener("click", function(e) {
            var item = document.querySelector(".shoePopup")

            console.log(item)
            
            var img = item.querySelector(".shoePopup__img")
            var name = item.querySelector(".shoePopup__top-name")
            var sizeB = item.querySelector(".shoePopup__top-sizes")
            var price = item.querySelector(".shoePopup__bottom-price")
    
            console.log(img.src)
            console.log(sizeB.value)
            
            var cartItem = document.createElement("div")
            cartItem.classList.add("header__inner-menu-item-cart-content-item")
            
            var close = document.createElement("img")
            close.classList.add("header__inner-menu-item-cart-content-item-delete")
            close.src = "img/cancel.svg"
    
            close.addEventListener("click", function(e) {
                var targetDiv = e.target.closest("div")
                content.removeChild(targetDiv)
            })
            var nameSize = document.createElement("div")
    
            
            var shoeImg = document.createElement("img")
            shoeImg.classList.add("header__inner-menu-item-cart-content-item-shoe")
            shoeImg.src = img.src
            
            var shoePrice = document.createElement("p")
            shoePrice.classList.add("header__inner-menu-item-cart-content-item-price")
            shoePrice.innerHTML = price.innerHTML
    
            var shoeName = document.createElement("p")
            shoeName.classList.add("header__inner-menu-item-cart-content-item-name")
            shoeName.innerHTML = name.innerHTML
            
            var shoeSize = document.createElement("p")
            shoeSize.classList.add("header__inner-menu-item-cart-content-item-size")
            shoeSize.innerHTML = sizeB.value
    
            var cartPop = document.querySelector(".header__inner-menu-item-cart-pop")
            console.log(cartPop)
            var count;
            
            var itemsInsideCart = document.querySelectorAll(".header__inner-menu-item-cart-content-item")
    
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
            cartItem.appendChild(nameSize)
            nameSize.appendChild(shoeName)
            nameSize.appendChild(shoeSize)
            cartItem.appendChild(shoePrice)
    
            for (let i = 0; i < cartButtons.length; i++) {
                cartButtons[i].addEventListener("click", function(e) {
                    if(e.target.id == "del") {
                        content.removeChild(cartItem)
                    }
                })  
            }
        })
        body.appendChild(shoePopupBody)
        shoePopupBody.appendChild(shoePopupClose)
        shoePopupBody.appendChild(imgInPopup)
        shoePopupBody.appendChild(divInsidePopup)
        divInsidePopup.appendChild(shoePopupNameAndSize)
        shoePopupNameAndSize.appendChild(nameInPopup)
        shoePopupNameAndSize.appendChild(selectInPopup)
        divInsidePopup.appendChild(shoePopupBtnAndPrice)
        shoePopupBtnAndPrice.appendChild(priceInPopup)
        shoePopupBtnAndPrice.appendChild(btnInPopup )
    })
    
}
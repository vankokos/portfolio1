var mapOpen = document.getElementById("mapOpen")
var map = document.getElementById("map")
var mapClose = document.getElementById("closemap")
var lightBox = document.getElementById("lightbox")
var body = document.getElementById("body")

mapOpen.addEventListener("click", openMap)
mapClose.addEventListener("click", closeMap)
lightBox.addEventListener("click",closeMap)

function openMap () {
    lightBox.style.display="block"
    map.style.visibility="visible"
    mapClose.style.display = "block"
}

function closeMap () {
    lightBox.style.display="none"
    map.style.visibility="hidden"
    mapClose.style.display = "none"
}
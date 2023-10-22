var cart = document.getElementById("cart")
var cartBody = document.getElementById("cart-body")
var clickButton = document.getElementById("menu-btn")

function callCart(){
    cart.addEventListener("click", ()=>{
        clickButton.classList.toggle("open")
        cartBody.classList.toggle("hidden")
        cartBody.classList.toggle("block")

    })
}
callCart()
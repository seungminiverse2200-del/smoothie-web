let cart = [];

function showPage(id) {


    document.querySelectorAll(".page").forEach(p => {p.style.display = "none";
    });

    document.getElementById(id).style.display = "block";   
}


showPage("home");


function buyProduct(n) {
    cart.push(n);
    document.getElementById("cart-count").textContent = cart.length;
    
    alert("You Brought " + n + " Smoothie!");
    
}

function showCart() {
    let cartItems = document.getElementById("cart-items");

cartItems.innerHTML= "";
for (let i = 0; i < cart.length; i++) {
    let item = document.createElement("p");
    item.textContent = "" + cart[i];
    cartItems.appendChild(item);
  }
}

function checkout () {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Thank you for your pruchase!");
    }
}

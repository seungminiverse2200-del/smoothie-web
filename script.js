let totalCart = 0;

function showPage(id) {


    document.querySelectorAll(".page").forEach(p => {p.style.display = "none";
    });

    document.getElementById(id).style.display = "block";   
}


showPage("home");


function buyProduct(n) {
    totalCart++;
    document.getElementById("cart").textContent = " Cart : " + totalCart;
    
    alert("You Brought " + n + "Smoothie!");
    
}

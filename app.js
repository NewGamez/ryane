let cart = JSON.parse(localStorage.getItem("cart")) || [];
    saveCart();
    updateCart();

    alert(`${name} wurde zum Warenkorb hinzugefügt ✨`);
}

function removeFromCart(index) {
    cart.splice(index, 1);

    saveCart();
    updateCart();
}

function updateCart() {

    const list = document.getElementById("cart-list");
    const total = document.getElementById("total");

    list.innerHTML = "";

    let sum = 0;

    cart.forEach((item, index) => {

        sum += item.price;

        const li = document.createElement("li");

        li.innerHTML = `
            ${item.name} - €${item.price}
            <button onclick="removeFromCart(${index})">
                ✕
            </button>
        `;

        list.appendChild(li);
    });

    total.textContent = sum;
}

function checkout() {

    if(cart.length === 0) {
        alert("Dein Warenkorb ist leer");
        return;
    }

    alert("✨ Danke für deine Bestellung bei RYANÉ ✨");

    cart = [];

    saveCart();
    updateCart();
}

window.onload = updateCart;

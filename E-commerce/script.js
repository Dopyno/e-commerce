let cart = [];

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", (event) => {
    const product = event.target.parentElement;
    const id = product.getAttribute("data-id");
    const name = product.getAttribute("data-name");
    const price = parseFloat(product.getAttribute("data-price"));

    cart.push({ id, name, price });
    updateCart();
  });
});

document.getElementById("cart").addEventListener("click", () => {
  document.getElementById("cart-modal").style.display = "block";
  renderCart();
});

document.getElementById("close-cart").addEventListener("click", () => {
  document.getElementById("cart-modal").style.display = "none";
});

function updateCart() {
  document.getElementById("cart-count").textContent = cart.length;
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });

  document.getElementById("cart-total").textContent = total.toFixed(2);
}
console.log();
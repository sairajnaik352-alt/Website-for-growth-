let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;

let container = document.getElementById("items");

cart.forEach(item => {
  let div = document.createElement("div");
  div.innerHTML = `<p>${item.name} - ₹${item.price}</p>`;
  container.appendChild(div);
  total += item.price;
});

document.getElementById("total").innerText = "Total: ₹" + total;

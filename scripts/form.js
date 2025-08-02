// scripts/form.js

const products = [
  {
    id: "br-1001",
    name: "ButterRich Cookies",
    averagerating: 4.8
  }
];

window.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("productName");
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
});

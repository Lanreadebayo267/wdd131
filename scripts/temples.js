document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  button.addEventListener("click", () => {
    if (menu.style.display === "flex") {
      menu.style.display = "none";
      button.textContent = "☰";
    } else {
      menu.style.display = "flex";
      button.textContent = "✖";
    }
  });

  document.getElementById("year").textContent = new Date().getFullYear();
  
document.getElementById("lastModified").textContent = document.lastModified;
});

const temp = 28; // Celsius
const speed = 15; // km/h

function calculateWindChill(t, s) {
  return (
    13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16)
  ).toFixed(1);
}

function displayWindChill() {
  const chillEl = document.getElementById("chill");
  if (temp <= 10 || speed <= 4.8) {
    chillEl.textContent = "N/A";
  } else {
    chillEl.textContent = `${calculateWindChill(temp, speed)} °C`;
  }
}

function displayFooter() {
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
}

displayWindChill();
displayFooter();

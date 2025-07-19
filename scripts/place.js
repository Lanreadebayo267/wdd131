const temp = 28; // in Celsius
const speed = 15; // in km/h

function calculateWindChill(t, s) {
  return (
    13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16)
  ).toFixed(1);
}

function displayWindChill() {
  let chill = "N/A";
  if (temp <= 10 || speed <= 4.8) {
    chill = "N/A";
  } else {
    chill = `${calculateWindChill(temp, speed)} °C`;
  }
  document.getElementById("chill").textContent = chill;
}

function displayFooter() {
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
}

displayWindChill();
displayFooter();

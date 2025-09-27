const cookiesContainer = document.getElementById("cookies-container");

const cookiesCloseButton = document.getElementById("cookies-close-button");
const cookiesButton = document.getElementById("cookies-button");

document.addEventListener("DOMContentLoaded", () => {
    if (window.localStorage.getItem("isCookiesAgreed") === "true") {
        cookiesContainer.style.display = "none";
    } else {
        cookiesContainer.style.display = "block";
    }
})

cookiesCloseButton.addEventListener("click", () => 
    cookiesContainer.style.display = "none");

cookiesButton.addEventListener("click", () => {
    window.localStorage.setItem("isCookiesAgreed", "true");
    cookiesContainer.style.display = "none";
})
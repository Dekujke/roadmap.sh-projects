let moonBtn = document.getElementById("moon-button");
let sunBtn = document.getElementById("sun-button");

var color = document.querySelector(":root");

moonBtn.addEventListener("click",() => {
    color.style.setProperty("--background", "#fefefe");
    color.style.setProperty("--blue", "#b5b5b5");
    color.style.setProperty("--text", "black")
    color.style.setProperty("--white", "black")
    moonBtn.classList.add("hidden");
    sunBtn.classList.remove("hidden");
})

sunBtn.addEventListener("click", () => {
    color.style.setProperty("--background", "#070c20");
    color.style.setProperty("--blue", "#334c6b");
    color.style.setProperty("--text", "#f3f3f3")
    color.style.setProperty("--white", "#faf5ef")
    sunBtn.classList.add("hidden");
    moonBtn.classList.remove("hidden");
})
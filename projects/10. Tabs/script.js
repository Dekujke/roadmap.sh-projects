const firstTab = document.getElementById("first-tab");
const secondTab = document.getElementById("second-tab");
const thirdTab = document.getElementById("third-tab");
const fourthTab = document.getElementById("fourth-tab");

const firstTabText = document.getElementById("first-tab-text");
const secondTabText = document.getElementById("second-tab-text");
const thirdTabText = document.getElementById("third-tab-text");
const fourthTabText = document.getElementById("fourth-tab-text");

firstTab.addEventListener("click", () => {
    firstTab.classList.add("selected");
    secondTab.classList.remove("selected");
    thirdTab.classList.remove("selected");
    fourthTab.classList.remove("selected");
    firstTabText.style.display = "block";
    secondTabText.style.display = "none";
    thirdTabText.style.display = "none";
    fourthTabText.style.display = "none";
})

secondTab.addEventListener("click", () => {
    secondTab.classList.add("selected");
    firstTab.classList.remove("selected");
    thirdTab.classList.remove("selected");
    fourthTab.classList.remove("selected");
    secondTabText.style.display = "block";
    firstTabText.style.display = "none";
    thirdTabText.style.display = "none";
    fourthTabText.style.display = "none";
})

thirdTab.addEventListener("click", () => {
    thirdTab.classList.add("selected");
    firstTab.classList.remove("selected");
    secondTab.classList.remove("selected");
    fourthTab.classList.remove("selected");
    thirdTabText.style.display = "block";
    firstTabText.style.display = "none";
    secondTabText.style.display = "none";
    fourthTabText.style.display = "none";
})

fourthTab.addEventListener("click", () => {
    fourthTab.classList.add("selected");
    firstTab.classList.remove("selected");
    secondTab.classList.remove("selected");
    thirdTab.classList.remove("selected");
    fourthTabText.style.display = "block";
    firstTabText.style.display = "none";
    secondTabText.style.display = "none";
    thirdTabText.style.display = "none";
})
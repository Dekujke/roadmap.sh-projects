const firstTab = document.getElementById("first-tab");
const secondTab = document.getElementById("second-tab");
const thirdTab = document.getElementById("third-tab");
const fourthTab = document.getElementById("fourth-tab");

const firstTabText = document.getElementById("first-tab-text");
const secondTabText = document.getElementById("second-tab-text");
const thirdTabText = document.getElementById("third-tab-text");
const fourthTabText = document.getElementById("fourth-tab-text");

const tabs = document.querySelectorAll(".menu-item")
const tabTexts = document.querySelectorAll(".tab-text");

firstTab.addEventListener("click", () => {
    tabs.forEach((tab) => tab.classList.remove("selected"));
    firstTab.classList.add("selected");
    tabTexts.forEach((text) => text.style.display = "none");
    firstTabText.style.display = "block";
})

secondTab.addEventListener("click", () => {
    tabs.forEach((tab) => tab.classList.remove("selected"));
    secondTab.classList.add("selected");
    tabTexts.forEach((text) => text.style.display = "none");
    secondTabText.style.display = "block";
})

thirdTab.addEventListener("click", () => {
    tabs.forEach((tab) => tab.classList.remove("selected"));
    thirdTab.classList.add("selected");
    tabTexts.forEach((text) => text.style.display = "none");
    thirdTabText.style.display = "block";
})

fourthTab.addEventListener("click", () => {
    tabs.forEach((tab) => tab.classList.remove("selected"));
    fourthTab.classList.add("selected");
    tabTexts.forEach((text) => text.style.display = "none");
    firstTabText.style.display = "block";
})

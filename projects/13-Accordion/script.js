let questionButton1 = document.getElementById("question-button-1");
let questionButton2 = document.getElementById("question-button-2");
let questionButton3 = document.getElementById("question-button-3");
let questionButton4 = document.getElementById("question-button-4");
let questionButton5 = document.getElementById("question-button-5");
let questionButton6 = document.getElementById("question-button-6");

let answerContainer1 = document.getElementById("answer-container-1");
let answerContainer2 = document.getElementById("answer-container-2");
let answerContainer3 = document.getElementById("answer-container-3");
let answerContainer4 = document.getElementById("answer-container-4");
let answerContainer5 = document.getElementById("answer-container-5");
let answerContainer6 = document.getElementById("answer-container-6");

let answerContainers = document.querySelectorAll(".answer-container");

questionButton1.addEventListener("click", () => {
    answerContainers.forEach((container) => {
        container.style.display = "none";
    })
    answerContainer1.style.display = "block";
})

questionButton2.addEventListener("click", () => {
    answerContainers.forEach((container) => {
        container.style.display = "none";
    })
    answerContainer2.style.display = "block";
})

questionButton3.addEventListener("click", () => {
    answerContainers.forEach((container) => {
        container.style.display = "none";
    })
    answerContainer3.style.display = "block";
})

questionButton4.addEventListener("click", () => {
    answerContainers.forEach((container) => {
        container.style.display = "none";
    })
    answerContainer4.style.display = "block";
})

questionButton5.addEventListener("click", () => {
    answerContainers.forEach((container) => {
        container.style.display = "none";
    })
    answerContainer5.style.display = "block";
})

questionButton6.addEventListener("click", () => {
    answerContainers.forEach((container) => {
        container.style.display = "none";
    })
    answerContainer6.style.display = "block";
})
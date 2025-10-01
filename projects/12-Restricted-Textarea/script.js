const main = document.getElementById("main");

const textArea = document.getElementById("restricted-textarea");
const current = document.getElementById("current");

const a = document.getElementById("a");

let x = 0;

textArea.addEventListener("keyup", () => {
    if (textArea.value.length >= 250) {
        main.style.color = "red";
        textArea.style.color = "red";
        textArea.style.border = "2px solid red";
        textArea.onfocus = textArea.style.outline = "3px solid red";
    } else {
        main.style.color = "black";
        textArea.style.color = "black";
        textArea.style.border = "2px solid black";
        textArea.onfocus = textArea.style.outline = "3px solid white";
    }
    current.innerText = textArea.value.length;
})

a.addEventListener("click", () => {
    a.innerText = x;
})
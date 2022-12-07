const startBtn = document.querySelector("button[data-start]")
const stopBtn = document.querySelector("button[data-stop]")
const bodyColor = document.querySelector("body")
let timer = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

startBtn.addEventListener("click", (evt) =>{
    timer = setInterval(() => {
        bodyColor.style.backgroundColor = getRandomHexColor();
      }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    
});

stopBtn.addEventListener("click", (evt) => {
    clearInterval(timer);
    startBtn.disabled = false;
    stopBtn.disabled = true;
})
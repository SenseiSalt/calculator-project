const numButtons = document.querySelectorAll('.num');
const display = document.querySelector('.screen-text');
display.innerText = "";

numButtons.forEach(button => button.addEventListener('click', getWhichNumButton));

function getWhichNumButton(e) {
    let buttonData = e.target.getAttribute("data-key");
    console.log(display.innerText.length)
    if (display.innerText.length < 12) {
        display.innerText += buttonData;
    }


}
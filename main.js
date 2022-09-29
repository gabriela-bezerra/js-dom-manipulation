'use strict';


function changeColor() {
    const colorClass = document.querySelectorAll('.color-change');

    for (const color of colorClass) {
        color.classList.add('red');
    }
}

function validateInput(evt) {
    evt.preventDefault();

    const numberInput = document.querySelector('#number-input');
    const userNum = Number(number.value);

    const formFeedback = document.querySelector('#formFeedback')

    if (isNaN(userNum) || userNum >= 10) {
        formFeedback.innerText = 'Please enter a smaller number.';
    }
    else {
        formFeedback.inneText = 'You are good to go!';
    }
}

document.querySelector('.color-changer').addEventListener('click', changeColor);
document.querySelector('.number-form').addEventListener('submit', validateInput);
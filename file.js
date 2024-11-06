const currentNumber = document.querySelector('#number');
const reset = document.querySelector('#reset');
const decrease = document.querySelector('#decrease');
const increase = document.querySelector('#increase');

let newNum;

decrease.addEventListener('click', ()=>{
    newNum = Number(currentNumber.innerHTML) - 1;
    currentNumber.innerHTML = newNum;
})

increase.addEventListener('click', ()=>{
    newNum = Number(currentNumber.innerHTML) + 1;
    currentNumber.innerHTML = newNum;
})

reset.addEventListener('click', ()=>{
    currentNumber.innerHTML = 0;
})

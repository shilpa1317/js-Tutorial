let count=0;
const counter= document.querySelector("#counter")
const incrementBtnElmt = document.querySelector('#increment')
const decrementBtnElmt= document.querySelector('#decrement')
const resetBtnElmt= document.querySelector('#reset')



incrementBtnElmt.addEventListener('click',()=>{
    count++;
    counter.textContent=count;
});
decrementBtnElmt.addEventListener('click',()=>{
    count--;
    counter.textContent=count;
});
resetBtnElmt.addEventListener('click',()=>{
    count=0;
    counter.textContent=count;
});
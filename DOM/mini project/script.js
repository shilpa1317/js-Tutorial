let productImage = document.querySelector("#productImage");
let cartBtn = document.querySelector("#cartBtn");
let bikebtn = document.querySelector("#bikbtn");
let blackBtnElmt = document.querySelector("#black-color-dot");
let brownBtnElmt = document.querySelector("#brown-color-dot");
let blueBtnElmt = document.querySelector("#blue-color-dot");


function ChangeToBlack() {
    productImage.src = "./image/balckRE.jpg";

    bikebtn.classList.remove("brown", "blue");
    bikebtn.classList.add("black");
    bikebtn.textContent="Black"
    cartBtn.classList.remove("brown", "blue");
    cartBtn.classList.add("black");

}
blackBtnElmt.addEventListener("click", ChangeToBlack);

function ChangeToBrown() {
    productImage.src = "./image/brownRE.jpg";

    bikebtn.classList.remove("black");
    bikebtn.classList.remove("blue");
    bikebtn.classList.add("brown");
    bikebtn.textContent="Brown"
    cartBtn.classList.remove("blue");
    cartBtn.classList.add("brown");
}
brownBtnElmt.addEventListener("click", ChangeToBrown);

function ChangeToBlue() {
    productImage.src = "./image/BlueRE.jpg";

    bikebtn.classList.remove("black", "brown");
    bikebtn.classList.add("blue");
    bikebtn.textContent="Blue"
    cartBtn.classList.remove("black", "brown");
    cartBtn.classList.add("blue");
}
blueBtnElmt.addEventListener("click", ChangeToBlue);

















































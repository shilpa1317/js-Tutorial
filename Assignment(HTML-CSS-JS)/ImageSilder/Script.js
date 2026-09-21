// Images Array
var images = [
    "./1.jpg",
    "./2.jpg",
    "./3.jpg"
];

// Select Elements
var slide = document.getElementById("slide");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");

var index = 0;

// Show Image
function showImage() {
    slide.src = images[index];
}

// First image load
showImage();

// Next Button
nextBtn.addEventListener("click", function () {
    index++;
    if (index == images.length) {
        index = 0;
    }
    showImage();
});

// Previous Button
prevBtn.addEventListener("click", function () {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    showImage();
});

// Auto Slide
setInterval(function () {
    index++;
    if (index == images.length) {
        index = 0;
    }
    showImage();
}, 3000);
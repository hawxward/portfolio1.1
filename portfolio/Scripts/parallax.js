//HTML setup

var puplisHTMLCollection = document.getElementsByClassName('backgroundImageTop');
var pupilsArray = Array.from(puplisHTMLCollection);




// input setup
var input = {
    mouseX: {
        start: 0,
        end: window.outerWidth,
        current: 0,
        
    },
    mouseY: {
        start: 0,
        end: window.outerHeight,
        current: 0,}
};

input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;

//output setup
var output = {
    x: {
        start: -10,
        end: 10,
        current: 0,
    },
    y: {
        start: -10,
        end: 10,
        current:0,
    },
};

output.x.range = output.x.end - output.x.start;
output.y.range = output.y.end - output.y.start;

var handleMouseMove = function (event) {
    //mouseX input
    input.mouseX.current = event.clientX;
    input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range;
    //mousey input
    input.mouseY.current = event.clientY;
    input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range;
    //apply output x
    output.x.current = output.x.start + (input.mouseX.fraction * output.x.range);
    //apple output y
    output.y.current = output.y.start + (input.mouseY.fraction * output.y.range);

    //apply output to html
    pupilsArray.forEach(function (backgroundImage, i) {
        backgroundImage.style.transform = 'translate('+output.x.current+'px,'+output.y.current +'px)';

    });

    //console.log('output.x.current X', output.x.current);
    //console.log('fraction Y', input.mouseY.fraction);
};

var handleResize = function () {
    input.mouseX.end = window.innerWidth;
    input.mouseX.range = input.mouseX.end - input.mouseX.start;

    input.mouseY.end = window.innerHeight;
    input.mouseY.range = input.mouseY.end - input.mouseY.start;

};

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleResize); 






var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

window.onload = choosePic;

var imgs = new Array("./gifs/1b1c8e6.gif","./gifs/cat_coding.gif","./gifs/cat.gif", "./gifs/lain-computer.gif");

function choosePic()
{
     var randomNo = Math.floor(Math.random() * imgs.length);
     document.getElementById("img").src = imgs[randomNo];
}


// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX property to index * 100% 
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".fa-arrow-right");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

//   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select prev slide button
const prevSlide = document.querySelector(".fa-arrow-left");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
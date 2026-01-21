
// NENU :
let filterBtns = document.querySelectorAll(".choose");
let foodItems = document.querySelectorAll(".food-item");
let topfood = document.querySelector(".top-food");
let bottomfood = document.querySelector(".bottom-food");
let allfood = document.querySelector(".type-food");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    let filter = btn.dataset.filter;

    foodItems.forEach((item) => {
      item.classList.add("hidden");

      topfood.style.display = "flex";
      bottomfood.style.display = "flex";
      bottomfood.style.justifyContent = "center";
      topfood.style.justifyContent = "center";
      topfood.style.alignItems = "center";

      bottomfood.style.flexDirection = "row";
      if (filter === "All") {
        allfood.style.display = "grid";
      }

      if (filter === "All" || item.dataset.category === filter) {
        item.classList.remove("hidden");
      }
    });
  });
});


// TESTMONIALS : 

let slides = document.querySelectorAll(".slide");
let buttons = document.querySelectorAll(".tab-btn");

let currentIndex = 0;
let intervalId;


function startCarousel() {
  intervalId = setInterval(() => {
    slides[currentIndex].classList.remove("active");
    buttons[currentIndex].classList.remove("active");

    currentIndex = (currentIndex + 1) % slides.length;

    slides[currentIndex].classList.add("active");
    buttons[currentIndex].classList.add("active");
  }, 2000);
}

startCarousel();


buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    clearInterval(intervalId); 

    slides[currentIndex].classList.remove("active");
    buttons[currentIndex].classList.remove("active");

    currentIndex = Number(btn.dataset.index); 

    slides[currentIndex].classList.add("active");
    buttons[currentIndex].classList.add("active");
  });
});

// EVENT : 

const Slider = document.querySelector(".content-events");
const Slides = document.querySelectorAll(".content-events > div");

let index = 0;
const slideWidth = slides[0].offsetWidth;
const total = slides.length;


const firstClone = Slides[0].cloneNode(true);
Slider.appendChild(firstClone);

function moveSlider() {
  index++;
  Slider.style.transition = "transform 0.8s ease";
  Slider.style.transform = `translateX(-${index * slideWidth}px)`;

 
  if (index === total) {
    setTimeout(() => {
      Slider.style.transition = "none";
      index = 0;
      Slider.style.transform = "translateX(0)";
    }, 800);
  }
}

setInterval(moveSlider, 2500);

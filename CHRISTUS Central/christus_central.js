let index = 0;
let slideIntervalID;

const showSlide = (n) => {
  const newsItems = document.getElementsByClassName("news_item");
  const dots = document.getElementsByClassName("dot");

  for (let i = 0; i < newsItems.length; i++) {
    newsItems[i].style.display = "none";
  }

  // remove the active class from the dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // set the current index
  index = n;

  // if index is greater than the amount of newsItems (set it to zero)
  if (index > newsItems.length - 1) {
    index = 0;
  }

  // if index is less than zero (set it to the length of newsItems)
  if (index < 0) {
    index = newsItems.length - 1;
  }

  // only display the image that's next or previous
  newsItems[index].style.display = "flex";
  // only make the current dot active
  dots[index].className += " active";
};

// initialize slider
showSlide(index);

// Add event listeners to dots
const dots = document.getElementsByClassName("dot");
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", () => {
    clearInterval(slideIntervalID);
    showSlide(i);
  });
}

// Add event listeners to buttons
const previousButton = document.getElementById("previous_button");
const nextButton = document.getElementById("next_button");

previousButton.addEventListener("click", () => {
  clearInterval(slideIntervalID);
  showSlide(index - 1);
});

nextButton.addEventListener("click", () => {
  clearInterval(slideIntervalID);
  showSlide(index + 1);
});

const startSlide = () => {
  slideInterval = setInterval(() => {
    showSlide(index + 1);
  }, 4000);
};
startSlide();

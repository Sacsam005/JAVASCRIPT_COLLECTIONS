// Google translate
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    },
    "google_translate_element"
  );
}

// Scroll to top
const scrollTopButton = document.getElementById("scroll-top-button");

// When the user scrolls down 20px from the top of the document, show the button
const scrollFunction = () => {
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? (scrollTopButton.style.display = "block")
    : (scrollTopButton.style.display = "none");
};
window.onscroll = () => scrollFunction();

// When the user clicks on the button, scroll to the top of the document
const scrollTopFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// Loader animation
const loader = document.createElement("div");
loader.setAttribute("id", "loader-container");
loader.innerHTML = ` 
    <div class="loader-title">
      <h4>Loading</h4>
    </div>
    <div class="loader-square-container">
      <div class='square'></div>
      <div class='square'></div>
      <div class='square'></div>
    </div>
    `;
document.body.insertAdjacentElement("afterbegin", loader);

document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    loader.style.visibility = "visible";
    document.body.style.visibility = "hidden";
  } else {
    loader.style.display = "none";
    document.body.style.visibility = "visible";
  }
};

// Header for HTML
const fixedIconButton = document.getElementById("fixed-icon");
const header = document.createElement("header");
header.setAttribute("id", "header");
header.setAttribute("class", "change-theme");
header.innerHTML = `
 <nav>
      <a href="#" id="home-link" aria-label="Goto home page">
        <img src="./img/sachin-samal-logo.png" alt="Sachin Samal" id="logo">
      </a>

      <i id="theme-btn" class="fas fa-moon"></i>

      <div class="navbar">
        <ul class="nav-menu change-theme">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="extras.html">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="blog.html">Blogs</a>
          </li>
        </ul>
      </div>

      <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
`;
// Appending header to the HTML
scrollTopButton.insertAdjacentElement("afterend", header);

// Dynamic quotes for Footer Section
const quotes = {
  home: "Developer: someone who can convert coffee and bread into software, vision and idea into business! - Web",
  blog: "Champion: someone who is bent over from exhaustion, drenched with sweat, when no one else is looking! - Eddi Gray",
  extras:
    "Experience: Wisdom is with the aged, and understanding in length of days! - Bible | Job 12:12",
  contact:
    "Connection: Each contact with a human being is so rare, so precious, one should preserve it! - Anais Nin",
};

let text;
const currentUrl = window.location.href;
if (currentUrl && currentUrl.endsWith("/blog.html")) {
  text = quotes.blog;
  document
    .querySelector('.nav-link[href="blog.html"]')
    .classList.add("active-link");
  document.querySelector("#home-link").addEventListener("click", (e) => {
    window.location.href = "index.html";
  });
} else if (currentUrl && currentUrl.endsWith("/extras.html")) {
  text = quotes.extras;
  document
    .querySelector('.nav-link[href="extras.html"]')
    .classList.add("active-link");
  document.querySelector("#home-link").addEventListener("click", (e) => {
    window.location.href = "index.html";
  });
} else if (currentUrl && currentUrl.endsWith("/contact.html")) {
  text = quotes.contact;
  document.querySelector("#home-link").addEventListener("click", (e) => {
    window.location.href = "index.html";
  });
} else {
  text = quotes.home;
  document
    .querySelector('.nav-link[href="index.html"]')
    .classList.add("active-link");
}

// Hamburger menu
const navMenu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// Floating Contact Me Panel Container
const floatingPanelContainer = document.createElement("div");
floatingPanelContainer.setAttribute("class", "floating-panel-container");
floatingPanelContainer.innerHTML = `
<div class="floating-panel change-theme">
      <p>You motivate me! Let's connect</p>
      <button class="close-btn"><i class="fas fa-times" aria-label="Close"></i></button>
      <div class="floating-panel-button-container">
        <a href="contact.html"><button class="all-button" aria-label="Contact me">Get in touch</button></a>
        <a href="blog.html"><button class="all-button" aria-label="Read Blogs">Read blogs</button></a>
      </div>
      <ul>
        <li>
          <a href="https://codepen.io/sacsam005" target="_blank" aria-label="Connect with me on CodePen">
            <i class="fab fa-codepen" style="color:#171717"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/sachinsamal6" target="_blank" aria-label="Connect with me on Twitter">
            <i class="fab fa-twitter" style="color:#1A8CD8"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sachin-samal005/" target="_blank"
            aria-label="Connect with me on LinkedIn">
            <i class="fab fa-linkedin" style="color:#0274B3"></i>
          </a>
        </li>
        <li>
          <a href="https://facebook.com/sachinsamal120" target="_blank" aria-label="Connect with me on Facebook">
            <i class="fab fa-facebook" style="color:#1877F2"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/Sacsam005" target="_blank" aria-label="Connect with me on GitHub">
            <i class="fab fa-github" style="color:#14191E"></i>
          </a>
        </li>
      </ul>
      <p>Each contact with a human being is so rare, so precious, one should preserve it! - Anais Nin</p>
    </div>
`;
fixedIconButton.insertAdjacentElement("afterend", floatingPanelContainer);
fixedIconButton.addEventListener("click", function () {
  floatingPanelContainer.classList.toggle("visible");
  console.log("clicked");
});

const closeButton = floatingPanelContainer.querySelector(".close-btn");
closeButton.addEventListener("click", () => {
  floatingPanelContainer.classList.remove("visible");
});

// Load a GetInTouch popup after page load
window.addEventListener("load", function () {
  setTimeout(function open() {
    floatingPanelContainer.classList.add("visible");
  }, 3000);
});

// Footer for HTML
const footer = document.createElement("footer");
const horizontalLine = document.getElementsByTagName("hr");
footer.setAttribute("class", "footer-section change-theme");

if (text) {
  const indexOfColon = text.indexOf(":");
  const indexOfHyphen = text.indexOf("-");
  const firstPart = text.substring(0, indexOfColon + 1);
  const middlePart = text.substring(indexOfColon + 1, indexOfHyphen);
  const lastPart = text.substring(indexOfHyphen, text.length);
  // console.log(firstPart);
  footer.innerHTML = `   
    <div class="container footer-section-grid">
      <div class="quote">
        <div class="quote">
          <strong><span>${firstPart}</span>${middlePart}<span>${lastPart}</span></strong>
        </div>
      </div>

      <div class="footer-social-links">
        <button class="footer-floating-btn all-button fw-bolder mb-1" aria-label="Contact me">Get in touch</button>
        <form class="form-inline">
          <div class="input-group">
            <input type="text" class="form-control email" placeholder="Send me an Email">
            <div class="input-group-prepend">
              <div class="input-group-text send-email">
                <a href="mailto:shachinmagar120.smATgmailDOTcom" onclick="this.href = this.href
                .replace(/AT/, '@')
                .replace(/DOT/, '.')"><i class="fa fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

    <p class="text-center">&copy; 2023 | This page is maintained by
      <a href="#">
        <span>Sachin Samal</span>
      </a>
    </p>
  `;
} else {
  footer.innerHTML = `
    <div class="container footer-section-grid">
      <p>Unknown page</p>
    </div>
  `;
}
// Appending footer to the HTML
for (let i = 0; i < horizontalLine.length; i++) {
  horizontalLine[i].insertAdjacentElement("afterend", footer);
}

const getInTouchButtonFromFooter = document.querySelector(
  ".footer-social-links .footer-floating-btn"
);
getInTouchButtonFromFooter.addEventListener("click", function () {
  floatingPanelContainer.classList.toggle("visible");
});

// TODO: Used a proper CSS className for background and text colors in dark theme. Reduced the amount of code.
// Dark theme variables declarations
const themeBtn = document.getElementById("theme-btn");
const changeTheme = document.querySelectorAll(".change-theme");
let darktheme = localStorage.getItem("dark-theme");

//Dark theme across different pages saved in local storage
const enableDarkTheme = () => {
  document.body.classList.toggle("dark-theme");
  themeBtn.classList.toggle("fa-sun");
  for (const theme of changeTheme) {
    theme.style.backgroundColor = "#2E386A";
    theme.style.color = "#eee";
  }
  localStorage.setItem("dark-theme", "enabled");
};

const enableLightTheme = () => {
  document.body.classList.toggle("dark-theme");
  themeBtn.classList.toggle("fa-sun");
  for (const theme of changeTheme) {
    theme.style.backgroundColor = "#fff";
    theme.style.color = "#222";
  }
  localStorage.setItem("dark-theme", "disabled");
};

if (darktheme === "enabled") {
  // Set state of darktheme on page load
  enableDarkTheme();
}

themeBtn.addEventListener("click", () => {
  darktheme = localStorage.getItem("dark-theme");
  // Update darktheme when clicked
  if (darktheme === "disabled") {
    enableDarkTheme();
  } else {
    enableLightTheme();
  }
});

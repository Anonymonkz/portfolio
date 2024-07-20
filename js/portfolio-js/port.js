const formButton = document.getElementById("accordion");
const formContact = document.getElementById("contact-form");
const submitButton = document.querySelector(".btn-sbmt");
const popUp = document.getElementById("t-pop");
const messageBox = document.getElementById("textarea");
const navItems = document.querySelectorAll(".nav-item");
const subDropdown = document.querySelector(".dropdown-toggle");
const navbar = document.querySelector(".navbar-collapse");
const navbarToggler = document.querySelector(".navbar-toggler");

formButton.addEventListener("click", (t) => {
  toggleForm(t);
});

function toggleForm(t) {
  if (formButton.toggleAttribute(true)) {
    formContact.style.maxWidth = "100%";
    formContact.style.maxHeight = "948px";
  } else {
    formContact.style.maxWidth = null;
    formContact.style.maxHeight = null;
  }
}

submitButton.addEventListener("click", (a) => {
  alertPop(a);
});

function alertPop(a) {
  if (messageBox.value) {
    a.preventDefault();
    popUp.style.opacity = 1;

    setTimeout(() => {
      popUp.style.opacity = 0;
    }, 3000);
  }
}

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    // Adjust the value as needed
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

function handleNavItemClick(event) {
  if (event.target === subDropdown) {
    event.stopPropagation();
  } else {
    const bsCollapse = new bootstrap.Collapse(navbar, {
      toggle: true,
    });
  }
}

function handleDocumentClick(event) {
  if (
    !navbar.contains(event.target) &&
    !event.target.classList.contains("navbar-toggler")
  ) {
    collapseNavbar();
  }
}

function collapseNavbar() {
  if (navbar.classList.contains("show")) {
    const bsCollapse = new bootstrap.Collapse(navbar, {
      toggle: true,
    });
  }
}

function addEventListeners() {
  navItems.forEach((item) => {
    item.addEventListener("click", handleNavItemClick);
  });

  document.addEventListener("click", handleDocumentClick);
  navbarToggler.addEventListener("click", (event) => {
    event.stopPropagation();
  });
}

function removeEventListeners() {
  navItems.forEach((item) => {
    item.removeEventListener("click", handleNavItemClick);
  });

  document.removeEventListener("click", handleDocumentClick);
  navbarToggler.removeEventListener("click", (event) => {
    event.stopPropagation();
  });
}

function checkScreenSize() {
  if (window.matchMedia("(max-width: 992px)").matches) {
    // Adjust the breakpoint as needed
    addEventListeners();
  } else {
    removeEventListeners();
  }
}

// Initial check
checkScreenSize();

// Check screen size on resize
window.addEventListener("resize", checkScreenSize);

document.addEventListener("DOMContentLoaded", function () {
  const currentUrl = window.location.href;
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  let isMatched = false; // Flag to track if currentUrl is matched

  // Set active state on page load
  navLinks.forEach((link) => {
    if (link.href === currentUrl) {
      link.classList.add("active");
      link.parentElement.classList.add("active"); // Optionally add 'active' class to parent <li>
    }
  });

  // If no currentUrl is matched, make the first one active
  if (!isMatched) {
    navLinks[0].classList.add("active");
    navLinks[0].parentElement.classList.add("active");
  }

  // Update active state on click
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Remove 'active' class from all links and their parent <li>
      navLinks.forEach((item) => {
        item.classList.remove("active");
        item.parentElement.classList.remove("active");
      });

      // Add 'active' class to the clicked link and its parent <li>
      link.classList.add("active");
      link.parentElement.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".works-container");
  const leftButton = document.getElementById("slide-left");
  const rightButton = document.getElementById("slide-right");

  leftButton.addEventListener("click", () => {
    container.scrollBy({
      left: -container.clientWidth,
      behavior: "smooth",
    });
  });

  rightButton.addEventListener("click", () => {
    container.scrollBy({
      left: container.clientWidth,
      behavior: "smooth",
    });
  });
});

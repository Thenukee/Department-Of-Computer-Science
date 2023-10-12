// Get all elements with the class "accordion"
var accordions = document.getElementsByClassName("accordion");
var panels = document.getElementsByClassName("panel");

// Add a click event listener to each accordion
for (var i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function () {
        // Hide all panels
        for (var j = 0; j < panels.length; j++) {
            panels[j].style.display = "none";
        }

        // Toggle the active class on the clicked accordion
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
document.addEventListener("DOMContentLoaded", function () {
    // Get all navigation items and sections
    var navItems = document.querySelectorAll(".nav-item");
    var sections = document.querySelectorAll("section");

    // Function to activate a specific section and navigation item
    function activateSection(target) {
        // Remove the "active" class from all navigation items
        navItems.forEach(function (item) {
            item.classList.remove("active");
        });

        // Add the "active" class to the selected navigation item
        var selectedNavItem = document.querySelector("[data-target='" + target + "']");
        selectedNavItem.classList.add("active");

        // Hide all sections
        sections.forEach(function (section) {
            section.style.display = "none";
        });

        // Show the selected section
        document.getElementById(target).style.display = "grid";
    }

    // Activate the "Home" section when the page loads
    activateSection("home");

    // Add a click event listener to each navigation item
    navItems.forEach(function (navItem) {
        navItem.addEventListener("click", function () {
            // Get the target section ID from the data attribute
            var target = this.getAttribute("data-target");
            activateSection(target); // Activate the selected section
        });
    });
});



let slideIndex = 0;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 4000); // Change image every 2 seconds (2000ms)
}

showSlides(); // Start the slideshow

// Function to switch to a specific slide when a dot is clicked
function currentSlide(n) {
    slideIndex = n;
    showSlides();
}


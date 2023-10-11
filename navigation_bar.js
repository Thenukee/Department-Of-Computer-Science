window.addEventListener("scroll", function() {
    var nav = document.querySelector(".navigation");
    var mainContent = document.querySelector(".main-content");
    var navHeight = nav.offsetHeight;

    var navRect = nav.getBoundingClientRect();
    var mainContentRect = mainContent.getBoundingClientRect();

    if (mainContentRect.top <= 0) {
        nav.style.position = "fixed";
        nav.style.top = "0";
    } else {
        nav.style.position = "relative";
        nav.style.top = "auto";
    }
});

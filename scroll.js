document.getElementById("scrollToBottom").addEventListener("click", function(e) {
    e.preventDefault(); // Prevent the default behavior of jumping to the top of the page
    // Scroll to the bottom of the page
    window.scrollTo(0, document.body.scrollHeight);
});

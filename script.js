window.onload = function() {
    var popup = document.getElementById("popup");
    popup.style.display = "flex";
    setTimeout(function() {
        popup.style.opacity = 3; /* Fade in the popup */
    }, 10); /* Short delay before starting the fade-in */
};

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.opacity = 0; // Fade out the popup
    setTimeout(function() {
        popup.style.display = "none";
    }, 500); // Match the timeout to the CSS transition duration
}

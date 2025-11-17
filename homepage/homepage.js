/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleNavBar() {
    let navLinks = document.getElementById("myNav");
    if (navLinks.className === "navigation-bar") {
        navLinks.className += " responsive";
    } else {
        navLinks.className = "navigation-bar";
    }
}


let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}

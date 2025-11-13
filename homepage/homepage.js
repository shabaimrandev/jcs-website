/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleNavBar() {
    let navLinks = document.getElementById("myNav");
    if (navLinks.className === "navigation-bar") {
        navLinks.className += " responsive";
    } else {
        navLinks.className = "navigation-bar";
    }
}

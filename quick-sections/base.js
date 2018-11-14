function toggleNavigation() {
    var elem = document.getElementById("sectionNav");
    if (elem.classList.contains("navOpen")) {
        elem.classList.remove("navOpen");
        elem.classList.add("navClose");
    } else {
        elem.classList.remove("navClose");
        elem.classList.add("navOpen");
    }
}
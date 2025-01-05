
function toggleMoreInfo() {
    const moreInfo = document.getElementById("more-info");
    const button = document.getElementById("see-more-btn");
    const aboutContent = document.getElementById("about"); // the whole about section
    const image = document.getElementsByClassName("aboutImg");

    // Toggle the class 'show-more' on the 'about' section
    aboutContent.classList.toggle("show-more");

    // Check if the class 'show-more' is applied
    if (aboutContent.classList.contains("show-more")) {
        moreInfo.style.display = "block";
        button.textContent = "See Less";
    } else {
        moreInfo.style.display = "none";
        button.textContent = "See More";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const moreInfo = document.getElementById("more-info");
    const button = document.getElementById("see-more-btn");
    const aboutContent = document.getElementById("about");

    // Set initial button text based on visibility
    if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
        button.textContent = "See More";
    } else {
        button.textContent = "See Less";
    }

    // Remove 'show-more' class on page load (start with hidden content and default image size)
    if (!aboutContent.classList.contains("show-more")) {
        moreInfo.style.display = "none";
    }
});
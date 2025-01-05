// About Section - See More Toggle
function toggleMoreInfo() {
    const moreInfo = document.getElementById('more-info');
    const btn = document.getElementById('see-more-btn');
    if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
        moreInfo.style.display = 'block';
        btn.textContent = 'See Less';
    } else {
        moreInfo.style.display = 'none';
        btn.textContent = 'See More';
    }
}

// Project Section - See More Toggle
function toggleProjectInfo(projectName) {
    const moreInfo = document.getElementById('more-info-' + projectName);
    const btn = document.getElementById('see-more-btn-' + projectName);
    if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
        moreInfo.style.display = 'block';
        btn.textContent = 'See Less';
    } else {
        moreInfo.style.display = 'none';
        btn.textContent = 'See More';
    }
}

// Project Carousel Functionality
let currentIndex = 0;

function moveCarousel(direction) {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    currentIndex += direction;

    // Prevent out-of-bounds movement
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const newTransformValue = -(currentIndex * 33.3333); // Move by 1/3rd for 3 images at once
    track.style.transform = `translateX(${newTransformValue}%)`;
}

// About Section - See More Toggle
function toggleMoreInfo(button) {
    const moreInfo = button.previousElementSibling; // The <div> with class "more-info"
    if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
        moreInfo.style.display = "block"; // Show the content
        button.textContent = "See Less"; // Update button text
    } else {
        moreInfo.style.display = "none"; // Hide the content
        button.textContent = "See More"; // Revert button text
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

document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach((carousel) => {
        const track = carousel.querySelector(".carousel-track");
        const items = Array.from(track.children);
        const prevButton = carousel.querySelector(".carousel-button-prev");
        const nextButton = carousel.querySelector(".carousel-button-next");

        let currentIndex = 0; // Start at the first image
        const visibleItems = 3; // Number of visible items at once

        const updateButtons = () => {
            // Update button states based on currentIndex and item count
            prevButton.disabled = currentIndex === 0;
            nextButton.disabled = currentIndex >= items.length - visibleItems;
        };

        const moveCarousel = (direction) => {
            const itemWidth = items[0].getBoundingClientRect().width;
            currentIndex += direction;

            // Ensure currentIndex stays within bounds
            currentIndex = Math.max(0, Math.min(currentIndex, items.length - visibleItems));

            // Move the track to show the appropriate items
            track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

            // Update button states
            updateButtons();
        };

        // Add click event listeners for navigation buttons
        prevButton.addEventListener("click", () => moveCarousel(-1));
        nextButton.addEventListener("click", () => moveCarousel(1));

        // Initial button state update
        updateButtons();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const jobCards = document.querySelectorAll('.job');
  
    // Create one popup container
    const popup = document.createElement('div');
    popup.classList.add('experience-popup');
  
    // Inner popup content
    const popupContent = document.createElement('div');
    popupContent.classList.add('experience-popup-content');
    popup.appendChild(popupContent);
  
    // Insert into the document
    document.body.appendChild(popup);
  
    // For each job card, click -> open popup
    jobCards.forEach((card) => {
      card.addEventListener('click', () => {
        const jobDetailsDiv = card.querySelector('.job_details');
        const jobRoleDiv    = card.querySelector('.job_role');
  
        // Build HTML to show both the short details + full role 
        const jobDetailsHtml = jobDetailsDiv ? jobDetailsDiv.innerHTML : '';
        const jobRoleHtml    = jobRoleDiv ? jobRoleDiv.innerHTML : '';
  
        popupContent.innerHTML = `
          <button class="close-popup">&#10006;</button>
          <div class="job_details">
            ${ jobDetailsHtml }
          </div>
          <hr style="margin: 1rem 0;">
          <div class="job_role active">
            ${ jobRoleHtml }
          </div>
        `;
  
        // Show the popup
        popup.classList.add('active');
  
        // Close button inside popup
        const closeButton = popupContent.querySelector('.close-popup');
        closeButton.addEventListener('click', (e) => {
          e.stopPropagation();
          popup.classList.remove('active');
        });
      });
    });
  
    // Close if clicking outside the white popup box
    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        popup.classList.remove('active');
      }
    });
  });
  
  

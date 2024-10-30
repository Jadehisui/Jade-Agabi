const texts = ["Cybersecurity Analyst", "SUI Blockchain developer", "Web/Mobile developer"];
let index = 0;
let charIndex = 0;
const typingText = document.getElementById("typing-text");

function type() {
    if (charIndex < texts[index].length) {
        typingText.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1000);
    }
}

function erase() {
    if (charIndex > 0) {
        typingText.textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100);
    } else {
        index = (index + 1) % texts.length;
        setTimeout(type, 500);
    }
}

// Start the typing effect
type();

//  Add event listener to the button

    document.addEventListener('DOMContentLoaded', function () {
        const outlineBoxes = document.querySelectorAll('.outline-box');

        function checkVisibility() {
            outlineBoxes.forEach(box => {
                const boxRect = box.getBoundingClientRect();
                const boxTop = boxRect.top;

                // Check if the box is in the viewport
                if (boxTop < window.innerHeight && boxTop > 0) {
                    box.style.opacity = '1'; // Fade in
                    box.style.transform = 'translateX(0)'; // Move to original position
                } else {
                    box.style.opacity = '0'; // Fade out
                    box.style.transform = 'translateX(-100px)'; // Move to the left
                }
            });
        }

        // Initial check
        checkVisibility();

        // Check visibility on scroll
        window.addEventListener('scroll', checkVisibility);
    });
// Function to initialize ScrollReveal on specified selectors
function initializeScrollReveal() {
    ScrollReveal().reveal(".navbar", { delay: 100, reset: true, origin: 'top', distance: '20px', duration: 300 });
    ScrollReveal().reveal(".hero", { delay: 100, reset: true, origin: 'bottom', distance: '20px', duration: 300 });
    ScrollReveal().reveal(".main-head", { delay: 100, reset: true, origin: 'left', distance: '500px', duration: 300 });
    ScrollReveal().reveal(".main-logo", { delay: 100, reset: true, origin: 'right', distance: '500px', duration: 300 });
    ScrollReveal().reveal("#AboutMe", { delay: 100, reset: true, origin: 'bottom', distance: '20px', duration: 300 });
    
    // Add ScrollReveal for timeline-items
    ScrollReveal().reveal(".timeline-item", { delay: 100, reset: true, origin: 'bottom', distance: '20px', duration: 300 });
}

// Call the function initially
initializeScrollReveal();

// Example function to add new timeline items dynamically
function addTimelineItem(content) {
    const timeline = document.getElementById('timeline'); // Assuming you have a timeline container
    const newItem = document.createElement('div');
    newItem.className = 'timeline-item'; // Ensure it has the class to be revealed
    newItem.textContent = content; // Set the content of the new item
    timeline.appendChild(newItem);

    // Re-initialize ScrollReveal for the new item
    initializeScrollReveal();
}

// Example usage: adding a new timeline item
addTimelineItem("New event added to the timeline!");


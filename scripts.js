const body = document.getElementsByTagName("body")[0];
const navbarSections = document.getElementsByClassName("navbarelem");
const sectionIds = ["frontpage", "about-me", "experience", "projects", "contact-footer"];
let sectionNumber;

// Getting a NodeList of clickble project glass divs
const projectClickables = document.querySelectorAll(".project-glass-div");

// Getting a NodeList of close buttons
const closeButtons = document.querySelectorAll(".close-button");

// JS function & Code for replaying animation each time section is in 
// viewport, instead of once on load
const animatables = document.querySelectorAll('.animatable');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('playAnim');
        } else {
            entry.target.classList.remove('playAnim'); // Optional: for replay
        }
    });
});

// Applying function
animatables.forEach(el => observer.observe(el));

// JS function for hover effect on navbar cards to play when
// section is in viewport
const sections = document.querySelectorAll('.snap-section');
const current_section_observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.classList.contains('snap-section')){ // if entry is in viewport and is a section
            Array.from(navbarSections).forEach(section => {section.classList.remove('current-section')});
            const idx = sectionIds.indexOf(entry.target.id);
            if (idx !== -1) {
                navbarSections[idx].classList.add('current-section');
            }
        }
    })
}, { threshold: 0.99}
);

// Applying function
sections.forEach(el => current_section_observer.observe(el));

// Event Listener for click on project-glass-div
projectClickables.forEach(card => {
    card.addEventListener("click", () => {
        console.log("Project card clicked!"); // Debug log
        const popupId = card.dataset.popup;
        console.log("Popup ID:", popupId); // Debug log
        const popup = document.getElementById(popupId);
        console.log("Found popup:", popup); // Debug log
        popup.classList.remove("hidden");
        // Fix scroll lock - target both html and body with !important
        document.documentElement.style.setProperty('overflow', 'hidden', 'important');
        document.body.style.setProperty('overflow', 'hidden', 'important');
        console.log("Popup opened successfully"); // Debug log
    });
});

// Event Listener for close-button
closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("Close button clicked!"); // Debug log
        const popup = button.closest('.project-popup');
        console.log("Found popup:", popup); // Debug log
        if (popup) {
            popup.classList.add("hidden");
            // Fix scroll unlock - target both html and body
            document.documentElement.style.removeProperty('overflow');
            document.body.style.removeProperty('overflow');
            console.log("Popup closed successfully"); // Debug log
        } else {
            console.log("No popup found!"); // Debug log
        }
    });
});

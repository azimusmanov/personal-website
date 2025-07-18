const body = document.getElementsByTagName("body")[0];
const navbarSections = document.getElementsByClassName("navbarelem");
const sectionIds = ["frontpage", "about-me", "experience", "projects", "contact-footer"];
let sectionNumber;

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
}, { threshold: 0.9 }
);

sections.forEach(el => current_section_observer.observe(el));
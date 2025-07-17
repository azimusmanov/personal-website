const body = document.getElementsByTagName("body")[0];

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
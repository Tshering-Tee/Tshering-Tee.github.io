const texts = ["Developer", "Designer", "Video Editor"];
let currentIndex = 0;
let currentText = "";
let isDeleting = false;
let charIndex = 0;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenWords = 2000;

function type() {
    const textElement = document.getElementById("changingText");
    const fullText = texts[currentIndex];

    if (isDeleting) {
        currentText = fullText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        currentText = fullText.substring(0, charIndex + 1);
        charIndex++;
    }

    textElement.textContent = currentText;

    if (!isDeleting && charIndex === fullText.length) {
        isDeleting = true;
        setTimeout(type, delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % texts.length;
        setTimeout(type, typingSpeed);
    } else {
        const speed = isDeleting ? deletingSpeed : typingSpeed;
        setTimeout(type, speed);
    }
}

// Start typing effect
type();

document.querySelectorAll('.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});



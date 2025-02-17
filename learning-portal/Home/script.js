// Initialize Lucide icons
lucide.createIcons();

// Check for stored username
document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    const loginText = document.getElementById('loginText');
    const storedUsername = localStorage.getItem('username');

    if (storedUsername) {
        loginText.textContent = storedUsername;
    }

    // Add hover effect to all feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Add hover effect to hero image
    const heroImage = document.querySelector('.image-container img');
    if (heroImage) {
        heroImage.addEventListener('mouseenter', () => {
            heroImage.style.transform = 'scale(1.05)';
        });
        heroImage.addEventListener('mouseleave', () => {
            heroImage.style.transform = 'scale(1)';
        });
    }
});
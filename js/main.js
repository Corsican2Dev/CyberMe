document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
        e.preventDefault(); // bloque le lien direct

        const href = card.getAttribute('href');
        const clickSound = new Audio('assets/sounds/click.mp3');
        clickSound.play();

        setTimeout(() => {
            window.open(
                href,
                '_blank',
                'width=1200,height=800,toolbar=no,menubar=no,resizable=yes,scrollbars=yes'
            );
        }, 2000); // temps de laisser jouer le son
    });
});

// Initialisation du fond animé Vanta.js
VANTA.NET({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0xcc99ff,
    backgroundColor: 0x0a0011
});



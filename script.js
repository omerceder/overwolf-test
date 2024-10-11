// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Prevent default
document.querySelectorAll('.js-prevent-default').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
    });
});

// Lottie player - play on link hover
document.querySelectorAll('.js-lottie-player').forEach(player => {
    const parentLink = player.closest('a');
    if (parentLink) {
        parentLink.addEventListener('mouseenter', function() {
            player.play();
        });
        parentLink.addEventListener('mouseleave', function() {
            player.stop();
        });
    }
});

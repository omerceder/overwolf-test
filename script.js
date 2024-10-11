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
})

// Numeral animation
document.querySelectorAll('.js-numeral').forEach(numeral => {
    const initialText = numeral.textContent;
    numeral.textContent = '0';

    const targetNumber = parseInt(initialText.replace(/,/g, ''), 10);
    const duration = 1500; // Duration of the animation in milliseconds
    const frameRate = 30; // Number of frames per second
    const totalFrames = Math.round(duration / (1000 / frameRate));
    let frame = 0;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = setInterval(() => {
                    frame++;
                    const progress = frame / totalFrames;
                    const currentNumber = Math.round(targetNumber * progress);
                    numeral.textContent = currentNumber.toLocaleString();

                    if (frame === totalFrames) {
                        clearInterval(counter);
                    }
                }, 1000 / frameRate);
                observer.unobserve(numeral);
            }
        });
    });

    observer.observe(numeral);
});

// Tools animation
document.querySelectorAll('.js-tools-animation').forEach(toolsContainer => {
    const toolsItems = toolsContainer.children;
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    Array.from(toolsItems).forEach((item, index) => {
                        setTimeout(() => {
                            item.style.transform = 'translateY(0)';
                            item.style.opacity = '1';
                            item.style.transition = 'transform 0.6s ease-out, opacity 0.3s ease-out';
                        }, index * 100); // Delay each item by 100ms
                    });
                    observer.unobserve(toolsContainer);
                }, 200); // Add timeout of 200ms before starting
            }
        });
    });

    observer.observe(toolsContainer);
    
    // Initial state
    Array.from(toolsItems).forEach(item => {
        item.style.transform = 'translateY(40px)';
        item.style.opacity = '0';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const ceoImage = document.querySelector('.ceo');
    
    ceoImage.style.opacity = '0';
    ceoImage.style.transform = 'translateY(30px)';
    ceoImage.style.transition = 'all 1s ease-out';
    
    setTimeout(() => {
        ceoImage.style.opacity = '1';
        ceoImage.style.transform = 'translateY(0)';
    }, 500);
    
    // Optional: Add hover effect
    ceoImage.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    ceoImage.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});
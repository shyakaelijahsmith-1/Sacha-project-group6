document.addEventListener('DOMContentLoaded', function() {
    const ceoImage = document.querySelector('.ceo');
    
    // Fade in animation
    ceoImage.style.opacity = '0';
    ceoImage.style.transform = 'translateY(30px)';
    ceoImage.style.transition = 'all 1s ease-out';
    
    setTimeout(() => {
        ceoImage.style.opacity = '1';
        ceoImage.style.transform = 'translateY(0)';
    }, 500);
    
    ceoImage.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    // Dropdown functionality
    const menuBtn = document.getElementById('menuBtn');
    const dropdownContent = document.getElementById('dropdownContent');
    
    // Toggle dropdown visibility
    menuBtn.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });
    
    // Close dropdown when clicking outside
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.menu-btn')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
    
    // Close dropdown when clicking on a link
    dropdownContent.addEventListener('click', function() {
        dropdownContent.classList.remove('show');
    });
});
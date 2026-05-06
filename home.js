document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    const mainContent = document.getElementById('mainContent');
    
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        
        mainContent.style.display = 'block';
        
        setTimeout(() => {
            mainContent.classList.add('show');
            
            const ceoImage = document.querySelector('.ceo');
            if (ceoImage) {
                ceoImage.style.opacity = '0';
                ceoImage.style.transform = 'translateY(30px)';
                ceoImage.style.transition = 'all 1s ease-out';
                
                setTimeout(() => {
                    ceoImage.style.opacity = '1';
                    ceoImage.style.transform = 'translateY(0)';
                }, 500);
                
                ceoImage.addEventListener('mouseenter', function() {
                    this.style.transform = 'scale(1.05)';
                });
                
                ceoImage.addEventListener('mouseleave', function() {
                    this.style.transform = 'scale(1)';
                });
            }
        }, 100);
    }, 5000); 
    
    const menuBtn = document.getElementById('menuBtn');
    const dropdownContent = document.getElementById('dropdownContent');
    
    menuBtn.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });
    
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.menu-btn')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
    
    dropdownContent.addEventListener('click', function() {
        dropdownContent.classList.remove('show');
    });
});
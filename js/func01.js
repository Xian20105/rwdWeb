document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-icon');
    const menu = document.querySelector('.drop-down-menu');
    const dropDownIcon = document.getElementById('drop-down-icon');
  
    const touchStartY = 0;
    const touchEndY = 0;
  
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
  
    document.addEventListener('click', function(event) {
        const isClickInside = menu.contains(event.target) || menuToggle.contains(event.target) || dropDownIcon.contains(event.target);
  
        if (!isClickInside) {
            menu.classList.remove('show');
        }
    });
  
  
    document.addEventListener('touchstart', function(event) {
        touchStartY = event.touches[0].clientY;
    });
  
  
    document.addEventListener('touchmove', function(event) {
        touchEndY = event.touches[0].clientY;
        handleTouchMove();
    });
  
  
    function handleTouchMove() {
        const touchDistance = Math.abs(touchStartY - touchEndY);
  
        if (touchDistance > 10) { 
            menu.classList.remove('show');
        }
    }
  });
   // ---------以下為回頁面頂部----------
   document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('arrowUpward');
    
    // 頁面頂部按鈕顯示控制
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    });

    // 平滑滾動到頁面頂部
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
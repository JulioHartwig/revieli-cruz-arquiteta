        const menu = document.querySelector('.menu');

        window.addEventListener('scroll', () => {
          if (window.scrollY > 10) {
            menu.classList.add('scrolled'); 
          } else {
            menu.classList.remove('scrolled');
          }
        });
    
    document.querySelector('.vamosConversar').addEventListener('click', function() {
    document.getElementById('footer').scrollIntoView({behavior: 'smooth'});
  });
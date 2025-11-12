  // Highlight active nav link based on current filename
    (function(){
      const links = document.querySelectorAll('.navig_link');
      const currentFile = location.pathname.split('/').pop() || 'index.html';
      links.forEach(l => {
        const href = l.getAttribute('href');
        if (href === currentFile) l.classList.add('active');
      });
    })();
    // PineGreen
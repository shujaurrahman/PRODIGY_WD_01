    // Change navbar background color on scroll
    window.addEventListener('scroll', function() {
      var navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#35374B'; // Change background color on scroll
      } else {
        navbar.style.backgroundColor = '#51829B'; // Reset background color
      }
    });
  
jQuery(document).ready(function ($) {

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Stick the header at top on scroll
//  $("#header").sticky({
//    topSpacing: 0,
//    zIndex: '50'
//  });

  // Intro background carousel
//  $("#intro-carousel").owlCarousel({
//    autoplay: true,
//    dots: false,
//    loop: true,
//    animateOut: 'fadeOut',
//    items: 1
//  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function (e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smooth scroll for the menu and links with .scrollto classes
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (!$('#header').hasClass('header-fixed')) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });


  // Porfolio - uses the magnific popup jQuery plugin
  $('.portfolio-popup').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
      opener: function (openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4
      },
      900: {
        items: 6
      }
    }
  });

  setTimeout(function() {
      $("#site-fixed-ad-container .x").removeClass('d-none');
      $("#site-fixed-ad-container .x").html("x");
      $("#site-fixed-ad-container .x").click(function() {
          $("#site-fixed-ad-container").hide(1000);
      });
  }, 1000 * 5);


});

$(function() {
    hideShareOnDesktop();
});
function hideShareOnDesktop() {
    setInterval(() => {
        var pageWidth = window.innerWidth;
        if (pageWidth > 600) {
            const share = document.querySelectorAll('.ss-btn-share');
            share.forEach(box => {
              box.remove();
            });
        }
    }, 1000);
}


/******************************************************************************************************************/
/********************************** Performance - Defer offscreen images ******************************************/
/******************************************************************************************************************/
document.addEventListener("DOMContentLoaded", function() {
  const lazyImages = document.querySelectorAll('img.lazy');
  if ('IntersectionObserver' in window) {
      const lazyLoad = (entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const img = entry.target;
                  img.src = img.getAttribute('data-src');
                  img.classList.remove('lazy');
                  observer.unobserve(img);
              }
          });
      };
      const observer = new IntersectionObserver(lazyLoad, { rootMargin: "0px 0px 50px 0px" });
      lazyImages.forEach(image => observer.observe(image));
  }
  else {
      // Fallback for browsers that do not support IntersectionObserver
      const loadImages = () => {
          lazyImages.forEach(image => {
              image.src = image.getAttribute('data-src');
              image.classList.remove('lazy');
          });
      };
      window.addEventListener('load', loadImages);
  }
});

/******************************************************************************************************************/
/******************************************************** Read Time  **********************************************/
/******************************************************************************************************************/
document.addEventListener("DOMContentLoaded", function() {
  // Define the average reading speed (words per minute)
  const wordsPerMinute = 100;
  // Function to calculate the reading time
  function calculateReadingTime(text) {
      const wordCount = text.split(/\s+/).filter(Boolean).length;
      console.log("words: "+wordCount);
      const minutes = wordCount / wordsPerMinute;
      return Math.ceil(minutes); // Round up to the nearest minute
  }
  // Get the text content from the div
  const contentDiv = document.getElementById('read-article-content');
  if (contentDiv) {
    const textContent = contentDiv.textContent || contentDiv.innerText;
    // Calculate and display the reading time
    const readingTime = calculateReadingTime(textContent);
    const readingTimeDiv = document.getElementById('reading-time');
    readingTimeDiv.textContent = `${readingTime} min${readingTime > 1 ? 's read' : 'read'}`;
  }
});

/******************************************************************************************************************/
/************************************************** webpusher *****************************************************/
/******************************************************************************************************************/
(function(w, d, s, id) {
  if (typeof(w.webpushr) !== 'undefined') return;
  w.webpushr = w.webpushr || function() {
      (w.webpushr.q = w.webpushr.q || []).push(arguments)
  };
  var js, fjs = d.getElementsByTagName(s)[0];
  js = d.createElement(s);
  js.id = id;
  js.async = 1;
  js.src = "https://cdn.webpushr.com/app.min.js";
  fjs.parentNode.appendChild(js);
}(window, document, 'script', 'webpushr-jssdk'));
webpushr('setup', {
  'key': 'BN9JHKmZWB5ivR9Sv2l_rgsouuLmGD2wsqIJmTsobxJMz4byi2Hnk1Fk50vNqX5HgfMuPD2GKjs1cUb4OpOStDM'
});

/******************************************************************************************************************/
/************************************************** consent *****************************************************/
/******************************************************************************************************************/
document.addEventListener("DOMContentLoaded", function() {
  cookiePolicy();
});
function cookiePolicy() {
  var key = 'dentofacts-cookie';
  var cookie = getStoredValue(key);
  // console.log(cookie);
  if (cookie === 'true') {
      $("#policy-container").hide();
  }
  $(".policy-button").click(function() {
      storeValue(key, 'true');
      $("#policy-container").hide(1000);
  });
  $("#policy-container span.x").click(function() {
      $("#policy-container").hide(1000);
  });
  setTimeout(function() {
      storeValue(key, '');
  }, 60 * 60 * 1000);
}
function storeValue(key, value) {
  if (localStorage) {
      localStorage.setItem(key, value);
  } else {
      $.cookies.set(key, value);
  }
}
function getStoredValue(key) {
  if (localStorage) {
      return localStorage.getItem(key);
  } else {
      return $.cookies.get(key);
  }
}


/******************************************************************************************************************/
/************************************************** Appointment ***************************************************/
/******************************************************************************************************************/
document.addEventListener('DOMContentLoaded', function () {
  var modal = document.querySelector(".consultation-form-container");
  var btn = document.querySelector("#scheduleAppointmentButton");
  var span = document.querySelector(".consultation-form-container .close");
  // Open the modal
  btn.onclick = function() {
      modal.style.display = "flex"; // Show the modal with flexbox centering
  }
  // Close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }
  // Close modal when clicking outside
  window.onclick = function(event) {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  }
});
document.getElementById('consultationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Gather form data
  var formData = {
      fullName: document.getElementById('fullName').value,
      age: document.getElementById('age').value,
      gender: document.getElementById('gender').value,
      address: document.getElementById('address').value,
      phone: document.getElementById('phone').value,
      dentalPainDescription: document.getElementById('dentalPainDescription').value
  };
  // Send data to Google Apps Script Web App
  fetch('https://script.google.com/macros/s/AKfycbwV3y0LNTOoXA81jikLonlNMNvMRbhl1knoNdk1O0ceV7G4vB2aKpOXzBMvwweNfm6y/exec', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
  })
  .then(response => response.json())
  .then(data => {
      if (data.result === 'Success') {
          // Show confirmation message
          document.getElementById('confirmationMessage').style.display = 'block';
          // Hide the form
          document.getElementById('consultationForm').reset();
      } else {
          alert('There was an issue submitting your form. Please try again.');
      }
  })
  .catch(error => {
      console.error('Error:', error);
      alert('There was an error with the submission.');
  });
});
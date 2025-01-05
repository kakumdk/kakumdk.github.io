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
/********************************************** overall experience ************************************************/
/******************************************************************************************************************/
document.addEventListener("DOMContentLoaded", function () {
  // Get the current year
  const currentYear = new Date().getFullYear();
  // Define the start year of your career
  const careerStartYear = 2017;
  // Calculate the total years of experience
  const experienceYears = currentYear - careerStartYear;
  // Populate the overall-experience element
  const experienceElement = document.querySelector(".overall-experience");
  if (experienceElement) {
      experienceElement.textContent = `${experienceYears} Years Experience Overall`;
  }
});


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
document.addEventListener("DOMContentLoaded", function () {
  const timeSlotSelect = document.getElementById("timeSlot");
  // Helper function to format dates
  function formatDate(date) {
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const dayOfWeek = days[date.getDay()];
      const day = date.getDate();
      const month = months[date.getMonth()];
      const year = date.getFullYear();
      const suffix =
          day === 1 || day === 21 || day === 31 ? "st" :
          day === 2 || day === 22 ? "nd" :
          day === 3 || day === 23 ? "rd" : "th";
      return `${dayOfWeek}, ${day}${suffix} ${month} ${year}`;
  }
  // Function to generate time slots
  function generateTimeSlots(availableSlots) {
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      const slotTimes = [
          { start: "03:00 PM", end: "03:45 PM" },
          { start: "04:00 PM", end: "04:45 PM" },
          { start: "05:00 PM", end: "05:45 PM" },
          { start: "06:00 PM", end: "06:45 PM" }
      ];
      const slots = [];
      [today, tomorrow].forEach((day, index) => {
          const dayLabel = index === 0 ? "Today" : "Tomorrow";
          const formattedDate = formatDate(day);
          slotTimes.forEach(({ start, end }) => {
              const [startHour, startMinute] = start.split(/[: ]/).slice(0, 2).map(Number);
              const isPM = start.includes("PM");
              const adjustedHour = isPM && startHour !== 12 ? startHour + 12 : startHour;
              const slotTime = new Date(day.getFullYear(), day.getMonth(), day.getDate(), adjustedHour, startMinute);
              // Ensure the slot is not booked and is in the future only for today's slots
              const isSlotBooked = availableSlots.some(slot => slot.day === dayLabel && slot.start === start);
              if (
                  !isSlotBooked &&
                  (index === 1 || slotTime > now)
              ) {
                  const formattedSlot = `${dayLabel} (${formattedDate} - ${start} to ${end})`;
                  slots.push({ label: formattedSlot, value: `${dayLabel} ${formattedSlot}` });
              }
          });
      });
      return slots;
  }
  // Populate time slots
  async function populateTimeSlots() {
      try {
          // Fetch the booked slots JSON
          const response = await fetch("/data/online-dental-consultation-bookedSlots.json");
          const data = await response.json();
          const availableSlots = data.bookedSlots || [];
          const slots = generateTimeSlots(availableSlots);
          timeSlotSelect.innerHTML = "<option value=''>Select</option>";
          slots.forEach(slot => {
              const option = document.createElement("option");
              option.value = slot.value;
              option.textContent = slot.label;
              timeSlotSelect.appendChild(option);
          });
      } catch (error) {
          console.error("Error fetching or processing the slots JSON:", error);
          alert("Unable to load time slots. Please try again later.");
      }
  }
  if (window.location.pathname === "/dentofacts/online-dental-consultation.html") {
    // Call the function only on the specified page
    populateTimeSlots();
  }
});
document.getElementById("consultationForm").addEventListener("submit", function (event) {
  event.preventDefault();
  // Collect form data
  const fullName = document.getElementById("fullName").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const address = document.getElementById("address").value;
  const phone = document.getElementById("phone").value;
  const dentalPainDescription = document.getElementById("dentalPainDescription").value;
  const timeSlot = document.getElementById("timeSlot").value;
  // Additional text for WhatsApp
  const additionalText = "I appreciate your attention to my appointment and look forward to discussing my dental concerns with you.";
  // Format message
  const message = `Online Dental Consultation - Dental Consultation Form\n\nI have submitted my consultation form with the following details:\n` +
      `Name: ${fullName}\n` +
      `Age: ${age}\n` +
      `Gender: ${gender}\n` +
      `Address: ${address}\n` +
      `Contact Number: ${phone}\n` +
      `Dental Concern: ${dentalPainDescription}\n` +
      `Preferred Time Slot: ${timeSlot}\n\n` +
      `${additionalText}`;
  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);
  // WhatsApp URL (replace with your WhatsApp number)
  const whatsappNumber = "9538464616"; // Replace with your actual number (no + or 00)
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  // Redirect to WhatsApp
  window.open(whatsappUrl, "_blank");

  // Show confirmation message
  document.getElementById("confirmationMessage").style.display = "block";
  // Hide consultation form
  document.getElementById("consultationForm").style.display = "none";
});

/******************************************************************************************************************/
/************************************************** active menu ***************************************************/
/******************************************************************************************************************/
document.addEventListener("DOMContentLoaded", function () {
  const navMenuItems = document.querySelectorAll("#nav-menu-container .nav-menu li a");
  const currentPage = window.location.pathname;
  navMenuItems.forEach(item => {
      if (item.getAttribute("href") === currentPage) {
          item.parentElement.classList.add("active");
      }
  });
});

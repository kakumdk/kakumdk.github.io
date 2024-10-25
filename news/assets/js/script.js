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
    var key = 'news-cookie';
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
/************************************************** fixed ad ***&**************************************************/
/******************************************************************************************************************/
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        $("#site-fixed-ad-container .x").removeClass('d-none');
        $("#site-fixed-ad-container .x").html("x");
        $("#site-fixed-ad-container .x").click(function() {
            $("#site-fixed-ad-container").hide(1000);
        });
    }, 1000 * 5);
});

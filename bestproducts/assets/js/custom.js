document.addEventListener('DOMContentLoaded', function() {
    // Get the current URL
    const currentUrl = window.location.pathname;

    // Select all navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    // Iterate through the links and set the "active" class
    navLinks.forEach(link => {
        // Check if the link's href matches the current URL
        if (link.getAttribute('href') === currentUrl) {
            link.classList.add('active'); // Add "active" class
        } else {
            link.classList.remove('active'); // Remove "active" class if not matched
        }
    });
});

/******************************************************************************************************************/
/********************************** Performance - Defer offscreen images ******************************************/
/******************************************************************************************************************/
document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll('img');
    if ('IntersectionObserver' in window) {
        const lazyLoad = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    // img.classList.remove('lazy');
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
                // image.classList.remove('lazy');
            });
        };
        window.addEventListener('load', loadImages);
    }
});
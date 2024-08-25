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

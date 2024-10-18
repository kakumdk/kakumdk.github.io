document.getElementById('searchComparison').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    // Get the input value
    const inputValue = document.getElementById('searchInput').value.toLowerCase();
    const products = document.querySelectorAll('.product-compare-wrapper');
    let found = false;
    products.forEach(product => {
        const title = product.getAttribute('data-title').toLowerCase();
        if (title.indexOf(inputValue) !== -1) {
            product.classList.remove('d-none');
            found = true;
        }
        else {
            product.classList.add('d-none');
        }
        const noResultsMessage = document.getElementById('noResults');
        if (found) {
            noResultsMessage.classList.add('d-none'); // Hide message
        } else {
            noResultsMessage.classList.remove('d-none'); // Show message
        }
    });
});

// window.onload = function() {
//     const container = document.getElementById('product-compare-container-wrapper');
//     const products = Array.from(container.querySelectorAll('.product-compare-wrapper'));
//     products.sort((a, b) => {
//         const dateA = a.getAttribute('data-updated');
//         const dateB = b.getAttribute('data-updated');
//         return dateB - dateA; // Sort in descending order
//     });
//     container.innerHTML = '';
//     products.forEach(product => container.appendChild(product));
// };
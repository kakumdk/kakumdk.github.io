// On page load, check for the category parameter
window.onload = function() {
    const category = getQueryParam("category");
    const discount = getQueryParam("discount");
    const sort = getQueryParam("sort");
    filterProducts(
        decodeURIComponent(category),
        decodeURIComponent(discount),
        decodeURIComponent(sort),
        'sortByUpdated'
    );
};
// Function to get query parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
// Function to filter products
function filterProducts(category, discount, sort, updated) {
    clickLinkAfterDelay('filterDiscount', 15);
    const header = document.querySelector(".dynamic-title");
    const header1 = document.querySelector(".dynamic-title-1");
    // if (updated != "null") {
    //     clickLinkAfterDelay('filterCategory', 15);
    //     const container = document.getElementById('shop-item-container-wrapper');
    //     const products = Array.from(container.querySelectorAll('.shop-item-wrapper'));
    //     products.sort((a, b) => {
    //         const dateA = a.getAttribute('data-updated');
    //         const dateB = b.getAttribute('data-updated');
    //         return dateB - dateA; // Sort in descending order
    //     });
    //     container.innerHTML = '';
    //     products.forEach(product => container.appendChild(product));
    // }
    if (category != "null") {
        clickLinkAfterDelay('filterCategory', 15);
        const products = document.querySelectorAll(".shop-item-wrapper");
        products.forEach(product => {
            const productCategory = product.getAttribute("data-category");
            if (productCategory !== category) {
                product.classList.add("d-none");
            }
            else {
                product.classList.remove("d-none");
            }
        });
        header.textContent = "Explore " + category.replace(/-/g, " & ");
        header1.textContent = category.replace(/-/g, " & ");
        const categoryElements = document.querySelectorAll('.category-class'); // Replace with your actual class
        categoryElements.forEach(element => {
            // Check if the element's text matches the category
            if (element.textContent.trim() === category) {
                // Add the 'active' class to the matching element
                element.classList.add('active');
            }
        });
    }
    if (discount != "null") {
        // clickLinkAfterDelay('filterDiscount', 15);
        const [bLower, bUpper] = discount.split("-").map(Number);
        const products = document.querySelectorAll(".shop-item-wrapper");
        products.forEach(product => {
            const productDiscount = product.getAttribute("data-discount");
            const aNumber = Number(productDiscount);
            if (aNumber >= bLower && aNumber <= bUpper) {
                product.classList.remove("d-none");
            }
            else {
                product.classList.add("d-none");
            }
        });
        header.textContent = "Explore Products Ranging from ₹" + discount.replace(/-/g, " to ₹");
        header1.textContent = "Products Ranging from ₹" + discount.replace(/-/g, " to ₹");
        if (discount == "0-500") {
            header.textContent = "Explore Products under ₹" + discount.replace(/0-/g, "");
            header1.textContent = "Products under ₹" + discount.replace(/0-/g, "");
        }
        if (discount == "100000-10000000") {
            header.textContent = "Explore Products over ₹" + discount.replace(/-10000000/g, "");
            header1.textContent = "Products over ₹" + discount.replace(/-10000000/g, "");
        }
        var discountClass = ".discount-class-" + discount;
        const discountElements = document.querySelectorAll(discountClass); // Replace with your actual class
        discountElements.forEach(element => {
            element.classList.add('active');
        });
    }
    if (sort != "null") {
        clickLinkAfterDelay('filterSort', 15);
        const container = document.getElementById('shop-item-container-wrapper');
        const products = Array.from(container.querySelectorAll('.shop-item-wrapper'));
        if (sort == "A-Z") {
            products.sort((a, b) => {
                const aSort = a.getAttribute('data-sort').toLowerCase();
                const bSort = b.getAttribute('data-sort').toLowerCase();
                return aSort.localeCompare(bSort);
            });
            header.textContent = "Explore Products Sorted: " + sort;
            header1.textContent = "Products Sorted " + sort;    
        }
        else if (sort == "Z-A") {
            products.sort((a, b) => {
                const aSort = a.getAttribute('data-sort').toLowerCase();
                const bSort = b.getAttribute('data-sort').toLowerCase();
                return bSort.localeCompare(aSort);
            });
            header.textContent = "Explore Products Sorted: " + sort;
            header1.textContent = "Products sorted " + sort;
        }
        else if (sort === 'discount-low-high') {
            products.sort((a, b) => {
                const aPrice = parseFloat(a.getAttribute('data-discount'));
                const bPrice = parseFloat(b.getAttribute('data-discount'));
                return aPrice - bPrice;
            });
            header.textContent = "Explore Products Sorted: Discount Price (Low to High)";
            header1.textContent = "Products sorted Discount Price (Low to High)";
        }
        else if (sort === 'discount-high-low') {
            products.sort((a, b) => {
                const aPrice = parseFloat(a.getAttribute('data-discount'));
                const bPrice = parseFloat(b.getAttribute('data-discount'));
                return bPrice - aPrice;
            });
            header.textContent = "Explore Products Sorted: Discount Price (High to Low)";
            header1.textContent = "Products sorted Discount Price (High to Low)";
        }
        else if (sort === 'discount-amount-low-high') {
            products.sort((a, b) => {
                const aPrice = parseFloat(a.getAttribute('data-discount-amount'));
                const bPrice = parseFloat(b.getAttribute('data-discount-amount'));
                return aPrice - bPrice;
            });
            header.textContent = "Explore Products Sorted: Discount Percentage (Low to High)";
            header1.textContent = "Products sorted Discount Percentage (Low to High)";
        }
        else if (sort === 'discount-amount-high-low') {
            products.sort((a, b) => {
                const aPrice = parseFloat(a.getAttribute('data-discount-amount'));
                const bPrice = parseFloat(b.getAttribute('data-discount-amount'));
                return bPrice - aPrice;
            });
            header.textContent = "Explore Products Sorted: Discount Percentage (High to Low)";
            header1.textContent = "Products sorted Discount Percentage (High to Low)";
        }
        container.innerHTML = '';
        products.forEach(product => container.appendChild(product));
        var sortClass = ".sort-class-" + sort;
        const sortElements = document.querySelectorAll(sortClass); // Replace with your actual class
        sortElements.forEach(element => {
            element.classList.add('active');
        });
    }
}

// 
document.addEventListener('DOMContentLoaded', (event) => {
    clickLinkAfterDelay('filterDiscount', 10);
});
function clickLinkAfterDelay(linkId, delay) {
    const link = document.getElementById(linkId);
    if (link) {
        setTimeout(() => {
            link.click();
        }, delay);
    } else {
        console.warn(`Link with ID "${linkId}" not found.`);
    }
}

// Search products
document.getElementById('searchProducts').addEventListener('input', function(event) {
    const search = document.getElementById('searchInput').value.toLowerCase();
    const noResultsMessage = document.getElementById('noResults');
    const products = document.querySelectorAll(".shop-item-wrapper");
    const category = getQueryParam("category");
    const discount = getQueryParam("discount");
    const sort = getQueryParam("sort");
    let found = false;
    products.forEach(product => {
        const title = product.getAttribute('data-title').toLowerCase();
        if (title.indexOf(search) !== -1) {
            if (category != null) {
                const productCategory = product.getAttribute("data-category");
                if (productCategory == category) {
                    product.classList.remove('d-none');
                    found = true;
                }
            }
            else if (discount != null) {
                const [bLower, bUpper] = discount.split("-").map(Number);
                const productDiscount = product.getAttribute("data-discount");
                const aNumber = Number(productDiscount);
                if (aNumber >= bLower && aNumber <= bUpper) {
                    product.classList.remove('d-none');
                    found = true;
                }
            }
            else {
                product.classList.remove('d-none');
                found = true;
            }
        }
        else {
            product.classList.add('d-none');
        }
        if (found) {
            noResultsMessage.classList.add('d-none'); // Hide message
        } else {
            noResultsMessage.classList.remove('d-none'); // Show message
        }
    });
});
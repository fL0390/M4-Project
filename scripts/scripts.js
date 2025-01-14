document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-bar input');
    const products = document.querySelectorAll('.product');
    const navLinks = document.querySelectorAll('.nav-menu a');

    function filterProducts(category) {
        products.forEach(product => {
            if (category === 'all' || product.closest('section').id === category) {
                product.style.filter = 'none';
            } else {
                product.style.filter = 'blur(5px)'; 
            }
        });

        const categorySection = document.getElementById(category);
        if (categorySection) {
            categorySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        let foundMatch = false; 
        let firstMatch = null; 

        products.forEach(product => {
            const productText = product.innerText.toLowerCase();

            if (query === '') {
                product.style.filter = 'none'; 
            } else if (productText.includes(query)) {
                product.style.filter = 'none'; 

                if (productText === query) {
                    product.scrollIntoView({ behavior: 'smooth', block: 'center' }); 
                    foundMatch = true; 
                } else if (!foundMatch && !firstMatch) {
                    firstMatch = product; 
                }
            } else {
                product.style.filter = 'blur(5px)'; 
            }
        });

        if (!foundMatch && firstMatch) {
            firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            const category = this.getAttribute('href').substring(1); 
            filterProducts(category); 
        });
    });
});
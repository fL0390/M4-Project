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

    products.forEach(product => {
        const img = product.querySelector('img');
        img.addEventListener('dblclick', function() {
            const blurBackground = document.createElement('div');
            blurBackground.style.position = 'fixed';
            blurBackground.style.top = '0';
            blurBackground.style.left = '0';
            blurBackground.style.width = '100%';
            blurBackground.style.height = '100%';
            blurBackground.style.backdropFilter = 'blur(5px)';
            blurBackground.style.zIndex = '1000';
            blurBackground.style.display = 'flex';
            blurBackground.style.alignItems = 'center';
            blurBackground.style.justifyContent = 'center';
            blurBackground.style.transition = 'opacity 0.3s ease';
            blurBackground.style.opacity = '0';

            const zoomedImg = document.createElement('img');
            zoomedImg.src = img.src;
            zoomedImg.style.maxWidth = '90%';
            zoomedImg.style.maxHeight = '90%';
            zoomedImg.style.transition = 'transform 0.3s ease';
            zoomedImg.style.transform = 'scale(1.1)';

            blurBackground.appendChild(zoomedImg);
            document.body.appendChild(blurBackground);

            requestAnimationFrame(() => {
                blurBackground.style.opacity = '1'; 
            });

            blurBackground.addEventListener('click', function() {
                blurBackground.style.opacity = '0'; 
                setTimeout(() => {
                    document.body.removeChild(blurBackground);
                }, 300); 
            });
        });
    });
});
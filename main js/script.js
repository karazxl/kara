
const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');


const allProducts = [
    { name: 'Куртка', price: '7 000 KZT', image: 'images/image1.jpg' },
    { name: 'Свитер', price: '5 000 KZT', image: 'images/image2.jpg' },
    { name: 'Кроссовки', price: '8 000 KZT', image: 'images/image3.jpg' },
    { name: 'Футболка', price: '3 000 KZT', image: 'images/image4.jpg' },
    { name: 'Джинсы', price: '6 500 KZT', image: 'images/image5.jpg' },
    { name: 'Кроссовки', price: '9 000 KZT', image: 'images/image6.jpg' }
];


let currentIndex = 3;


function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function handleScrollAnimation() {
    animateOnScrollElements.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('show');
        }
    });
}


window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);


function loadMoreProducts() {
    const productsContainer = document.getElementById('products');
    const loadMoreBtn = document.getElementById('loadMoreBtn');


    for (let i = 0; i < 3 && currentIndex < allProducts.length; i++, currentIndex++) {
        const product = allProducts[currentIndex];
        const productCard = document.createElement('div');
        productCard.className = 'product-card animate-on-scroll';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        productsContainer.appendChild(productCard);
    }

    const allAnimateOnScrollElements = document.querySelectorAll('.animate-on-scroll');
    allAnimateOnScrollElements.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('show');
        }
    });


    if (currentIndex >= allProducts.length) {
        loadMoreBtn.style.display = 'none';
    }
}


document.getElementById('loadMoreBtn').addEventListener('click', loadMoreProducts);

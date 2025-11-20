// Product data
const productsData = {
    products: [
{
"id": 1,
"name": "Classic Sneakers",
"price": 79.99,
"originalPrice": 99.99,
"category": "shoes",
"image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
"images": [
"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
],
"description": "Comfortable and stylish white sneakers perfect for everyday wear.",
"fullDescription": "<p>These classic white sneakers combine timeless style with modern comfort. Made from high-quality materials, they feature a cushioned insole for all-day comfort and a durable rubber outsole for excellent traction.</p><p>Perfect for casual outings, these sneakers pair well with jeans, shorts, or even casual dresses. The clean white design makes them versatile enough for any wardrobe.</p>",
"rating": 4.5,
"reviewCount": 128,
"featured": true,
"badge": "Sale",
"specifications": {
"Material": "Leather and canvas",
"Sole": "Rubber",
"Closure": "Lace-up",
"Color": "White",
"Style": "Sneakers"
},
"reviews": [
{
"author": "John D.",
"rating": 5,
"date": "2023-05-15",
"comment": "Very comfortable and true to size. I wear them almost every day!"
},
{
"author": "Sarah M.",
"rating": 4,
"date": "2023-04-22",
"comment": "Great sneakers, though they took a few days to break in."
}
]
},
{
"id": 2,
"name": "Running Shoes",
"price": 89.99,
"category": "shoes",
"image": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
"description": "Lightweight running shoes with excellent cushioning.",
"rating": 4.3,
"reviewCount": 95,
"featured": false,
"badge": "New"
},
{
"id": 3,
"name": "Leather Boots",
"price": 129.99,
"category": "shoes",
"image": "https://www.unclehector.com/cdn/shop/products/browncasualboots.jpg?v=1682686540&width=1946",
"description": "Stylish leather boots perfect for fall and winter.",
"rating": 4.7,
"reviewCount": 67,
"featured": true
},
{
"id": 4,
"name": "Casual Loafers",
"price": 69.99,
"category": "shoes",
"image": "https://d1fufvy4xao6k9.cloudfront.net/images/blog/posts/2023/10/278a8929__2_.jpg",
"description": "Comfortable loafers for a smart casual look.",
"rating": 4.2,
"reviewCount": 42,
"featured": false
},
{
"id": 5,
"name": "High-Top Sneakers",
"price": 84.99,
"category": "shoes",
"image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
"description": "Trendy high-top sneakers in multiple colors.",
"rating": 4.4,
"reviewCount": 78,
"featured": false
},
{
"id": 6,
"name": "Sandals",
"price": 39.99,
"category": "shoes",
"image": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
"description": "Comfortable sandals for summer days.",
"rating": 4.1,
"reviewCount": 56,
"featured": false
},
{
"id": 7,
"name": "Formal Oxford Shoes",
"price": 119.99,
"category": "shoes",
"image": "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
"description": "Elegant oxford shoes for formal occasions.",
"rating": 4.6,
"reviewCount": 34,
"featured": false
},
{
"id": 8,
"name": "Slip-On Sneakers",
"price": 59.99,
"category": "shoes",
"image": "https://img.lazcdn.com/g/ff/kf/Sd4c372c00be24d6a9c3dc63b2460ab02B.jpg_720x720q80.jpg",
"description": "Convenient slip-on sneakers for easy wear.",
"rating": 4.0,
"reviewCount": 89,
"featured": false
},
{
"id": 9,
"name": "Hiking Boots",
"price": 139.99,
"category": "shoes",
"image": "https://img.lazcdn.com/g/p/4d6990e5f19c9eed3d97bf88789d0e0b.jpg_960x960q80.jpg_.webp",
"description": "Durable hiking boots for outdoor adventures.",
"rating": 4.8,
"reviewCount": 112,
"featured": false
},
{
"id": 10,
"name": "Canvas Sneakers",
"price": 49.99,
"category": "shoes",
"image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
"description": "Lightweight canvas sneakers in various colors.",
"rating": 4.2,
"reviewCount": 76,
"featured": false
},
{
"id": 11,
"name": "Denim Jacket",
"price": 59.99,
"category": "jackets",
"image": "https://ph-test-11.slatic.net/p/390313587f403af0e389958f6906c2be.jpg",
"description": "Classic denim jacket for a casual look.",
"rating": 4.4,
"reviewCount": 89,
"featured": true
},
{
"id": 12,
"name": "Leather Jacket",
"price": 149.99,
"category": "jackets",
"image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
"description": "Genuine leather jacket for a stylish edge.",
"rating": 4.7,
"reviewCount": 124,
"featured": true
},
{
"id": 13,
"name": "Bomber Jacket",
"price": 79.99,
"category": "jackets",
"image": "https://oldnavy.com.ph/cdn/shop/products/cn50522919_1200x.jpg?v=1685084823",
"description": "Trendy bomber jacket with ribbed cuffs.",
"rating": 4.3,
"reviewCount": 67,
"featured": false
},
{
"id": 21,
"name": "Basic Cotton T-Shirt",
"price": 19.99,
"category": "tshirts",
"image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
"description": "Soft cotton t-shirt in multiple colors.",
"rating": 4.2,
"reviewCount": 203,
"featured": true
},
{
"id": 22,
"name": "Graphic Print T-Shirt",
"price": 24.99,
"category": "tshirts",
"image": "https://baselinetennis.ph/cdn/shop/files/HG2022_2.jpg?v=1685712993",
"description": "T-shirt with unique graphic prints.",
"rating": 4.5,
"reviewCount": 156,
"featured": false
},

            {
                "id": 31,
                "name": "Slim Fit Jeans",
                "price": 49.99,
                "category": "pants",
                "image": "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                "description": "Comfortable slim fit jeans in various washes.",
                "rating": 4.3,
                "reviewCount": 178,
                "featured": true
            },
            {
                "id": 32,
                "name": "Chino Pants",
                "price": 44.99,
                "category": "pants",
                "image": "https://www.volcom.com/cdn/shop/articles/chinos_header_1920x1400_059d6231-42ab-4fd8-a29d-4e993264b57b.jpg?v=1747060966&width=1920",
                "description": "Versatile chino pants for casual wear.",
                "rating": 4.4,
                "reviewCount": 92,
                "featured": false
            },

            {
                "id": 41,
                "name": "Summer Floral Dress",
                "price": 59.99,
                "category": "dresses",
                "image": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                "description": "Light and airy floral print dress for summer.",
                "rating": 4.6,
                "reviewCount": 134,
                "featured": true
            },
            {
                "id": 42,
                "name": "Little Black Dress",
                "price": 69.99,
                "category": "dresses",
                "image": "https://cdn.shopify.com/s/files/1/0319/9247/9803/files/EBONY-MINI-DRESS---BLACK-_3.jpg.webp?v=1718761385",
                "description": "Classic little black dress for any occasion.",
                "rating": 4.7,
                "reviewCount": 89,
                "featured": false
            },

            {
                "id": 51,
                "name": "Leather Belt",
                "price": 29.99,
                "category": "accessories",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZnuA1PwMFsY1f25xXJCcKgKv_vvo0aQANgA&s",
                "description": "Genuine leather belt with classic buckle.",
                "rating": 4.4,
                "reviewCount": 67,
                "featured": false
            },
            {
                "id": 52,
                "name": "Wool Beanie",
                "price": 19.99,
                "category": "accessories",
                "image": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                "description": "Warm wool beanie for cold weather.",
                "rating": 4.2,
                "reviewCount": 45,
                "featured": false
            }
        ]
};

const productsPerPage = 8; // number of products per page
let currentPage = 1;        // current page
let currentProducts = [];   // currently displayed products
let cart = [];

function showPage(pageId) {
    // Hide all page screens
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
        page.style.display = "none";
    });

    // Show selected page
    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add('active');
        target.style.display = "block";
    }

    // FIX: hide/show New Arrival page
    const newArrival = document.getElementById('newarrival');
    newArrival.style.display = (pageId === 'newarrival') ? "block" : "none";

    const salePage = document.getElementById('sale');
    if (salePage) salePage.style.display = (pageId === 'sale') ? "block" : "none";

    // ⭐ FIX FEATURED + FEATURES SECTIONS ⭐
    const featuresSection = document.querySelector('.features');
    const featuredProductsSection = document.querySelector('.featured-products');

    if (pageId === 'landing') {
        if (featuresSection) featuresSection.style.display = "grid";
        if (featuredProductsSection) featuredProductsSection.style.display = "grid";
    } else {
        if (featuresSection) featuresSection.style.display = "none";
        if (featuredProductsSection) featuredProductsSection.style.display = "none";
    }

    // Load content for pages
    if (pageId === 'landing') loadFeaturedProducts();
    if (pageId === 'products') loadAllProducts();
    if (pageId === 'newarrival') loadNewProducts();
    if (pageId === 'sale') loadSaleProducts();
    if (pageId === 'aboutus') loadAboutUsPage();
}

function displayProducts(products, containerId, page = 1) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    currentProducts = products; // store the products for pagination
    currentPage = page;

    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = products.slice(startIndex, endIndex);

    paginatedProducts.forEach(product => {
        container.appendChild(createProductCard(product));
    });

    createPagination(products.length, containerId);
}

function createPagination(totalItems, containerId) {
    const totalPages = Math.ceil(totalItems / productsPerPage);
    const paginationContainer = document.querySelector(`#${containerId}`).parentElement.querySelector('.pagination');
    
    if (!paginationContainer) return;

    paginationContainer.innerHTML = ''; // clear previous buttons

    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => changePage(currentPage - 1, containerId);
    paginationContainer.appendChild(prevBtn);

    // Page buttons
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        if (i === currentPage) btn.classList.add('active');
        btn.onclick = () => changePage(i, containerId);
        paginationContainer.appendChild(btn);
    }

    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => changePage(currentPage + 1, containerId);
    paginationContainer.appendChild(nextBtn);
}

function changePage(page, containerId) {
    currentPage = page;
    displayProducts(currentProducts, containerId, page);
}


/* -------------------------------
   LOADERS
--------------------------------*/

function loadFeaturedProducts() {
    const featuredContainer = document.getElementById('featured-products');
    featuredContainer.innerHTML = '';

    const featuredProducts = productsData.products.filter(p => p.featured);
    featuredProducts.forEach(product => {
        featuredContainer.appendChild(createProductCard(product));
    });
}

function loadAllProducts() {
    const allProducts = productsData.products;
    displayProducts(allProducts, 'all-products'); // Pagination applied only here
}

function loadNewProducts() {
    const newProducts = productsData.products.filter(p => p.badge === 'New');
    const container = document.getElementById('newarrival-products');
    container.innerHTML = '';
    newProducts.forEach(product => container.appendChild(createProductCard(product))); // no pagination
}

function loadSaleProducts() {
    const saleProducts = productsData.products.filter(p => p.badge === 'Sale' || p.sale === true);
    const container = document.getElementById('sale-products');
    container.innerHTML = '';
    saleProducts.forEach(product => container.appendChild(createProductCard(product))); // no pagination
}

/* -------------------------------
   PRODUCT CARD BUILDER
--------------------------------*/

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = () => showProductDetail(product.id);

    const badge = product.badge ? `<div class="product-badge">${product.badge}</div>` : "";
    const originalPrice = product.originalPrice
        ? `<span style="text-decoration: line-through;color:var(--gray);font-size:16px;margin-right:8px;">
            $${product.originalPrice.toFixed(2)}
           </span>`
        : "";

    card.innerHTML = `
        ${badge}
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h3 class="product-title">${product.name}</h3>

            <div class="product-rating">
                ${generateStarRating(product.rating)}
                <span style="color:var(--gray);font-size:14px;">(${product.reviewCount})</span>
            </div>

            <div class="product-price">
                ${originalPrice}$${product.price.toFixed(2)}
            </div>

            <div class="product-actions">
                <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">Add to Cart</button>
                <button class="wishlist-btn" onclick="event.stopPropagation(); addToWishlist(${product.id})">
                    <i class="far fa-heart"></i>
                </button>
            </div>
        </div>
    `;

    return card;
}

function loadAboutUsPage() {
    const aboutContainer = document.querySelector("#aboutus .container");

    aboutContainer.innerHTML = `
        <h2 class="section-title">About Us — FashionHub</h2>

        <p>Welcome to FashionHub, your ultimate destination for trendy, affordable, and high-quality fashion.</p>

        <p>We believe style is a form of self-expression—and everyone deserves to look and feel confident every day.</p>

        <p>At FashionHub, we bring you a carefully curated collection of clothing, accessories, and fashion essentials inspired by global trends and designed for real people.</p>

        <p>Whether you’re looking for everyday wear, statement pieces, or the latest seasonal styles, we make it easy to explore, shop, and elevate your wardrobe—all in one place.</p>

        <h3>Our Mission</h3>
        <p>To make fashion accessible, enjoyable, and effortless for everyone.</p>

        <h3>What Sets Us Apart</h3>
        <ul class="about-list">
            <li>✨ A wide range of on-trend styles for all personalities</li>
            <li>✨ Quality you can trust at prices you’ll love</li>
            <li>✨ Fast delivery and smooth, secure checkout</li>
            <li>✨ Dedicated customer support that puts you first</li>
        </ul>

        <p>At FashionHub, we’re more than just an online store—we’re a community of style lovers. Thank you for choosing us to be a part of your fashion journey.</p>
    `;
}


/* -------------------------------
   STAR RATING
--------------------------------*/

function generateStarRating(rating) {
    let stars = "";
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;

    for (let i = 0; i < full; i++) stars += `<i class="fas fa-star"></i>`;
    if (half) stars += `<i class="fas fa-star-half-alt"></i>`;
    for (let i = 0; i < 5 - full - (half ? 1 : 0); i++) stars += `<i class="far fa-star"></i>`;

    return stars;
}

/* -------------------------------
   PRODUCT DETAIL PAGE
--------------------------------*/

function showProductDetail(productId) {
    const product = productsData.products.find(p => p.id === productId);
    if (!product) return;

    // Hide new arrivals block
    const newArrivalPage = document.getElementById('newarrival');
    if (newArrivalPage) newArrivalPage.style.display = "none";

    const detailContainer = document.getElementById('product-detail-content');

    const badge = product.badge ? `<div class="product-badge">${product.badge}</div>` : "";
    const originalPrice = product.originalPrice
        ? `<span style="text-decoration:line-through;color:var(--gray);font-size:20px;margin-right:10px;">
             $${product.originalPrice.toFixed(2)}
           </span>`
        : "";

    const thumbnails = product.images ? `
        <div class="product-thumbnails">
            ${product.images
                .map((img, i) => 
                    `<img src="${img}" class="thumbnail ${i === 0 ? 'active' : ''}"
                     onclick="changeProductImage(this, '${img}')">`
                )
                .join("")
            }
        </div>` : "";

    detailContainer.innerHTML = `
        <div class="product-image-container">
            ${badge}
            <img src="${product.image}" class="product-image-large" id="main-product-image">
            ${thumbnails}
        </div>

        <div class="product-details">
            <h1>${product.name}</h1>

            <div class="product-meta">
                <div class="product-rating-large">${generateStarRating(product.rating)}</div>
                <div class="product-review-count">${product.reviewCount} reviews</div>
            </div>

            <div class="product-price-large">
                ${originalPrice}$${product.price.toFixed(2)}
            </div>

            <p class="product-description">${product.description}</p>

            <div class="quantity-selector">
                <button onclick="decreaseQuantity()">-</button>
                <input type="number" id="quantity" value="1" min="1">
                <button onclick="increaseQuantity()">+</button>
            </div>

            <button class="add-to-cart-large" onclick="addToCart(${product.id})">Add to Cart</button>

            <div class="action-buttons">
                <button class="secondary-btn" onclick="addToWishlist(${product.id})">
                    <i class="far fa-heart"></i> Add to Wishlist
                </button>
            </div>
        </div>
    `;

    // Tabs
    document.getElementById("product-full-description").innerHTML =
        product.fullDescription || product.description;

    // Specs
    if (product.specifications) {
        let specsHtml = "";
        for (let [key, value] of Object.entries(product.specifications)) {
            specsHtml += `<tr><td><strong>${key}</strong></td><td>${value}</td></tr>`;
        }
        document.getElementById("product-specs").innerHTML = specsHtml;
    }

    // Reviews
    if (product.reviews) {
        const reviewsHtml = product.reviews
            .map(review => `
                <div class="review">
                    <div class="review-header">
                        <div class="review-author">${review.author}</div>
                        <div class="review-rating">${generateStarRating(review.rating)}</div>
                    </div>
                    <div style="color:var(--gray);font-size:14px;margin-bottom:10px;">${review.date}</div>
                    <p>${review.comment}</p>
                </div>
            `).join("");

        document.getElementById("product-reviews").innerHTML = reviewsHtml;
    }

    loadRelatedProducts(product.category, productId);

    showPage("product-detail");
}

/* -------------------------------
   RELATED PRODUCTS
--------------------------------*/

function loadRelatedProducts(category, currentProductId) {
    const container = document.getElementById('related-products');
    container.innerHTML = '';

    const related = productsData.products
        .filter(p => p.category === category && p.id !== currentProductId)
        .slice(0, 4);

    related.forEach(product => container.appendChild(createProductCard(product)));
}

/* -------------------------------
   FILTER + SORT (combined)
--------------------------------*/

function filterProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const category = document.getElementById('category-filter').value;
    const sortBy = document.getElementById('sort-by').value;
    const container = document.getElementById('all-products');

    container.innerHTML = '';

    let filtered = productsData.products.filter(product => {
        const matchSearch =
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm);

        const matchCategory = category === 'all' || product.category === category;

        return matchSearch && matchCategory;
    });

    // If nothing found → show message
    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                ITEM NOT FOUND
            </div>
        `;
        return;
    }

    // SORT RESULTS
    switch (sortBy) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'rating':
            filtered.sort((a, b) => b.rating - a.rating);
            break;
    }

    filtered.forEach(product =>
        container.appendChild(createProductCard(product))
    );
}

/* Event Listeners */
document.getElementById('search-input').addEventListener('input', filterProducts);
document.getElementById('category-filter').addEventListener('change', filterProducts);
document.getElementById('sort-by').addEventListener('change', filterProducts);

/* -------------------------------
   TAB SWITCHER
--------------------------------*/

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');

    // Fix: event.target undefined
    const clickedTab = event.currentTarget || event.target;
    clickedTab.classList.add('active');
}

/* -------------------------------
   PRODUCT IMAGE THUMBNAIL
--------------------------------*/

function changeProductImage(thumbnail, imageUrl) {
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    thumbnail.classList.add('active');
    document.getElementById('main-product-image').src = imageUrl;
}

/* -------------------------------
   QUANTITY SELECTOR
--------------------------------*/

function increaseQuantity() {
    const q = document.getElementById('quantity');
    q.value = parseInt(q.value) + 1;
}

function decreaseQuantity() {
    const q = document.getElementById('quantity');
    if (q.value > 1) q.value = parseInt(q.value) - 1;
}

function showWishlist() {
    showPage('wishlist-page'); 

    const container = document.getElementById("wishlist-items");
    container.innerHTML = "";

    if (wishlist.length === 0) {
        container.innerHTML = `<p class="empty-msg">Your wishlist is empty ❤️</p>`;
        return;
    }

    wishlist.forEach(id => {
        const product = productsData.products.find(p => p.id === id);

        container.innerHTML += `
            <div class="wishlist-item">
                <img src="${product.image}" class="wishlist-img">
                <div class="wishlist-info">
                    <h3>${product.name}</h3>
                    <button class="remove-btn" onclick="removeFromWishlist(${id})">
                        <i class="fas fa-trash"></i> Remove
                    </button>
                </div>
            </div>
        `;
    });
}

function showCart() {
    showPage('cart-page');

    const container = document.getElementById("cart-items");
    container.innerHTML = "";

    if (cart.length === 0) {
        container.innerHTML = `<p class="empty-msg">Your cart is empty 🛒</p>`;
        return;
    }

    cart.forEach(item => {
        const product = productsData.products.find(p => p.id === item.id);

        container.innerHTML += `
            <div class="cart-item">
                <img src="${product.image}" alt="">
                <div class="cart-info">
                    <h3>${product.name}</h3>
                    <p>Quantity: ${item.qty}</p>
                    <p>Total: $${(product.price * item.qty).toFixed(2)}</p>

                    <button class="remove-btn" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i> Remove
                    </button>
                </div>
            </div>
        `;
    });
}

function showCart() {
    showPage('cart-page');

    const container = document.getElementById("cart-items");
    container.innerHTML = "";

    if (cart.length === 0) {
        container.innerHTML = `<p class="empty-msg">Your cart is empty 🛒</p>`;
        return;
    }

    cart.forEach(item => {
        const product = productsData.products.find(p => p.id === item.id);

        container.innerHTML += `
            <div class="cart-item">
                <img src="${product.image}" class="cart-img">
                <div>
                    <h3>${product.name}</h3>
                    <p>Quantity: ${item.qty}</p>
                    <p>Total: $${(product.price * item.qty).toFixed(2)}</p>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i> Remove
                    </button>
                </div>
            </div>
        `;
    });
}


/* -------------------------------
   INIT
--------------------------------*/

document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedProducts();
    filterProducts();
});
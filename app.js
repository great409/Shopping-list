/**
 * ShopNest - Modern E-Commerce Platform Application Logic
 * Supports Home View, Detailed Product View, Cart Management, Wishlist,
 * Dynamic Search, Checkout with Direct & WhatsApp Order options.
 */

// Global State
const state = {
  products: [
    {
      id: "smartwatch-pro",
      name: "Smartwatch Pro",
      category: "wearables",
      categoryName: "Smart Wearables",
      price: 129.99,
      oldPrice: 159.99,
      discount: "19% OFF",
      rating: 4.7,
      reviews: "8k",
      badge: "Trending",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop"
      ],
      description: "Stay connected and stylish with our Smartwatch Pro. Track your fitness, receive notifications, and more with an ultra-responsive crystal AMOLED display and aerospace-grade casing.",
      features: [
        "Heart Rate & SpO2 Monitoring",
        "Up to 10-Day Ultra Battery Life",
        "5ATM Water & Dust Resistant",
        "Always-On Ultra HD AMOLED Display"
      ],
      specs: {
        "Display": "1.43-inch AMOLED, 466 x 466 px",
        "Battery": "420mAh, 10 days typical usage",
        "Water Resistance": "5ATM (up to 50 meters)",
        "Sensors": "Optical Heart Rate, Blood Oxygen, Accelerometer, Gyroscope",
        "Connectivity": "Bluetooth 5.3 BLE + GPS",
        "Compatibility": "iOS 12.0+ and Android 8.0+"
      }
    },
    {
      id: "wireless-earbuds",
      name: "Wireless Earbuds",
      category: "audio",
      categoryName: "Audio & Tech",
      price: 79.99,
      oldPrice: 99.99,
      discount: "20% OFF",
      rating: 4.8,
      reviews: "1.2k",
      badge: "Best Seller",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1590658002970-13f6ebec647f?w=800&auto=format&fit=crop"
      ],
      description: "Immerse yourself in crystal clear sound with Active Noise Cancellation, deep dynamic bass, and seamless Bluetooth 5.3 pairing. Comes in a pocket-sized wireless charging case.",
      features: [
        "Hybrid Active Noise Cancellation",
        "36 Hours Total Playback with Case",
        "IPX5 Sweat & Water Resistance",
        "Dual ENC Microphones for Studio Calls"
      ],
      specs: {
        "Driver": "11mm Dynamic Drivers",
        "Battery Life": "8h (earbuds) + 28h (charging case)",
        "Charging": "USB-C Fast Charge + Qi Wireless",
        "Weight": "4.2g per earbud"
      }
    },
    {
      id: "stylish-handbag",
      name: "Stylish Handbag",
      category: "fashion",
      categoryName: "Fashion & Bags",
      price: 89.99,
      oldPrice: 119.99,
      discount: "25% OFF",
      rating: 4.8,
      reviews: "6k",
      badge: "Popular",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&auto=format&fit=crop"
      ],
      description: "Crafted from premium vegan grain leather, this stylish handbag pairs everyday practicality with effortless elegance. Features multi-compartment organizers and gold-plated hardware.",
      features: [
        "Premium Sustainable Vegan Leather",
        "Spacious Multi-Compartment Interior",
        "Detachable Adjustable Shoulder Strap",
        "Scratch-Resistant Gold Accent Hardware"
      ],
      specs: {
        "Material": "Eco-friendly Textured PU Leather",
        "Dimensions": "32cm x 24cm x 13cm",
        "Closure": "Top Metal Zip with Magnetic Flap",
        "Pockets": "2 Main Compartments, 1 Inner Zip Pocket, 1 Phone Slot"
      }
    },
    {
      id: "classic-sneakers",
      name: "Classic Sneakers",
      category: "footwear",
      categoryName: "Footwear",
      price: 69.99,
      oldPrice: 89.99,
      discount: "22% OFF",
      rating: 4.7,
      reviews: "9k",
      badge: "Staff Pick",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop"
      ],
      description: "Crisp, timeless, and engineered for all-day comfort. Featuring cushioned memory foam insoles, breathable micro-perforated uppers, and durable rubber outsoles.",
      features: [
        "Memory Foam Responsive Insole",
        "Breathable Micro-Perforated Vegan Leather",
        "Anti-Slip Vulcanized Rubber Sole",
        "Reinforced Heel Support"
      ],
      specs: {
        "Upper": "Premium Synthetic Leather",
        "Outsole": "100% Non-marking Rubber",
        "Insole": "Ergonomic Memory Foam",
        "Sizes": "US 6 to 13 (Unisex)"
      }
    },
    {
      id: "noise-canceling-headphones",
      name: "Over-Ear Studio Headphones",
      category: "audio",
      categoryName: "Audio & Tech",
      price: 149.99,
      oldPrice: 199.99,
      discount: "25% OFF",
      rating: 4.9,
      reviews: "3.4k",
      badge: "Hi-Res Audio",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop"
      ],
      description: "Studio-grade acoustics with plush memory foam earcups for unmatched comfort during extended listening sessions.",
      features: [
        "40mm High-Resolution Neodymium Drivers",
        "40 Hours Continuous Battery Life",
        "Plush Protein Leather Ear Cushions",
        "Foldable Travel Design with Hard Case"
      ],
      specs: {
        "Frequency Response": "10Hz - 40,000Hz",
        "Battery": "40h ANC on, 55h ANC off",
        "Connection": "Bluetooth 5.2 / 3.5mm Aux",
        "Weight": "240g"
      }
    },
    {
      id: "minimalist-leather-wallet",
      name: "Minimalist RFID Wallet",
      category: "fashion",
      categoryName: "Fashion & Bags",
      price: 34.99,
      oldPrice: 49.99,
      discount: "30% OFF",
      rating: 4.8,
      reviews: "4.1k",
      badge: "RFID Safe",
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1606503803273-5f80b2d6a782?w=800&auto=format&fit=crop"
      ],
      description: "Ultra-slim front-pocket bifold wallet with certified RFID blocking technology to safeguard your cards and identity.",
      features: [
        "Certified RFID Blocking Mesh",
        "Holds up to 10 Cards + Cash Billfold",
        "Full Grain Top Leather",
        "Quick-Draw Thumb Notch"
      ],
      specs: {
        "Material": "Top Grain Genuine Leather",
        "Thickness": "0.4 inches ultra slim",
        "Capacity": "10 cards + banknotes"
      }
    }
  ],

  // Cart items: initialized from localStorage or defaulted with 2 items to match mockup
  cart: JSON.parse(localStorage.getItem("shopnest_cart")) || [
    { id: "wireless-earbuds", quantity: 1 },
    { id: "stylish-handbag", quantity: 1 }
  ],

  // Wishlist: array of product IDs
  wishlist: JSON.parse(localStorage.getItem("shopnest_wishlist")) || ["smartwatch-pro"],

  // Active filter category
  currentCategory: "all",

  // Currently viewed product in details modal/page
  activeProduct: null,
  activeDetailQty: 1,

  // Currency
  currencySymbol: "$",
  currencyRate: 1, // 1 for USD

  // WhatsApp store owner contact
  whatsappNumber: "2349045071692"
};

// ==========================================================================
// Initialization
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderTrendingPicks();
  updateCartCounters();
  updateWishlistCounters();
  setupEventListeners();

  // If URL has a hash like #cart or #product-id, route to it
  handleUrlRouting();
  window.addEventListener("hashchange", handleUrlRouting);
});

// ==========================================================================
// Product Rendering
// ==========================================================================
function renderTrendingPicks() {
  const container = document.getElementById("trendingGrid");
  if (!container) return;

  const filtered = state.products.filter(p => {
    if (state.currentCategory === "all") return true;
    return p.category === state.currentCategory;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
        <p>No products found in this category.</p>
      </div>`;
    return;
  }

  container.innerHTML = filtered.map(p => {
    const isWishlisted = state.wishlist.includes(p.id);
    return `
      <div class="product-card" data-id="${p.id}">
        <div class="card-img-wrap" onclick="viewProductDetail('${p.id}')">
          ${p.badge ? `<span class="card-badge">${p.badge}</span>` : ""}
          <button class="wishlist-btn ${isWishlisted ? "active" : ""}" 
                  onclick="toggleWishlist(event, '${p.id}')" 
                  aria-label="Save to wishlist" 
                  title="${isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}">
            <svg viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
            </svg>
          </button>
          <img src="${p.image}" alt="${p.name}" class="card-img" loading="lazy" />
        </div>
        <div class="card-body">
          <h3 class="product-title" onclick="viewProductDetail('${p.id}')">${p.name}</h3>
          <div class="card-price-row">
            <span class="price-current">$${p.price.toFixed(2)}</span>
            ${p.oldPrice ? `<span class="price-old">$${p.oldPrice.toFixed(2)}</span>` : ""}
          </div>
          <div class="product-rating">
            <span class="star">★</span>
            <span class="rating-score">${p.rating}</span>
            <span>(${p.reviews})</span>
          </div>
          <button class="btn-card-cart" onclick="addToCart('${p.id}', 1)">
            Add to Cart
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// Category Filtering
function filterCategory(cat, btn) {
  state.currentCategory = cat;
  document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  renderTrendingPicks();
}

// ==========================================================================
// Views & Navigation Switching (Home, Product Details, Cart)
// ==========================================================================
function showView(viewName) {
  const homeView = document.getElementById("homeView");
  const detailView = document.getElementById("productDetailView");
  const cartView = document.getElementById("cartPageView");

  // Deactivate all
  if (homeView) homeView.style.display = "none";
  if (detailView) detailView.classList.remove("active");
  if (cartView) cartView.classList.remove("active");

  // Update nav active link
  document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));

  if (viewName === "home") {
    if (homeView) homeView.style.display = "block";
    const homeLink = document.getElementById("navLinkHome");
    if (homeLink) homeLink.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (viewName === "detail") {
    if (detailView) detailView.classList.add("active");
    const shopLink = document.getElementById("navLinkShop");
    if (shopLink) shopLink.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (viewName === "cart") {
    if (cartView) cartView.classList.add("active");
    renderCartPage();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function handleUrlRouting() {
  const hash = window.location.hash;
  if (hash === "#cart") {
    showView("cart");
  } else if (hash.startsWith("#product-")) {
    const prodId = hash.replace("#product-", "");
    viewProductDetail(prodId, false);
  } else {
    showView("home");
  }
}

// ==========================================================================
// Product Detail View (Screen 2 Mockup)
// ==========================================================================
function viewProductDetail(productId, updateHash = true) {
  const product = state.products.find(p => p.id === productId) || state.products[0];
  state.activeProduct = product;
  state.activeDetailQty = 1;

  if (updateHash) {
    window.location.hash = `product-${product.id}`;
  }

  // Populate Breadcrumb
  document.getElementById("detailBreadcrumbName").textContent = product.name;

  // Populate Gallery
  const thumbsContainer = document.getElementById("detailThumbs");
  const mainImage = document.getElementById("detailMainImg");

  thumbsContainer.innerHTML = product.gallery.map((imgUrl, idx) => `
    <div class="thumb-item ${idx === 0 ? "active" : ""}" onclick="changeMainImage('${imgUrl}', this)">
      <img src="${imgUrl}" alt="${product.name} angle ${idx + 1}" />
    </div>
  `).join("");

  mainImage.src = product.gallery[0];
  mainImage.alt = product.name;

  // Populate Details
  document.getElementById("detailTitle").textContent = product.name;
  document.getElementById("detailRatingScore").textContent = product.rating;
  document.getElementById("detailReviewsCount").textContent = `(${product.reviews} reviews)`;
  document.getElementById("detailPrice").textContent = `$${product.price.toFixed(2)}`;
  
  const oldPriceEl = document.getElementById("detailOldPrice");
  const discountEl = document.getElementById("detailDiscount");
  if (product.oldPrice) {
    oldPriceEl.textContent = `$${product.oldPrice.toFixed(2)}`;
    oldPriceEl.style.display = "inline";
  } else {
    oldPriceEl.style.display = "none";
  }
  
  if (product.discount) {
    discountEl.textContent = product.discount;
    discountEl.style.display = "inline-block";
  } else {
    discountEl.style.display = "none";
  }

  document.getElementById("detailDesc").textContent = product.description;

  // Populate Features Checklist
  const featuresList = document.getElementById("detailFeatures");
  featuresList.innerHTML = product.features.map(feat => `
    <li>
      <span class="check-icon">✓</span>
      ${feat}
    </li>
  `).join("");

  // Quantity reset
  document.getElementById("detailQtyNum").textContent = "1";

  // Wishlist button state
  const isWishlisted = state.wishlist.includes(product.id);
  const wishlistBtn = document.getElementById("btnDetailWishlist");
  if (wishlistBtn) {
    wishlistBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? 'var(--accent-red)' : 'none'}" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
      </svg>
      ${isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
    `;
  }

  // Populate Specs Table
  const specsTable = document.getElementById("detailSpecsTable");
  if (specsTable) {
    specsTable.innerHTML = Object.entries(product.specs).map(([k, v]) => `
      <tr>
        <td>${k}</td>
        <td>${v}</td>
      </tr>
    `).join("");
  }

  // Switch View
  showView("detail");
}

function changeMainImage(imgUrl, thumbEl) {
  const mainImage = document.getElementById("detailMainImg");
  if (mainImage) {
    mainImage.style.opacity = "0.4";
    setTimeout(() => {
      mainImage.src = imgUrl;
      mainImage.style.opacity = "1";
    }, 150);
  }
  document.querySelectorAll(".thumb-item").forEach(t => t.classList.remove("active"));
  if (thumbEl) thumbEl.classList.add("active");
}

function stepDetailQty(delta) {
  state.activeDetailQty = Math.max(1, state.activeDetailQty + delta);
  document.getElementById("detailQtyNum").textContent = state.activeDetailQty;
}

function addDetailToCart() {
  if (!state.activeProduct) return;
  addToCart(state.activeProduct.id, state.activeDetailQty);
}

function toggleDetailWishlist() {
  if (!state.activeProduct) return;
  toggleWishlist(null, state.activeProduct.id);
  // refresh button
  viewProductDetail(state.activeProduct.id, false);
}

// Product Tab Switcher
function switchDetailTab(tabKey, btn) {
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));

  if (btn) btn.classList.add("active");
  const targetPane = document.getElementById(`tab-${tabKey}`);
  if (targetPane) targetPane.classList.add("active");
}

// ==========================================================================
// Cart Management (Screen 3 Mockup)
// ==========================================================================
function addToCart(productId, qty = 1) {
  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += qty;
  } else {
    state.cart.push({ id: productId, quantity: qty });
  }

  saveCart();
  updateCartCounters();

  const prod = state.products.find(p => p.id === productId);
  showToast(`Added ${qty}x ${prod ? prod.name : 'item'} to your cart!`);

  // If currently on cart page, re-render
  if (document.getElementById("cartPageView").classList.contains("active")) {
    renderCartPage();
  }
}

function updateCartQuantity(productId, delta) {
  const itemIndex = state.cart.findIndex(i => i.id === productId);
  if (itemIndex > -1) {
    state.cart[itemIndex].quantity += delta;
    if (state.cart[itemIndex].quantity <= 0) {
      state.cart.splice(itemIndex, 1);
    }
  }
  saveCart();
  updateCartCounters();
  renderCartPage();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  saveCart();
  updateCartCounters();
  renderCartPage();
  showToast("Item removed from cart");
}

function saveCart() {
  localStorage.setItem("shopnest_cart", JSON.stringify(state.cart));
}

function updateCartCounters() {
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll(".cart-count-badge").forEach(el => {
    el.textContent = totalItems;
  });
}

function calculateCartTotals() {
  let subtotal = 0;
  state.cart.forEach(cartItem => {
    const product = state.products.find(p => p.id === cartItem.id);
    if (product) {
      subtotal += product.price * cartItem.quantity;
    }
  });

  // Free shipping on orders over $50
  const shipping = subtotal >= 50 || subtotal === 0 ? 0.00 : 9.99;
  const total = subtotal + shipping;

  return { subtotal, shipping, total };
}

function renderCartPage() {
  const container = document.getElementById("cartItemsList");
  const cartTitle = document.getElementById("cartHeaderTitle");
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  if (cartTitle) {
    cartTitle.textContent = `Your Cart (${totalItems})`;
  }

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <div class="empty-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
        </div>
        <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin-bottom: 8px;">Your cart is empty</h3>
        <p style="color: var(--text-muted); margin-bottom: 20px;">Explore our catalog and find something amazing today.</p>
        <button class="btn-primary" onclick="window.location.hash = ''; showView('home')">
          Start Shopping
        </button>
      </div>
    `;
    updateSummaryPrices(0, 0, 0);
    return;
  }

  container.innerHTML = state.cart.map(item => {
    const product = state.products.find(p => p.id === item.id);
    if (!product) return "";
    const itemTotal = (product.price * item.quantity).toFixed(2);

    return `
      <div class="cart-item-row">
        <div class="cart-item-info">
          <div class="cart-item-thumb" onclick="viewProductDetail('${product.id}')" style="cursor: pointer;">
            <img src="${product.image}" alt="${product.name}" />
          </div>
          <div>
            <h4 class="cart-item-name" onclick="viewProductDetail('${product.id}')" style="cursor: pointer;">${product.name}</h4>
            <div class="cart-item-unit-price">$${product.price.toFixed(2)} each</div>
          </div>
        </div>
        <div class="cart-item-controls">
          <div class="qty-counter">
            <button class="qty-btn" onclick="updateCartQuantity('${product.id}', -1)" aria-label="Decrease quantity">−</button>
            <span class="qty-number">${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartQuantity('${product.id}', 1)" aria-label="Increase quantity">+</button>
          </div>
          <div class="cart-item-price">$${itemTotal}</div>
          <button class="btn-remove-item" onclick="removeFromCart('${product.id}')" title="Remove item" aria-label="Remove item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </button>
        </div>
      </div>
    `;
  }).join("");

  const { subtotal, shipping, total } = calculateCartTotals();
  updateSummaryPrices(subtotal, shipping, total);
}

function updateSummaryPrices(subtotal, shipping, total) {
  const subtotalEl = document.getElementById("summarySubtotal");
  const shippingEl = document.getElementById("summaryShipping");
  const totalEl = document.getElementById("summaryTotal");

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (shippingEl) shippingEl.textContent = shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
}

// ==========================================================================
// Wishlist Management
// ==========================================================================
function toggleWishlist(e, productId) {
  if (e) e.stopPropagation();
  const index = state.wishlist.indexOf(productId);
  if (index > -1) {
    state.wishlist.splice(index, 1);
    showToast("Removed from wishlist");
  } else {
    state.wishlist.push(productId);
    showToast("Added to wishlist ❤️");
  }

  localStorage.setItem("shopnest_wishlist", JSON.stringify(state.wishlist));
  updateWishlistCounters();
  renderTrendingPicks();
}

function updateWishlistCounters() {
  document.querySelectorAll(".wishlist-count-badge").forEach(el => {
    el.textContent = state.wishlist.length;
  });
}

function openWishlistModal() {
  const modal = document.getElementById("wishlistModal");
  const list = document.getElementById("wishlistItemsList");
  if (!modal || !list) return;

  if (state.wishlist.length === 0) {
    list.innerHTML = `
      <div style="text-align: center; padding: 30px; color: var(--text-muted);">
        <p>Your wishlist is currently empty.</p>
      </div>`;
  } else {
    list.innerHTML = state.wishlist.map(id => {
      const prod = state.products.find(p => p.id === id);
      if (!prod) return "";
      return `
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid var(--border-light);">
          <div style="display: flex; align-items: center; gap: 12px;">
            <img src="${prod.image}" style="width: 50px; height: 50px; object-fit: contain; border-radius: var(--radius-sm); background: var(--bg-muted);" />
            <div>
              <h5 style="font-size: 0.92rem; font-weight: 700; color: var(--text-main); margin-bottom: 2px;">${prod.name}</h5>
              <span style="font-size: 0.88rem; font-weight: 700; color: var(--primary);">$${prod.price.toFixed(2)}</span>
            </div>
          </div>
          <div style="display: flex; gap: 8px;">
            <button class="btn-card-cart" style="padding: 6px 12px; font-size: 0.8rem;" onclick="addToCart('${prod.id}', 1); closeModal('wishlistModal');">
              Add to Cart
            </button>
            <button class="btn-remove-item" onclick="toggleWishlist(null, '${prod.id}'); openWishlistModal();">✕</button>
          </div>
        </div>
      `;
    }).join("");
  }

  modal.classList.add("active");
}

// ==========================================================================
// Checkout Modal & WhatsApp Ordering
// ==========================================================================
let activePaymentType = "online";

function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast("Your cart is empty!");
    return;
  }
  const modal = document.getElementById("checkoutModal");
  if (!modal) return;

  const { total } = calculateCartTotals();
  document.getElementById("checkoutTotalDisplay").textContent = `$${total.toFixed(2)}`;

  modal.classList.add("active");
}

function selectPaymentType(type, cardEl) {
  activePaymentType = type;
  document.querySelectorAll(".payment-option-card").forEach(c => c.classList.remove("active"));
  if (cardEl) cardEl.classList.add("active");

  const onlineBox = document.getElementById("onlinePayForm");
  const whatsappBox = document.getElementById("whatsappPayBox");

  if (type === "whatsapp") {
    if (onlineBox) onlineBox.style.display = "none";
    if (whatsappBox) whatsappBox.style.display = "block";
  } else {
    if (onlineBox) onlineBox.style.display = "block";
    if (whatsappBox) whatsappBox.style.display = "none";
  }
}

function submitCheckout() {
  const name = document.getElementById("custName").value.trim() || "Valued Customer";
  const address = document.getElementById("custAddress").value.trim() || "Standard Delivery Address";
  const phone = document.getElementById("custPhone").value.trim() || "N/A";
  const { subtotal, shipping, total } = calculateCartTotals();

  if (activePaymentType === "whatsapp") {
    // Generate WhatsApp direct order text
    let orderList = "";
    state.cart.forEach(item => {
      const prod = state.products.find(p => p.id === item.id);
      if (prod) {
        orderList += `• ${item.quantity}x ${prod.name} - $${(prod.price * item.quantity).toFixed(2)}%0A`;
      }
    });

    const msg = `🛍️ *NEW ORDER - ShopNest*%0A%0A` +
      `*Customer Information:*%0A` +
      `Name: ${encodeURIComponent(name)}%0A` +
      `Address: ${encodeURIComponent(address)}%0A` +
      `Phone: ${encodeURIComponent(phone)}%0A%0A` +
      `*Order Items:*%0A${orderList}%0A` +
      `Subtotal: $${subtotal.toFixed(2)}%0A` +
      `Shipping: ${shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}%0A` +
      `*Total Amount: $${total.toFixed(2)}*%0A%0A` +
      `Please confirm my order and send payment/delivery details.`;

    window.open(`https://wa.me/${state.whatsappNumber}?text=${msg}`, "_blank");

    closeModal("checkoutModal");
    state.cart = [];
    saveCart();
    updateCartCounters();
    renderCartPage();
    showToast("Order prepared! WhatsApp chat opened.");
  } else {
    // Online checkout simulation
    closeModal("checkoutModal");
    state.cart = [];
    saveCart();
    updateCartCounters();
    renderCartPage();

    const orderId = "SN-" + Math.floor(100000 + Math.random() * 900000);
    alert(`🎉 Thank you, ${name}!\nYour order #${orderId} for $${total.toFixed(2)} has been placed successfully.\nA confirmation has been sent to your email!`);
    window.location.hash = "";
    showView("home");
  }
}

// ==========================================================================
// Instant Search
// ==========================================================================
function openSearchModal() {
  const modal = document.getElementById("searchModal");
  if (modal) {
    modal.classList.add("active");
    const input = document.getElementById("searchInput");
    if (input) {
      input.value = "";
      input.focus();
      handleSearchInput("");
    }
  }
}

function handleSearchInput(query) {
  const clean = query.trim().toLowerCase();
  const resultsContainer = document.getElementById("searchResults");
  if (!resultsContainer) return;

  const matches = state.products.filter(p => 
    p.name.toLowerCase().includes(clean) || 
    p.categoryName.toLowerCase().includes(clean) ||
    p.description.toLowerCase().includes(clean)
  );

  if (matches.length === 0) {
    resultsContainer.innerHTML = `
      <div style="padding: 24px; text-align: center; color: var(--text-muted);">
        No matching products found for "${query}".
      </div>`;
    return;
  }

  resultsContainer.innerHTML = matches.map(p => `
    <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px 14px; border-bottom: 1px solid var(--border-light); cursor: pointer; border-radius: var(--radius-md);" 
         onclick="closeModal('searchModal'); viewProductDetail('${p.id}');">
      <div style="display: flex; align-items: center; gap: 14px;">
        <img src="${p.image}" style="width: 50px; height: 50px; object-fit: contain; background: var(--bg-muted); border-radius: var(--radius-sm);" />
        <div>
          <div style="font-weight: 700; color: var(--text-main);">${p.name}</div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">${p.categoryName} • ⭐ ${p.rating}</div>
        </div>
      </div>
      <div style="font-weight: 800; color: var(--primary);">$${p.price.toFixed(2)}</div>
    </div>
  `).join("");
}

// ==========================================================================
// Newsletter Subscription
// ==========================================================================
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const input = document.getElementById("newsletterEmail");
  if (!input) return;
  const email = input.value.trim();

  if (!email || !email.includes("@")) {
    alert("Please enter a valid email address.");
    return;
  }

  input.value = "";
  showToast("🎉 Success! Your 20% OFF coupon code is: WELCOME20");
}

// ==========================================================================
// Modals & Toast Helpers
// ==========================================================================
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove("active");
}

function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast toast-success";
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Global modal background click closer
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-overlay")) {
    e.target.classList.remove("active");
  }
});

function setupEventListeners() {
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", handleNewsletterSubmit);
  }
}

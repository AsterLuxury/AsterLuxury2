/* ===================================
   ASTER LUXURY - Premium Interactions
   =================================== */

// Product Data — using elegant reference codes (no mismatched names/descriptions)
const products = [
    { id: 1,  ref: "AL-001", image: "https://i.imgur.com/OErot48.jpg", category: "trending", tags: ["trending", "namaya"], price: "11,000 IQD" },
    { id: 2,  ref: "AL-002", image: "https://i.imgur.com/z00Aaai.jpg", category: "trending", tags: ["trending"], price: "8,000 IQD" },
    { id: 3,  ref: "AL-003", image: "https://i.imgur.com/JjaaugF.jpg", category: "new", tags: ["new"], price: "10,000 IQD" },
    { id: 4,  ref: "AL-004", image: "https://i.imgur.com/Kte7nzq.jpg", category: "exclusive", tags: ["exclusive"], price: "10,000 IQD" },
    { id: 5,  ref: "AL-005", image: "https://i.imgur.com/PRowWfH.jpg", category: "new", tags: ["new"], price: "10,000 IQD" },
    { id: 6,  ref: "AL-006", image: "https://i.imgur.com/SoydXG2.jpg", category: "new", tags: ["new", "namaya"], price: "9,000 IQD" },
    { id: 7,  ref: "AL-007", image: "https://i.imgur.com/TlQPNKR.jpg", category: "trending", tags: ["trending"], price: "9,000 IQD" },
    { id: 8,  ref: "AL-008", image: "https://i.imgur.com/RrOwOVh.jpg", category: "limited", tags: ["limited"], price: "8,000 IQD" },
    { id: 9,  ref: "AL-009", image: "https://i.imgur.com/Eg3uzN3.jpg", category: "exclusive", tags: ["exclusive"], price: "8,000 IQD" },
    { id: 10, ref: "AL-010", image: "https://i.imgur.com/f5zWQHf.jpg", category: "trending", tags: ["trending"], price: "9,000 IQD" },
    { id: 11, ref: "AL-011", image: "https://i.imgur.com/fxUaMQ4.jpg", category: "new", tags: ["new"], price: "9,000 IQD" },
    { id: 12, ref: "AL-012", image: "https://i.imgur.com/LTpzHsW.jpg", category: "exclusive", tags: ["exclusive"], price: "11,000 IQD" },
    { id: 13, ref: "AL-013", image: "https://i.imgur.com/mXV7gBZ.jpg", category: "new", tags: ["new"], price: "9,000 IQD" },
    { id: 14, ref: "AL-014", image: "https://i.imgur.com/A3LfT29.jpg", category: "limited", tags: ["limited"], price: "10,000 IQD" },
    { id: 15, ref: "AL-015", image: "https://i.imgur.com/m0g8dYS.jpg", category: "trending", tags: ["trending", "namaya"], price: "12,000 IQD" },
    { id: 16, ref: "AL-016", image: "https://i.imgur.com/RHdbyM9.jpg", category: "new", tags: ["new"], price: "9,000 IQD" },
    { id: 17, ref: "AL-017", image: "https://i.imgur.com/Szffcti.jpg", category: "new", tags: ["new"], price: "9,000 IQD" },
    { id: 18, ref: "AL-018", image: "https://i.imgur.com/hDa2JGY.jpg", category: "trending", tags: ["trending"], price: "10,000 IQD" },
    { id: 19, ref: "AL-019", image: "https://i.imgur.com/kPNgeOX.jpg", category: "exclusive", tags: ["exclusive"], price: "9,000 IQD" },
    { id: 20, ref: "AL-020", image: "https://i.imgur.com/UyzPCFl.jpg", category: "trending", tags: ["trending", "namaya"], price: "10,000 IQD" },
    { id: 21, ref: "AL-021", image: "https://i.imgur.com/17uGewM.jpg", category: "new", tags: ["new"], price: "8,000 IQD" },
    { id: 22, ref: "AL-022", image: "https://i.imgur.com/UrHw9dD.jpg", category: "exclusive", tags: ["exclusive"], price: "8,000 IQD" },
    { id: 23, ref: "AL-023", image: "https://i.imgur.com/zXIfG8s.jpg", category: "new", tags: ["new"], price: "8,000 IQD" },
    { id: 24, ref: "AL-024", image: "https://i.imgur.com/6k1vRsV.jpg", category: "limited", tags: ["limited"], price: "9,000 IQD" },
    { id: 25, ref: "AL-025", image: "https://i.imgur.com/PV0i4eB.jpg", category: "trending", tags: ["trending"], price: "9,000 IQD" },
    { id: 26, ref: "AL-026", image: "https://i.imgur.com/FXHd5nO.jpg", category: "exclusive", tags: ["exclusive"], price: "9,000 IQD" },
    { id: 27, ref: "AL-027", image: "https://i.imgur.com/ZdkqaU9.jpg", category: "new", tags: ["new"], price: "8,000 IQD" },
    { id: 28, ref: "AL-028", image: "https://i.imgur.com/Av9tP4X.jpg", category: "trending", tags: ["trending", "namaya"], price: "11,000 IQD" },
    { id: 29, ref: "AL-029", image: "https://i.imgur.com/0puuuwV.jpg", category: "limited", tags: ["limited"], price: "9,000 IQD" },
    { id: 30, ref: "AL-030", image: "https://i.imgur.com/QhhGmoY.jpg", category: "exclusive", tags: ["exclusive"], price: "8,500 IQD" },
    { id: 31, ref: "AL-031", image: "https://i.imgur.com/s3iVoL3.jpg", category: "exclusive", tags: ["exclusive", "namaya"], price: "10,000 IQD" },
    { id: 32, ref: "AL-032", image: "https://i.imgur.com/ruRRtpN.jpg", category: "new", tags: ["new"], price: "9,000 IQD" },
    { id: 33, ref: "AL-033", image: "https://i.imgur.com/4DhDOLu.jpg", category: "trending", tags: ["trending"], price: "8,000 IQD" },
    { id: 34, ref: "AL-034", image: "https://i.imgur.com/NK4CVZ3.jpg", category: "exclusive", tags: ["exclusive"], price: "8,000 IQD" },
    { id: 35, ref: "AL-035", image: "https://i.imgur.com/nxvRYVN.jpg", category: "new", tags: ["new"], price: "8,000 IQD" },
    { id: 36, ref: "AL-036", image: "https://i.imgur.com/qSaBKBn.jpg", category: "new", tags: ["new"], price: "9,000 IQD" },
    { id: 37, ref: "AL-037", image: "https://i.imgur.com/QEZ3xNx.jpg", category: "trending", tags: ["trending"], price: "9,000 IQD" },
    { id: 38, ref: "AL-038", image: "https://i.imgur.com/NotI5dR.jpg", category: "new", tags: ["new"], price: "9,000 IQD" },
    { id: 39, ref: "AL-039", image: "https://i.imgur.com/y4S1ViE.jpg", category: "limited", tags: ["limited"], price: "8,000 IQD" },
    { id: 40, ref: "AL-040", image: "https://i.imgur.com/8j4QokS.jpg", category: "trending", tags: ["trending"], price: "9,000 IQD" },
    { id: 41, ref: "AL-041", image: "https://i.imgur.com/pHJk2Xe.jpg", category: "new", tags: ["new", "namaya"], price: "10,000 IQD" },
    { id: 42, ref: "AL-042", image: "https://i.imgur.com/iFkcaIE.jpg", category: "exclusive", tags: ["exclusive"], price: "9,000 IQD" },
    { id: 43, ref: "AL-043", image: "https://i.imgur.com/OrhpKkD.jpg", category: "trending", tags: ["trending"], price: "8,000 IQD" },
    { id: 44, ref: "AL-044", image: "https://i.imgur.com/MKITY3l.jpg", category: "exclusive", tags: ["exclusive"], price: "10,000 IQD" },
    { id: 45, ref: "AL-045", image: "https://i.imgur.com/yZ6MkCb.jpg", category: "limited", tags: ["limited"], price: "9,000 IQD" },
    { id: 46, ref: "AL-046", image: "https://i.imgur.com/TaEqJ6k.jpg", category: "new", tags: ["new"], price: "9,000 IQD" },
    { id: 47, ref: "AL-047", image: "https://i.imgur.com/zm6HOdR.jpg", category: "trending", tags: ["trending"], price: "8,000 IQD" },
    { id: 48, ref: "AL-048", image: "https://i.imgur.com/Jo0v8yf.jpg", category: "new", tags: ["new"], price: "8,000 IQD" },
    { id: 49, ref: "AL-049", image: "https://i.imgur.com/A2dYFIx.jpg", category: "exclusive", tags: ["exclusive"], price: "9,000 IQD" },
    { id: 50, ref: "AL-050", image: "https://i.imgur.com/4jGltwy.jpg", category: "trending", tags: ["trending"], price: "8,000 IQD" },
    { id: 52, ref: "AL-052", image: "https://i.imgur.com/MBZbuLs.jpg", category: "new", tags: ["new"], price: "11,000 IQD" },
    { id: 53, ref: "AL-053", image: "https://i.imgur.com/Jt5Je1s.jpg", category: "new", tags: ["new"], price: "10,000 IQD" },
    { id: 54, ref: "AL-054", image: "https://i.imgur.com/Gc8080H.jpg", category: "trending", tags: ["trending"], price: "10,000 IQD" },
    { id: 55, ref: "AL-055", image: "https://i.imgur.com/motIsvg.jpg", category: "exclusive", tags: ["exclusive"], price: "9,000 IQD" },
    { id: 56, ref: "AL-056", image: "https://i.imgur.com/uncBlEB.jpeg", category: "exclusive", tags: ["exclusive"], price: "9,000 IQD" }
];

const WHATSAPP_NUMBER = "9647503307830";
const INITIAL_LOAD = 12;
const LOAD_INCREMENT = 12;

let currentFilter = 'all';
let displayedCount = INITIAL_LOAD;
let currentProduct = null;
let favorites = JSON.parse(localStorage.getItem('aster_favorites') || '[]');

// ===================================
// HELPERS
// ===================================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function getBadgeText(product) {
    if (product.tags.includes('limited')) return 'Limited';
    if (product.tags.includes('exclusive')) return 'Exclusive';
    if (product.tags.includes('new')) return 'New';
    if (product.tags.includes('trending')) return 'Trending';
    return 'Featured';
}

function isBadgeGold(product) {
    return product.tags.includes('limited') || product.tags.includes('exclusive');
}

function getFiltered() {
    if (currentFilter === 'all') return products;
    return products.filter(p => p.tags.includes(currentFilter));
}

// ===================================
// LOADER
// ===================================
window.addEventListener('load', () => {
    setTimeout(() => {
        $('#loader').classList.add('hidden');
    }, 800);
});

// ===================================
// HEADER SCROLL
// ===================================
const header = $('#header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===================================
// MOBILE MENU
// ===================================
const menuToggle = $('#menu-toggle');
const mobileMenu = $('#mobile-menu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

$$('.mobile-menu a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    });
});

// ===================================
// HERO PARTICLES
// ===================================
function createParticles() {
    const container = $('#particles');
    if (!container) return;
    const count = window.innerWidth < 768 ? 15 : 30;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 4 + 1;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (Math.random() * 15 + 10) + 's';
        p.style.animationDelay = Math.random() * 15 + 's';
        container.appendChild(p);
    }
}
createParticles();

// ===================================
// PRODUCT RENDERING
// ===================================
function renderProducts() {
    const grid = $('#product-grid');
    const filtered = getFiltered();
    const toShow = filtered.slice(0, displayedCount);

    grid.innerHTML = '';

    toShow.forEach((product, index) => {
        const isFav = favorites.includes(product.id);
        const badgeText = getBadgeText(product);
        const badgeClass = isBadgeGold(product) ? 'gold' : '';

        const card = document.createElement('article');
        card.className = 'product-card';
        card.style.transitionDelay = (index % 12) * 50 + 'ms';
        card.innerHTML = `
            <div class="product-image" data-id="${product.id}">
                <span class="product-badge ${badgeClass}">${badgeText}</span>
                <button class="product-fav ${isFav ? 'active' : ''}" data-id="${product.id}" aria-label="Favorite">
                    <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
                </button>
                <img src="${product.image}" alt="Aster Luxury ${product.ref}" loading="lazy">
                <span class="product-quick-view" data-id="${product.id}">Quick View</span>
            </div>
            <div class="product-info">
                <span class="product-ref">Ref. ${product.ref}</span>
                <h3 class="product-title" data-id="${product.id}">Aster Piece</h3>
                <div class="product-price">${product.price}</div>
                <div class="product-actions">
                    <button class="details-btn" data-id="${product.id}">
                        <i class="fas fa-eye"></i>
                        <span>View Details</span>
                    </button>
                    <button class="whatsapp-btn" data-order-id="${product.id}">
                        <i class="fab fa-whatsapp"></i>
                        <span>Order via WhatsApp</span>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    // Trigger reveal animation
    requestAnimationFrame(() => {
        $$('.product-card').forEach((card, i) => {
            setTimeout(() => card.classList.add('visible'), i * 30);
        });
    });

    // Update load more button
    const loadMoreWrapper = $('.load-more-wrapper');
    if (filtered.length <= displayedCount) {
        loadMoreWrapper.classList.add('hidden');
    } else {
        loadMoreWrapper.classList.remove('hidden');
    }

    attachProductHandlers();
}

function attachProductHandlers() {
    // Open modal
    $$('.product-image[data-id], .product-title[data-id], .product-quick-view[data-id], .details-btn[data-id]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.stopPropagation();
            openModal(parseInt(el.dataset.id));
        });
    });

    // Quick order
    $$('.whatsapp-btn[data-order-id]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            quickOrder(parseInt(btn.dataset.orderId));
        });
    });

    // Favorite
    $$('.product-fav[data-id]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(parseInt(btn.dataset.id));
        });
    });
}

// ===================================
// FILTERS
// ===================================
$$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        $$('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        displayedCount = INITIAL_LOAD;
        renderProducts();
    });
});

// Quick filter from footer
$$('[data-quick-filter]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = link.dataset.quickFilter;
        const btn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
        if (btn) btn.click();
        document.getElementById('collections').scrollIntoView({ behavior: 'smooth' });
    });
});

// ===================================
// LOAD MORE
// ===================================
$('#load-more').addEventListener('click', () => {
    displayedCount += LOAD_INCREMENT;
    renderProducts();
});

// ===================================
// MODAL
// ===================================
const modal = $('#product-modal');

function openModal(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    currentProduct = product;

    $('#modal-image').src = product.image;
    $('#modal-image').alt = `Aster Luxury ${product.ref}`;
    $('#modal-ref').textContent = `Reference ${product.ref}`;
    $('#modal-title').textContent = `Aster Piece`;
    $('#modal-price').textContent = product.price;
    $('#modal-badge').textContent = getBadgeText(product);
    $('#qty-input').value = 1;

    // Update favorite button state
    const favBtn = $('#modal-favorite');
    const isFav = favorites.includes(product.id);
    favBtn.innerHTML = isFav
        ? '<i class="fas fa-heart"></i><span>Added to Favorites</span>'
        : '<i class="far fa-heart"></i><span>Add to Favorites</span>';

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    currentProduct = null;
}

$('#modal-close').addEventListener('click', closeModal);
$('.modal-backdrop').addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
    }
});

// Quantity
$('#qty-decrease').addEventListener('click', () => {
    const input = $('#qty-input');
    const val = parseInt(input.value);
    if (val > 1) input.value = val - 1;
});

$('#qty-increase').addEventListener('click', () => {
    const input = $('#qty-input');
    const val = parseInt(input.value);
    if (val < 10) input.value = val + 1;
});

// Modal Order
$('#modal-order').addEventListener('click', () => {
    if (!currentProduct) return;
    const qty = $('#qty-input').value;
    const message = `Hello Aster Luxury,\n\nI am interested in:\n\nReference: ${currentProduct.ref}\nPrice: ${currentProduct.price}\nQuantity: ${qty}\n\nPlease share more details. Thank you!`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
});

// Modal Favorite
$('#modal-favorite').addEventListener('click', () => {
    if (!currentProduct) return;
    toggleFavorite(currentProduct.id);
    const isFav = favorites.includes(currentProduct.id);
    $('#modal-favorite').innerHTML = isFav
        ? '<i class="fas fa-heart"></i><span>Added to Favorites</span>'
        : '<i class="far fa-heart"></i><span>Add to Favorites</span>';
});

// ===================================
// QUICK ORDER
// ===================================
function quickOrder(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    const message = `Hello Aster Luxury,\n\nI am interested in:\n\nReference: ${product.ref}\nPrice: ${product.price}\nQuantity: 1\n\nPlease share more details. Thank you!`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// ===================================
// FAVORITES
// ===================================
function toggleFavorite(id) {
    const idx = favorites.indexOf(id);
    if (idx === -1) {
        favorites.push(id);
        showToast('Added to favorites');
    } else {
        favorites.splice(idx, 1);
        showToast('Removed from favorites');
    }
    localStorage.setItem('aster_favorites', JSON.stringify(favorites));
    updateFavCount();

    // Update card UI
    document.querySelectorAll(`.product-fav[data-id="${id}"]`).forEach(btn => {
        const isFav = favorites.includes(id);
        btn.classList.toggle('active', isFav);
        btn.querySelector('i').className = (isFav ? 'fas' : 'far') + ' fa-heart';
    });
}

function updateFavCount() {
    const badge = $('#fav-count');
    badge.textContent = favorites.length;
    badge.classList.toggle('show', favorites.length > 0);
}

$('#favorites-btn').addEventListener('click', () => {
    if (favorites.length === 0) {
        showToast('No favorites yet — tap the heart on any piece');
        return;
    }
    // Filter to show only favorites
    const grid = $('#product-grid');
    grid.innerHTML = '';
    const favProducts = products.filter(p => favorites.includes(p.id));
    favProducts.forEach((product, index) => {
        const badgeText = getBadgeText(product);
        const badgeClass = isBadgeGold(product) ? 'gold' : '';
        const card = document.createElement('article');
        card.className = 'product-card visible';
        card.innerHTML = `
            <div class="product-image" data-id="${product.id}">
                <span class="product-badge ${badgeClass}">${badgeText}</span>
                <button class="product-fav active" data-id="${product.id}" aria-label="Favorite">
                    <i class="fas fa-heart"></i>
                </button>
                <img src="${product.image}" alt="Aster Luxury ${product.ref}" loading="lazy">
                <span class="product-quick-view" data-id="${product.id}">Quick View</span>
            </div>
            <div class="product-info">
                <span class="product-ref">Ref. ${product.ref}</span>
                <h3 class="product-title" data-id="${product.id}">Aster Piece</h3>
                <div class="product-price">${product.price}</div>
                <div class="product-actions">
                    <button class="details-btn" data-id="${product.id}">
                        <i class="fas fa-eye"></i>
                        <span>View Details</span>
                    </button>
                    <button class="whatsapp-btn" data-order-id="${product.id}">
                        <i class="fab fa-whatsapp"></i>
                        <span>Order via WhatsApp</span>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
    $$('.filter-btn').forEach(b => b.classList.remove('active'));
    $('.load-more-wrapper').classList.add('hidden');
    attachProductHandlers();
    document.getElementById('collections').scrollIntoView({ behavior: 'smooth' });
    showToast(`Showing ${favorites.length} favorite${favorites.length > 1 ? 's' : ''}`);
});

// ===================================
// SEARCH
// ===================================
const searchOverlay = $('#search-overlay');
const searchInput = $('#search-input');
const searchResults = $('#search-results');

$('#search-btn').addEventListener('click', () => {
    searchOverlay.classList.toggle('open');
    if (searchOverlay.classList.contains('open')) {
        setTimeout(() => searchInput.focus(), 100);
    }
});

$('#search-close').addEventListener('click', () => {
    searchOverlay.classList.remove('open');
    searchInput.value = '';
    searchResults.innerHTML = '';
});

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    searchResults.innerHTML = '';

    if (!query) return;

    const matches = products.filter(p =>
        p.ref.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.tags.some(t => t.includes(query)) ||
        p.price.toLowerCase().includes(query)
    ).slice(0, 8);

    if (matches.length === 0) {
        searchResults.innerHTML = `<div style="padding: 20px; text-align: center; color: var(--grey-500);">No matches found</div>`;
        return;
    }

    matches.forEach(product => {
        const item = document.createElement('div');
        item.className = 'search-result-item';
        item.innerHTML = `
            <img src="${product.image}" alt="${product.ref}">
            <div class="search-result-info">
                <strong>Aster Piece — Ref. ${product.ref}</strong>
                <span>${product.price}</span>
            </div>
        `;
        item.addEventListener('click', () => {
            searchOverlay.classList.remove('open');
            searchInput.value = '';
            searchResults.innerHTML = '';
            openModal(product.id);
        });
        searchResults.appendChild(item);
    });
});

// ===================================
// LOOKBOOK
// ===================================
const lookbookData = [
    { image: "https://i.imgur.com/m0g8dYS.jpg", category: "New Arrivals", title: "Signature Collection" },
    { image: "https://i.imgur.com/LTpzHsW.jpg", category: "Exclusive", title: "Evening Glamour" },
    { image: "https://i.imgur.com/UyzPCFl.jpg", category: "Trending", title: "Modern Romance" },
    { image: "https://i.imgur.com/Av9tP4X.jpg", category: "Featured", title: "Timeless Elegance" },
    { image: "https://i.imgur.com/pHJk2Xe.jpg", category: "Limited", title: "Crystal Allure" },
    { image: "https://i.imgur.com/MBZbuLs.jpg", category: "New", title: "Refined Luxury" },
    { image: "https://i.imgur.com/Gc8080H.jpg", category: "Curated", title: "Statement Pieces" }
];

function renderLookbook() {
    const grid = $('#lookbook-grid');
    if (!grid) return;
    grid.innerHTML = '';
    lookbookData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'lookbook-item';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <div class="lookbook-overlay">
                <div class="lookbook-overlay-content">
                    <span>${item.category}</span>
                    <h3>${item.title}</h3>
                </div>
            </div>
        `;
        div.addEventListener('click', () => {
            document.getElementById('collections').scrollIntoView({ behavior: 'smooth' });
        });
        grid.appendChild(div);
    });
}

// ===================================
// TOAST
// ===================================
let toastTimer;
function showToast(message) {
    const toast = $('#toast');
    $('#toast-message').textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove('show');
    }, 2800);
}

// ===================================
// SCROLL REVEAL
// ===================================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

function observeReveals() {
    $$('.reveal').forEach(el => revealObserver.observe(el));
}

// ===================================
// ACTIVE NAV ON SCROLL
// ===================================
const sections = ['home', 'collections', 'lookbook', 'story', 'contact'];
const navLinks = $$('.nav-link');

window.addEventListener('scroll', () => {
    let current = 'home';
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            const top = section.offsetTop - 120;
            if (window.scrollY >= top) current = id;
        }
    });
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
});

// ===================================
// FOOTER YEAR
// ===================================
$('#year').textContent = new Date().getFullYear();

// ===================================
// INIT
// ===================================
renderProducts();
renderLookbook();
updateFavCount();
observeReveals();

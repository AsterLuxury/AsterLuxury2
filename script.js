/* ==========================================================
   ASTER LUXURY — Editorial Couture Interactions
   ========================================================== */

const products = [
    { id: 1,  ref: "AL-001", image: "https://i.imgur.com/OErot48.jpg", tags: ["trending", "namaya"], price: "11,000 IQD" },
    { id: 2,  ref: "AL-002", image: "https://i.imgur.com/z00Aaai.jpg", tags: ["trending"], price: "8,000 IQD" },
    { id: 3,  ref: "AL-003", image: "https://i.imgur.com/JjaaugF.jpg", tags: ["new"], price: "10,000 IQD" },
    { id: 4,  ref: "AL-004", image: "https://i.imgur.com/Kte7nzq.jpg", tags: ["exclusive"], price: "10,000 IQD" },
    { id: 5,  ref: "AL-005", image: "https://i.imgur.com/PRowWfH.jpg", tags: ["new"], price: "10,000 IQD" },
    { id: 6,  ref: "AL-006", image: "https://i.imgur.com/SoydXG2.jpg", tags: ["new", "namaya"], price: "9,000 IQD" },
    { id: 7,  ref: "AL-007", image: "https://i.imgur.com/TlQPNKR.jpg", tags: ["trending"], price: "9,000 IQD" },
    { id: 8,  ref: "AL-008", image: "https://i.imgur.com/RrOwOVh.jpg", tags: ["limited"], price: "8,000 IQD" },
    { id: 9,  ref: "AL-009", image: "https://i.imgur.com/Eg3uzN3.jpg", tags: ["exclusive"], price: "8,000 IQD" },
    { id: 10, ref: "AL-010", image: "https://i.imgur.com/f5zWQHf.jpg", tags: ["trending"], price: "9,000 IQD" },
    { id: 11, ref: "AL-011", image: "https://i.imgur.com/fxUaMQ4.jpg", tags: ["new"], price: "9,000 IQD" },
    { id: 12, ref: "AL-012", image: "https://i.imgur.com/LTpzHsW.jpg", tags: ["exclusive"], price: "11,000 IQD" },
    { id: 13, ref: "AL-013", image: "https://i.imgur.com/mXV7gBZ.jpg", tags: ["new"], price: "9,000 IQD" },
    { id: 14, ref: "AL-014", image: "https://i.imgur.com/A3LfT29.jpg", tags: ["limited"], price: "10,000 IQD" },
    { id: 15, ref: "AL-015", image: "https://i.imgur.com/m0g8dYS.jpg", tags: ["trending", "namaya"], price: "12,000 IQD" },
    { id: 16, ref: "AL-016", image: "https://i.imgur.com/RHdbyM9.jpg", tags: ["new"], price: "9,000 IQD" },
    { id: 17, ref: "AL-017", image: "https://i.imgur.com/Szffcti.jpg", tags: ["new"], price: "9,000 IQD" },
    { id: 18, ref: "AL-018", image: "https://i.imgur.com/hDa2JGY.jpg", tags: ["trending"], price: "10,000 IQD" },
    { id: 19, ref: "AL-019", image: "https://i.imgur.com/kPNgeOX.jpg", tags: ["exclusive"], price: "9,000 IQD" },
    { id: 20, ref: "AL-020", image: "https://i.imgur.com/UyzPCFl.jpg", tags: ["trending", "namaya"], price: "10,000 IQD" },
    { id: 21, ref: "AL-021", image: "https://i.imgur.com/17uGewM.jpg", tags: ["new"], price: "8,000 IQD" },
    { id: 22, ref: "AL-022", image: "https://i.imgur.com/UrHw9dD.jpg", tags: ["exclusive"], price: "8,000 IQD" },
    { id: 23, ref: "AL-023", image: "https://i.imgur.com/zXIfG8s.jpg", tags: ["new"], price: "8,000 IQD" },
    { id: 24, ref: "AL-024", image: "https://i.imgur.com/6k1vRsV.jpg", tags: ["limited"], price: "9,000 IQD" },
    { id: 25, ref: "AL-025", image: "https://i.imgur.com/PV0i4eB.jpg", tags: ["trending"], price: "9,000 IQD" },
    { id: 26, ref: "AL-026", image: "https://i.imgur.com/FXHd5nO.jpg", tags: ["exclusive"], price: "9,000 IQD" },
    { id: 27, ref: "AL-027", image: "https://i.imgur.com/ZdkqaU9.jpg", tags: ["new"], price: "8,000 IQD" },
    { id: 28, ref: "AL-028", image: "https://i.imgur.com/Av9tP4X.jpg", tags: ["trending", "namaya"], price: "11,000 IQD" },
    { id: 29, ref: "AL-029", image: "https://i.imgur.com/0puuuwV.jpg", tags: ["limited"], price: "9,000 IQD" },
    { id: 30, ref: "AL-030", image: "https://i.imgur.com/QhhGmoY.jpg", tags: ["exclusive"], price: "8,500 IQD" },
    { id: 31, ref: "AL-031", image: "https://i.imgur.com/s3iVoL3.jpg", tags: ["exclusive", "namaya"], price: "10,000 IQD" },
    { id: 32, ref: "AL-032", image: "https://i.imgur.com/ruRRtpN.jpg", tags: ["new"], price: "9,000 IQD" },
    { id: 33, ref: "AL-033", image: "https://i.imgur.com/4DhDOLu.jpg", tags: ["trending"], price: "8,000 IQD" },
    { id: 34, ref: "AL-034", image: "https://i.imgur.com/NK4CVZ3.jpg", tags: ["exclusive"], price: "8,000 IQD" },
    { id: 35, ref: "AL-035", image: "https://i.imgur.com/nxvRYVN.jpg", tags: ["new"], price: "8,000 IQD" },
    { id: 36, ref: "AL-036", image: "https://i.imgur.com/qSaBKBn.jpg", tags: ["new"], price: "9,000 IQD" },
    { id: 37, ref: "AL-037", image: "https://i.imgur.com/QEZ3xNx.jpg", tags: ["trending"], price: "9,000 IQD" },
    { id: 38, ref: "AL-038", image: "https://i.imgur.com/NotI5dR.jpg", tags: ["new"], price: "9,000 IQD" },
    { id: 39, ref: "AL-039", image: "https://i.imgur.com/y4S1ViE.jpg", tags: ["limited"], price: "8,000 IQD" },
    { id: 40, ref: "AL-040", image: "https://i.imgur.com/8j4QokS.jpg", tags: ["trending"], price: "9,000 IQD" },
    { id: 41, ref: "AL-041", image: "https://i.imgur.com/pHJk2Xe.jpg", tags: ["new", "namaya"], price: "10,000 IQD" },
    { id: 42, ref: "AL-042", image: "https://i.imgur.com/iFkcaIE.jpg", tags: ["exclusive"], price: "9,000 IQD" },
    { id: 43, ref: "AL-043", image: "https://i.imgur.com/OrhpKkD.jpg", tags: ["trending"], price: "8,000 IQD" },
    { id: 44, ref: "AL-044", image: "https://i.imgur.com/MKITY3l.jpg", tags: ["exclusive"], price: "10,000 IQD" },
    { id: 45, ref: "AL-045", image: "https://i.imgur.com/yZ6MkCb.jpg", tags: ["limited"], price: "9,000 IQD" },
    { id: 46, ref: "AL-046", image: "https://i.imgur.com/TaEqJ6k.jpg", tags: ["new"], price: "9,000 IQD" },
    { id: 47, ref: "AL-047", image: "https://i.imgur.com/zm6HOdR.jpg", tags: ["trending"], price: "8,000 IQD" },
    { id: 48, ref: "AL-048", image: "https://i.imgur.com/Jo0v8yf.jpg", tags: ["new"], price: "8,000 IQD" },
    { id: 49, ref: "AL-049", image: "https://i.imgur.com/A2dYFIx.jpg", tags: ["exclusive"], price: "9,000 IQD" },
    { id: 50, ref: "AL-050", image: "https://i.imgur.com/4jGltwy.jpg", tags: ["trending"], price: "8,000 IQD" },
    { id: 52, ref: "AL-052", image: "https://i.imgur.com/MBZbuLs.jpg", tags: ["new"], price: "11,000 IQD" },
    { id: 53, ref: "AL-053", image: "https://i.imgur.com/Jt5Je1s.jpg", tags: ["new"], price: "10,000 IQD" },
    { id: 54, ref: "AL-054", image: "https://i.imgur.com/Gc8080H.jpg", tags: ["trending"], price: "10,000 IQD" },
    { id: 55, ref: "AL-055", image: "https://i.imgur.com/motIsvg.jpg", tags: ["exclusive"], price: "9,000 IQD" },
    { id: 56, ref: "AL-056", image: "https://i.imgur.com/uncBlEB.jpeg", tags: ["exclusive"], price: "9,000 IQD" }
];

const WHATSAPP_NUMBER = "9647503307830";
const INITIAL_LOAD = 12;
const LOAD_INCREMENT = 12;

const FEATURED_IDS = [15, 12, 28, 20, 41, 14, 31, 4];

let currentFilter = 'all';
let displayedCount = INITIAL_LOAD;
let currentProduct = null;
let favorites = JSON.parse(localStorage.getItem('aster_favorites') || '[]');

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

function getBadgeText(p) {
    if (p.tags.includes('limited')) return 'Limited';
    if (p.tags.includes('exclusive')) return 'Exclusive';
    if (p.tags.includes('namaya')) return 'Namaya';
    if (p.tags.includes('new')) return 'New';
    if (p.tags.includes('trending')) return 'Trending';
    return 'Featured';
}

function isBadgeGold(p) {
    return p.tags.includes('limited') || p.tags.includes('exclusive') || p.tags.includes('namaya');
}

function getFiltered() {
    if (currentFilter === 'all') return products;
    return products.filter(p => p.tags.includes(currentFilter));
}

// ==========================================================
// LOADER
// ==========================================================
let loaderProgress = 0;
const loaderEl = $('#loader');
const loaderPercent = $('#loader-percent');

const loaderInterval = setInterval(() => {
    loaderProgress += Math.random() * 8 + 2;
    if (loaderProgress >= 100) {
        loaderProgress = 100;
        clearInterval(loaderInterval);
    }
    loaderPercent.textContent = Math.floor(loaderProgress);
}, 80);

window.addEventListener('load', () => {
    setTimeout(() => {
        loaderEl.classList.add('hidden');
    }, 1800);
});

// ==========================================================
// CUSTOM CURSOR
// ==========================================================
const cursor = $('#cursor');
const cursorFollower = $('#cursor-follower');

if (window.innerWidth > 1024) {
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    });

    function animateFollower() {
        followerX += (mouseX - followerX) * 0.15;
        followerY += (mouseY - followerY) * 0.15;
        cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%)`;
        requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Cursor hover targets
    document.addEventListener('mouseover', (e) => {
        const target = e.target.closest('a, button, [data-magnetic], .product-card, .bento-item, .editorial-item, input');
        if (target) {
            cursor.classList.add('hover');
            cursorFollower.classList.add('hover');
        }
    });

    document.addEventListener('mouseout', (e) => {
        const target = e.target.closest('a, button, [data-magnetic], .product-card, .bento-item, .editorial-item, input');
        if (target) {
            cursor.classList.remove('hover');
            cursorFollower.classList.remove('hover');
        }
    });
}

// ==========================================================
// MAGNETIC BUTTONS
// ==========================================================
if (window.innerWidth > 1024) {
    document.querySelectorAll('[data-magnetic]').forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'translate(0, 0)';
        });
    });
}

// ==========================================================
// HEADER SCROLL
// ==========================================================
const header = $('#header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// ==========================================================
// MOBILE MENU
// ==========================================================
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

// ==========================================================
// FILTER COUNTS
// ==========================================================
function updateFilterCounts() {
    $('#count-all').textContent = products.length;
    $('#count-new').textContent = products.filter(p => p.tags.includes('new')).length;
    $('#count-trending').textContent = products.filter(p => p.tags.includes('trending')).length;
    $('#count-exclusive').textContent = products.filter(p => p.tags.includes('exclusive')).length;
    $('#count-limited').textContent = products.filter(p => p.tags.includes('limited')).length;
    $('#count-namaya').textContent = products.filter(p => p.tags.includes('namaya')).length;
}

// ==========================================================
// PRODUCT GRID
// ==========================================================
function renderProducts() {
    const grid = $('#product-grid');
    const filtered = getFiltered();
    const toShow = filtered.slice(0, displayedCount);

    grid.innerHTML = '';

    toShow.forEach((p, i) => {
        const isFav = favorites.includes(p.id);
        const badgeText = getBadgeText(p);
        const badgeClass = isBadgeGold(p) ? 'gold' : '';
        const tagDisplay = p.tags[0].charAt(0).toUpperCase() + p.tags[0].slice(1);

        const card = document.createElement('article');
        card.className = 'product-card';
        card.style.transitionDelay = (i % 12) * 60 + 'ms';
        card.innerHTML = `
            <div class="product-image" data-id="${p.id}">
                <span class="product-badge ${badgeClass}">${badgeText}</span>
                <button class="product-fav ${isFav ? 'active' : ''}" data-id="${p.id}" aria-label="Favorite">
                    <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
                </button>
                <img src="${p.image}" alt="Aster Luxury ${p.ref}" loading="lazy">
                <span class="product-quick-view" data-id="${p.id}">
                    <i class="fas fa-expand"></i> View Detail
                </span>
            </div>
            <div class="product-info">
                <div class="product-info-row">
                    <span class="product-ref">Ref. ${p.ref}</span>
                    <span class="product-tag">${tagDisplay}</span>
                </div>
                <h3 class="product-title" data-id="${p.id}"><span class="italic">Aster</span>Piece</h3>
                <div class="product-bottom">
                    <span class="product-price">${p.price}</span>
                    <button class="product-order-btn" data-order-id="${p.id}">
                        <i class="fab fa-whatsapp"></i>
                        <span>Order</span>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    requestAnimationFrame(() => {
        $$('.product-card').forEach((card, i) => {
            setTimeout(() => card.classList.add('visible'), i * 30);
        });
    });

    const loadMoreWrapper = $('.load-more-wrapper');
    if (filtered.length <= displayedCount) {
        loadMoreWrapper.classList.add('hidden');
    } else {
        loadMoreWrapper.classList.remove('hidden');
    }

    attachProductHandlers();
}

function attachProductHandlers() {
    $$('.product-image[data-id], .product-title[data-id], .product-quick-view[data-id]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.stopPropagation();
            openModal(parseInt(el.dataset.id));
        });
    });

    $$('.product-order-btn[data-order-id]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            quickOrder(parseInt(btn.dataset.orderId));
        });
    });

    $$('.product-fav[data-id]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(parseInt(btn.dataset.id));
        });
    });
}

// ==========================================================
// BENTO GRID
// ==========================================================
function renderBento() {
    const grid = $('#bento-grid');
    if (!grid) return;
    grid.innerHTML = '';

    FEATURED_IDS.forEach((id, i) => {
        const p = products.find(x => x.id === id);
        if (!p) return;

        const badge = getBadgeText(p);
        const item = document.createElement('div');
        item.className = 'bento-item';
        item.style.transitionDelay = (i * 80) + 'ms';
        item.dataset.id = p.id;
        item.innerHTML = `
            <span class="bento-badge">${badge}</span>
            <img src="${p.image}" alt="Aster Luxury ${p.ref}" loading="lazy">
            <div class="bento-overlay">
                <div class="bento-info">
                    <span class="bento-ref">Ref. ${p.ref}</span>
                    <h3 class="bento-name"><span class="italic">Aster</span>Piece</h3>
                    <div class="bento-price">${p.price}</div>
                </div>
            </div>
        `;
        item.addEventListener('click', () => openModal(p.id));
        grid.appendChild(item);
    });

    // Reveal
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });
    $$('.bento-item').forEach(el => obs.observe(el));
}

// ==========================================================
// EDITORIAL
// ==========================================================
const editorialData = [
    { image: "https://i.imgur.com/m0g8dYS.jpg", num: "01", title: "The Signature", meta: ["Curated", "Volume I"] },
    { image: "https://i.imgur.com/LTpzHsW.jpg", num: "02", title: "Evening Glamour", meta: ["Exclusive", "Editorial"] },
    { image: "https://i.imgur.com/UyzPCFl.jpg", num: "03", title: "Modern Romance", meta: ["Trending", "2026"] },
    { image: "https://i.imgur.com/Av9tP4X.jpg", num: "04", title: "Timeless Edit", meta: ["Featured", "Limited"] },
    { image: "https://i.imgur.com/pHJk2Xe.jpg", num: "05", title: "Crystal Allure", meta: ["New", "Namaya"] }
];

function renderEditorial() {
    const grid = $('#editorial-grid');
    if (!grid) return;
    grid.innerHTML = '';
    editorialData.forEach((item, i) => {
        const div = document.createElement('div');
        div.className = 'editorial-item';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <div class="editorial-overlay">
                <span class="editorial-num">N° ${item.num}</span>
                <h3 class="editorial-title">${item.title}</h3>
                <div class="editorial-meta">
                    ${item.meta.map(m => `<span>${m}</span>`).join('')}
                </div>
            </div>
        `;
        div.addEventListener('click', () => {
            $('#collections').scrollIntoView({ behavior: 'smooth' });
        });
        grid.appendChild(div);
    });
}

// ==========================================================
// FILTERS
// ==========================================================
$$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        $$('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        displayedCount = INITIAL_LOAD;
        renderProducts();
    });
});

$$('[data-quick-filter]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = link.dataset.quickFilter;
        const btn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
        if (btn) btn.click();
        $('#collections').scrollIntoView({ behavior: 'smooth' });
    });
});

// ==========================================================
// LOAD MORE
// ==========================================================
$('#load-more').addEventListener('click', () => {
    displayedCount += LOAD_INCREMENT;
    renderProducts();
});

// ==========================================================
// MODAL
// ==========================================================
const modal = $('#product-modal');

function openModal(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    currentProduct = p;

    $('#modal-image').src = p.image;
    $('#modal-image').alt = `Aster Luxury ${p.ref}`;
    $('#modal-ref').textContent = `Reference ${p.ref}`;
    $('#modal-price').textContent = p.price;
    $('#modal-badge').textContent = getBadgeText(p);
    $('#qty-input').value = 1;

    const isFav = favorites.includes(p.id);
    const favBtn = $('#modal-favorite');
    favBtn.classList.toggle('active', isFav);
    favBtn.querySelector('i').className = (isFav ? 'fas' : 'far') + ' fa-heart';

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
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
});

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

$('#modal-order').addEventListener('click', () => {
    if (!currentProduct) return;
    const qty = $('#qty-input').value;
    const message = `Hello Aster Luxury,\n\nI would like to order:\n\nReference: ${currentProduct.ref}\nPrice: ${currentProduct.price}\nQuantity: ${qty}\n\nPlease share more details. Thank you!`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
});

$('#modal-favorite').addEventListener('click', () => {
    if (!currentProduct) return;
    toggleFavorite(currentProduct.id);
    const isFav = favorites.includes(currentProduct.id);
    const btn = $('#modal-favorite');
    btn.classList.toggle('active', isFav);
    btn.querySelector('i').className = (isFav ? 'fas' : 'far') + ' fa-heart';
});

// ==========================================================
// QUICK ORDER
// ==========================================================
function quickOrder(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    const message = `Hello Aster Luxury,\n\nI would like to order:\n\nReference: ${p.ref}\nPrice: ${p.price}\nQuantity: 1\n\nPlease share more details. Thank you!`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// ==========================================================
// FAVORITES
// ==========================================================
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
    const grid = $('#product-grid');
    grid.innerHTML = '';
    const favProducts = products.filter(p => favorites.includes(p.id));
    favProducts.forEach((p, i) => {
        const badgeText = getBadgeText(p);
        const badgeClass = isBadgeGold(p) ? 'gold' : '';
        const tagDisplay = p.tags[0].charAt(0).toUpperCase() + p.tags[0].slice(1);
        const card = document.createElement('article');
        card.className = 'product-card visible';
        card.innerHTML = `
            <div class="product-image" data-id="${p.id}">
                <span class="product-badge ${badgeClass}">${badgeText}</span>
                <button class="product-fav active" data-id="${p.id}" aria-label="Favorite">
                    <i class="fas fa-heart"></i>
                </button>
                <img src="${p.image}" alt="Aster Luxury ${p.ref}" loading="lazy">
                <span class="product-quick-view" data-id="${p.id}">
                    <i class="fas fa-expand"></i> View Detail
                </span>
            </div>
            <div class="product-info">
                <div class="product-info-row">
                    <span class="product-ref">Ref. ${p.ref}</span>
                    <span class="product-tag">${tagDisplay}</span>
                </div>
                <h3 class="product-title" data-id="${p.id}"><span class="italic">Aster</span>Piece</h3>
                <div class="product-bottom">
                    <span class="product-price">${p.price}</span>
                    <button class="product-order-btn" data-order-id="${p.id}">
                        <i class="fab fa-whatsapp"></i>
                        <span>Order</span>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
    $$('.filter-btn').forEach(b => b.classList.remove('active'));
    $('.load-more-wrapper').classList.add('hidden');
    attachProductHandlers();
    $('#collections').scrollIntoView({ behavior: 'smooth' });
    showToast(`${favorites.length} favorite${favorites.length > 1 ? 's' : ''} curated for you`);
});

// ==========================================================
// SEARCH
// ==========================================================
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
        p.tags.some(t => t.includes(query)) ||
        p.price.toLowerCase().replace(/,/g, '').includes(query.replace(/,/g, ''))
    ).slice(0, 8);

    if (matches.length === 0) {
        searchResults.innerHTML = `<div style="padding: 32px; text-align: center; color: var(--grey-500); font-style: italic;">No matches found — try AL-001, exclusive, or a price</div>`;
        return;
    }

    matches.forEach(p => {
        const item = document.createElement('div');
        item.className = 'search-result-item';
        item.innerHTML = `
            <img src="${p.image}" alt="${p.ref}">
            <div class="search-result-info">
                <strong>Aster Piece — Ref. ${p.ref}</strong>
                <span>${p.price} · ${p.tags[0]}</span>
            </div>
        `;
        item.addEventListener('click', () => {
            searchOverlay.classList.remove('open');
            searchInput.value = '';
            searchResults.innerHTML = '';
            openModal(p.id);
        });
        searchResults.appendChild(item);
    });
});

// ==========================================================
// TOAST
// ==========================================================
let toastTimer;
function showToast(message) {
    const toast = $('#toast');
    $('#toast-message').textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ==========================================================
// SCROLL REVEAL
// ==========================================================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

function observeReveals() {
    $$('.reveal').forEach(el => revealObserver.observe(el));
}

// ==========================================================
// QUOTE WORD ANIMATION
// ==========================================================
const quoteContent = document.querySelector('.quote-content');
if (quoteContent) {
    const quoteObs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('in-view');
                quoteObs.unobserve(e.target);
            }
        });
    }, { threshold: 0.3 });
    quoteObs.observe(quoteContent);
}

// ==========================================================
// ACTIVE NAV
// ==========================================================
const sections = ['home', 'collections', 'editorial', 'story', 'contact'];
const navLinks = $$('.nav-link');

window.addEventListener('scroll', () => {
    let current = 'home';
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            const top = section.offsetTop - 150;
            if (window.scrollY >= top) current = id;
        }
    });
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
}, { passive: true });

// ==========================================================
// TESTIMONIAL DOTS
// ==========================================================
function setupTestimonialDots() {
    const track = $('#testimonial-track');
    const dotsContainer = $('#testimonial-dots');
    if (!track || !dotsContainer) return;

    const items = track.querySelectorAll('.testimonial');
    dotsContainer.innerHTML = '';

    items.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.className = 'dot';
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            items[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        });
        dotsContainer.appendChild(dot);
    });

    track.addEventListener('scroll', () => {
        const scrollLeft = track.scrollLeft;
        const itemWidth = items[0].offsetWidth + 32;
        const activeIndex = Math.round(scrollLeft / itemWidth);
        dotsContainer.querySelectorAll('.dot').forEach((d, i) => {
            d.classList.toggle('active', i === activeIndex);
        });
    }, { passive: true });
}

// ==========================================================
// HERO PARALLAX
// ==========================================================
const heroImg1 = document.querySelector('.hero-img-1');
const heroImg2 = document.querySelector('.hero-img-2');
const heroImg3 = document.querySelector('.hero-img-3');

if (heroImg1 && window.innerWidth > 1024) {
    document.querySelector('.hero-frame')?.addEventListener('mousemove', (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        heroImg1.style.transform = `translate(${x * 15}px, ${y * 15}px)`;
        heroImg2.style.transform = `translate(${x * -10}px, ${y * -10}px)`;
        heroImg3.style.transform = `translate(${x * 25}px, ${y * 25}px)`;
    });

    document.querySelector('.hero-frame')?.addEventListener('mouseleave', () => {
        heroImg1.style.transform = '';
        heroImg2.style.transform = '';
        heroImg3.style.transform = '';
    });
}

// ==========================================================
// FOOTER YEAR
// ==========================================================
$('#year').textContent = new Date().getFullYear();

// ==========================================================
// INIT
// ==========================================================
updateFilterCounts();
renderBento();
renderProducts();
renderEditorial();
updateFavCount();
observeReveals();
setupTestimonialDots();

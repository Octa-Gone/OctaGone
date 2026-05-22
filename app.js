// --- OctaGone Tech News Application Script ---

// Mock Tech Articles Database
const ARTICLES_DATABASE = [
    {
        id: 1,
        category: "ai",
        categoryName: "Artificial Intelligence",
        title: "The Ghost in the Machine: Deciphering Neural Model Reasoning",
        summary: "As LLMs display advanced cognitive capabilities, researchers strive to map the internal pathways that lead to complex multi-step reasoning.",
        content: `
            <p>Artificial Intelligence has moved far beyond simple pattern recognition. In the past year, we have witnessed the emergence of models capable of solving complex mathematics, writing robust software systems, and engaging in deep logical deduction. Yet, an existential question lingers in the developer community: How do these systems actually think?</p>
            <p>A recent breakthrough from the Neural Synthesis Lab details a process called "activation patching," which allows researchers to trace specific logic gates inside artificial neural networks. By mapping the firing patterns of weights, computer scientists successfully isolated the "logical reasoning node groups" that activate when a model is solving problems.</p>
            <p>This development has profound implications. For one, understanding how AI reasons is the first step toward building provably safe artificial intelligence. If we can isolate where errors or "hallucinations" arise in the neural pathways, we can design algorithmic guardrails to intercept incorrect deductions before they are outputted.</p>
            <p>However, the complexity of models containing trillions of parameters makes complete transparency a monumental task. The team estimates that they have currently mapped less than 0.5% of the total network nodes. The journey to fully understand the machine's mind has only just begun.</p>
        `,
        date: "May 22, 2026",
        author: "Sarah Chen",
        authorInitials: "SC",
        readTime: "6 min read",
        image: "assets/ai_thumbnail.png",
        views: 1420
    },
    {
        id: 2,
        category: "space",
        categoryName: "Space Tech",
        title: "Mars Horizon: Autonomous Robotic Rovers Construct First Habitat Shell",
        summary: "Self-assembling structures built from Martian soil mark a historic milestone in preparing the Red Planet for human arrival.",
        content: `
            <p>Humanity is one step closer to becoming a multi-planetary species. Earlier today, space exploration agency AeroSpaceX confirmed that their fleet of fully autonomous robotic builders completed the structural shell of the first Mars habitat in the Utopia Planitia region.</p>
            <p>What makes this achievement historic is the construction method. Instead of transporting heavy building materials from Earth, the robots used local Martian soil (regolith) combined with a bio-polymer binder. This mixture was fed into large 3D-printing robotic arms that worked continuously for 48 Martian days.</p>
            <p>The habitat shell features a protective dome designed to shield future astronauts from solar radiation and high-velocity dust storms. The double-layered wall structure also contains insulation cavities that will be filled with native ice, providing both a thermal barrier and a potential emergency water supply.</p>
            <p>The next phase of the mission involves sending interior assembly bots. These machines will seal the environment, test life-support systems, and install hydroponic farming bays. If these automated tests pass, the first human crew could set foot inside the habitat by the turn of the decade.</p>
        `,
        date: "May 21, 2026",
        author: "Marcus Vance",
        authorInitials: "MV",
        readTime: "4 min read",
        image: "assets/space_thumbnail.png",
        views: 980
    },
    {
        id: 3,
        category: "cybersecurity",
        categoryName: "Cybersecurity",
        title: "Zero-Day Eclipse: The Silent Warfare in Modern IoT Firmware",
        summary: "A newly discovered vulnerability in smart-grid firmware highlights the growing threat of infrastructure cyberattacks.",
        content: `
            <p>In the digital age, warfare is fought in silence and lines of code. A global cyber alliance published a critical warning yesterday regarding "Eclipse-9," a zero-day exploit targeting power grid control systems across three continents.</p>
            <p>The vulnerability resides deep inside the firmware of smart-grid regulators. An attacker exploiting Eclipse-9 can bypass authentication steps, spoof sensor metrics, and manually trigger emergency shutdown sequences. The complexity of the vulnerability suggests it was developed by a sophisticated nation-state threat group.</p>
            <p>Security experts note that patching IoT firmware at this scale is incredibly difficult. Many grid systems operate continuously and cannot be taken offline for maintenance without causing immediate blackouts. Engineers are forced to deploy active mitigation scripts at the network layer while drafting safe OTA (Over-the-Air) firmware updates.</p>
            <p>This incident underscores the absolute necessity of transitioning to "Zero Trust Architecture" for industrial control networks. The standard air-gap method of isolation is no longer sufficient in an era where remote sensors must interface with cloud analytics.</p>
        `,
        date: "May 20, 2026",
        author: "Elena Rostova",
        authorInitials: "ER",
        readTime: "5 min read",
        image: "assets/security_thumbnail.png",
        views: 1890
    },
    {
        id: 4,
        category: "quantum",
        categoryName: "Quantum Computing",
        title: "Quantum Ascent: Superconducting Qubits Cross the 1000-Qubit Threshold",
        summary: "Physicists achieve a quantum milestone, demonstrating fault-tolerant error correction on a grand scale.",
        content: `
            <p>For decades, quantum computing was a theoretical promise. Today, that theory becomes commercial reality. A joint venture between IBM and Tokyo Science Institute announced the successful operation of 'Project Atlas,' a quantum processor boasting 1,120 physical qubits.</p>
            <p>The major challenge in quantum computing has never been building qubits, but maintaining them. Qubits are highly sensitive to thermal noise, magnetic fields, and atomic vibrations—factors that cause "decoherence" and corrupt calculations. Project Atlas overcomes this through a novel "topological error correction" algorithm.</p>
            <p>In tests, Atlas maintained stable logical qubits for over 45 minutes, a thousand-fold increase compared to previous iterations. This level of stability is sufficient to run complex molecular simulation algorithms that would take traditional supercomputers thousands of years to solve.</p>
            <p>Industries are already racing to secure computational time. Pharmaceutical giants intend to use Atlas to simulate molecular bonds for next-generation antibiotics, while logistics firms aim to optimize global supply chains down to the microsecond. The era of quantum utility is officially here.</p>
        `,
        date: "May 19, 2026",
        author: "Devon Patel",
        authorInitials: "DP",
        readTime: "8 min read",
        image: "assets/quantum_thumbnail.png",
        views: 2240
    },
    {
        id: 5,
        category: "gadgets",
        categoryName: "Future Tech",
        title: "Neuralinked: Daily Workspace Testing Shows BCI Headwear Boosts Coding Speed",
        summary: "Early adopters report unprecedented productivity gains and mental fatigue reduction using non-invasive brain-computer interfaces.",
        content: `
            <p>What if you could write code at the speed of thought? That is the question asked by the developers of MindFlow, a non-invasive Brain-Computer Interface (BCI) headband that translates neural intent into editor operations.</p>
            <p>Unlike surgical implants, MindFlow uses a high-density array of dry EEG sensors to detect focus spikes, motor intent, and logical decision triggers. By mapping these signals to IDE keyboard shortcuts and code generation agents, programmers can navigate repositories and trigger compilations without touching a mouse.</p>
            <p>We spent a week testing the MindFlow headset. The initial learning curve is steep; it requires training your brain to associate specific mental postures with actions like "undo," "search," or "run tests." However, by day three, the workflow began to feel remarkably natural.</p>
            <p>Quantitative testing showed a 35% increase in structural code navigation speed. Furthermore, because users did not have to split their focus between physical typing and mental architecture, self-reported fatigue levels dropped by half. BCI headwear might soon replace the mechanical keyboard as the developer's tool of choice.</p>
        `,
        date: "May 18, 2026",
        author: "Liam O'Connor",
        authorInitials: "LO",
        readTime: "5 min read",
        image: "assets/ai_thumbnail.png", // reuse or set fallback
        views: 1100
    },
    {
        id: 6,
        category: "software",
        categoryName: "Software",
        title: "Rust Overtakes: The Paradigm Shift in Mission-Critical Systems Programming",
        summary: "Major operating system kernels and financial platforms are rapidly deprecating C/C++ in favor of memory-safe Rust codebases.",
        content: `
            <p>The software engineering world is undergoing a silent rewrite. After decades of relying on C and C++ for low-level systems programming, major tech corporations are systematically replacing critical infrastructure components with Rust.</p>
            <p>The primary driver behind this transition is security. Over 70% of historical vulnerabilities in major operating systems stem from memory management bugs, such as buffer overflows and use-after-free errors. Rust's strict compiler borrow-checker completely eliminates these vulnerability classes at compile-time without introducing garbage-collection overhead.</p>
            <p>Industry giants like Microsoft, Google, and Amazon have pledged massive resources to rewrite core network services and drivers in Rust. Even the Linux kernel has welcomed Rust as its second official programming language, signaling an end to the absolute dominance of C.</p>
            <p>While rewrite operations are expensive and time-consuming, the savings in security audits, debugging, and system uptime are substantial. For engineers, learning Rust is no longer an optional hobby—it is becoming a requirement for systems-level development.</p>
        `,
        date: "May 17, 2026",
        author: "Sarah Chen",
        authorInitials: "SC",
        readTime: "4 min read",
        image: "assets/quantum_thumbnail.png",
        views: 1350
    }
];

// Mock Ticker Quotes
const TICKER_QUOTES = [
    { name: "OCTA", val: "$142.85", pct: "+8.45%", up: true },
    { name: "BTC", val: "$92,450", pct: "+3.12%", up: true },
    { name: "ETH", val: "$4,820", pct: "-1.24%", up: false },
    { name: "NVDA", val: "$1,245.30", pct: "+0.85%", up: true },
    { name: "QUANT", val: "$89.15", pct: "+15.42%", up: true },
    { name: "TSLA", val: "$234.60", pct: "-2.35%", up: false },
    { name: "MSFT", val: "$442.10", pct: "+1.20%", up: true },
    { name: "AI_IDX", val: "3,420.50", pct: "+4.67%", up: true },
    { name: "CYBER", val: "$112.45", pct: "-0.95%", up: false }
];

// App State
let appState = {
    activeCategory: "all",
    searchQuery: "",
    bookmarks: [],
    currentReadingArticle: null,
    theme: "dark"
};

// Text-to-Speech Controller
let ttsController = {
    synthesis: window.speechSynthesis,
    utterance: null,
    isPlaying: false,
    isPaused: false
};

// --- Initializer & Event Listeners ---
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    loadBookmarks();
    setupTicker();
    renderCategoriesNav();
    updateUI();
    setupEventListeners();
    setupWidgets();
});

// Load bookmarks from local storage
function loadBookmarks() {
    const saved = localStorage.getItem("octagone_bookmarks");
    if (saved) {
        try {
            appState.bookmarks = JSON.parse(saved);
        } catch (e) {
            appState.bookmarks = [];
        }
    }
    updateBookmarkBadge();
}

// Save bookmarks to local storage
function saveBookmarks() {
    localStorage.setItem("octagone_bookmarks", JSON.stringify(appState.bookmarks));
    updateBookmarkBadge();
}

// Update the bookmarks count badge
function updateBookmarkBadge() {
    const badges = document.querySelectorAll(".bookmark-badge");
    badges.forEach(b => {
        b.textContent = appState.bookmarks.length;
        b.style.display = appState.bookmarks.length > 0 ? "block" : "none";
    });
}

// Initialize Theme
function initTheme() {
    const savedTheme = localStorage.getItem("octagone_theme");
    if (savedTheme) {
        appState.theme = savedTheme;
    } else {
        // Fallback to system preference
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        appState.theme = prefersDark ? "dark" : "light";
    }
    document.body.setAttribute("data-theme", appState.theme);
    updateThemeIcon();
}

// Update theme switcher icon
function updateThemeIcon() {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;
    
    if (appState.theme === "dark") {
        btn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM6.161 5.1a.75.75 0 0 1 1.06 0l1.59 1.59a.75.75 0 1 1-1.06 1.06l-1.59-1.59a.75.75 0 0 1 0-1.06Zm11.678 0a.75.75 0 0 1 0 1.06l-1.59 1.59a.75.75 0 1 1-1.06-1.06l1.59-1.59a.75.75 0 0 1 1.06 0ZM12 5.25a6.75 6.75 0 1 0 6.75 6.75A6.758 6.758 0 0 0 12 5.25Zm0 12a5.25 5.25 0 1 1 5.25-5.25A5.256 5.256 0 0 1 12 17.25Zm0 1.5a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm-5.839.661a.75.75 0 0 1 1.06 0l1.59 1.59a.75.75 0 1 1-1.06 1.06l-1.59-1.59a.75.75 0 0 1 0-1.06Zm11.678 0a.75.75 0 0 1 0 1.06l-1.59 1.59a.75.75 0 1 1-1.06-1.06l1.59-1.59a.75.75 0 0 1 1.06 0ZM2.25 12a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm16.5 0a.75.75 0 0 1 .75-.75H21.75a.75.75 0 0 1 0 1.5H19.5a.75.75 0 0 1-.75-.75Z" />
            </svg>
        `;
    } else {
        btn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 1 1-16.908-11.5 10.514 10.514 0 0 1 4.028-2.072Z" clip-rule="evenodd" />
            </svg>
        `;
    }
}

// Toggle Theme
function toggleTheme() {
    appState.theme = appState.theme === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", appState.theme);
    localStorage.setItem("octagone_theme", appState.theme);
    updateThemeIcon();
}

// Setup Event Listeners
function setupEventListeners() {
    // Theme toggle
    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
        themeBtn.addEventListener("click", toggleTheme);
    }
    
    // Bookmark Toggle button (Header)
    const bookmarksToggleBtn = document.getElementById("bookmarks-toggle");
    if (bookmarksToggleBtn) {
        bookmarksToggleBtn.addEventListener("click", toggleBookmarksPanel);
    }
    
    // Close Bookmarks panel
    const bookmarksCloseBtn = document.getElementById("bookmarks-close");
    if (bookmarksCloseBtn) {
        bookmarksCloseBtn.addEventListener("click", toggleBookmarksPanel);
    }
    
    // Search input
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            appState.searchQuery = e.target.value.toLowerCase().trim();
            updateUI();
        });
    }
    
    // Modal controls
    const modalCloseBtn = document.getElementById("modal-close");
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener("click", closeArticleReader);
    }
    
    const modalOverlay = document.getElementById("modal-overlay");
    if (modalOverlay) {
        modalOverlay.addEventListener("click", (e) => {
            if (e.target === modalOverlay) {
                closeArticleReader();
            }
        });
        
        // Track modal scroll for reading progress
        modalOverlay.addEventListener("scroll", updateReadingProgress);
    }
    
    // TTS controls
    const playTtsBtn = document.getElementById("tts-play");
    if (playTtsBtn) {
        playTtsBtn.addEventListener("click", toggleTTS);
    }
    
    const stopTtsBtn = document.getElementById("tts-stop");
    if (stopTtsBtn) {
        stopTtsBtn.addEventListener("click", stopTTS);
    }
    
    // Comments Form submission
    const commentSubmit = document.getElementById("comment-submit");
    if (commentSubmit) {
        commentSubmit.addEventListener("click", handleCommentSubmit);
    }
}

// Setup stock/crypto ticker
function setupTicker() {
    const tickerContainer = document.getElementById("ticker-container");
    if (!tickerContainer) return;
    
    // Duplicate the elements to create infinite loop
    let tickerHtml = "";
    // We render the array twice to ensure smooth looping layout
    const doubleQuotes = [...TICKER_QUOTES, ...TICKER_QUOTES];
    
    doubleQuotes.forEach(q => {
        const changeClass = q.up ? "up" : "down";
        const sign = q.up ? "▲" : "▼";
        
        tickerHtml += `
            <div class="ticker-item">
                <strong>${q.name}</strong>
                <span>${q.val}</span>
                <span class="change ${changeClass}">${sign} ${q.pct}</span>
            </div>
        `;
    });
    
    tickerContainer.innerHTML = tickerHtml;
}

// Render dynamic Category Tab Nav
function renderCategoriesNav() {
    const catNav = document.getElementById("categories-nav");
    if (!catNav) return;
    
    const categories = [
        { id: "all", name: "All News" },
        { id: "ai", name: "AI & Learning" },
        { id: "space", name: "Space Tech" },
        { id: "cybersecurity", name: "Cybersecurity" },
        { id: "quantum", name: "Quantum Computing" },
        { id: "gadgets", name: "Future Tech" },
        { id: "software", name: "Software Development" }
    ];
    
    catNav.innerHTML = categories.map(c => `
        <button class="category-tab ${appState.activeCategory === c.id ? 'active' : ''}" 
                data-id="${c.id}">
            ${c.name}
        </button>
    `).join("");
    
    // Click events
    const tabs = catNav.querySelectorAll(".category-tab");
    tabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            tabs.forEach(t => t.classList.remove("active"));
            e.currentTarget.classList.add("active");
            appState.activeCategory = e.currentTarget.dataset.id;
            updateUI();
        });
    });
}

// Filter and search logic
function getFilteredArticles() {
    return ARTICLES_DATABASE.filter(art => {
        const matchCategory = appState.activeCategory === "all" || art.category === appState.activeCategory;
        const matchSearch = art.title.toLowerCase().includes(appState.searchQuery) ||
                            art.summary.toLowerCase().includes(appState.searchQuery) ||
                            art.content.toLowerCase().includes(appState.searchQuery);
        return matchCategory && matchSearch;
    });
}

// Global UI Redraw
function updateUI() {
    const filtered = getFilteredArticles();
    
    // Reset view grids
    const heroSection = document.getElementById("hero-section");
    const newsGrid = document.getElementById("news-grid");
    
    if (appState.searchQuery !== "" || appState.activeCategory !== "all") {
        // If searching or filtering, hide the Hero Grid layout to show standard search results
        if (heroSection) heroSection.style.display = "none";
        
        if (filtered.length === 0) {
            renderEmptyState();
        } else {
            renderStandardGrid(filtered);
        }
    } else {
        // Default Landing Page: Show Hero Grid (first 3) + Remaining Cards
        if (heroSection) heroSection.style.display = "grid";
        
        const featured = filtered.slice(0, 3);
        const remaining = filtered.slice(3);
        
        renderHeroGrid(featured);
        renderStandardGrid(remaining);
    }
}

// Render Featured Layout (Hero + 2 side items)
function renderHeroGrid(featuredArticles) {
    const mainCol = document.getElementById("hero-featured-col");
    const sideCol = document.getElementById("hero-side-col");
    
    if (!mainCol || !sideCol) return;
    
    // 1st Main Feature
    if (featuredArticles[0]) {
        const art = featuredArticles[0];
        const isSaved = appState.bookmarks.includes(art.id);
        
        mainCol.innerHTML = `
            <div class="hero-featured glass-panel octa-clip" onclick="openArticleReader(${art.id})">
                <img src="${art.image}" alt="${art.title}">
                <div class="hero-overlay">
                    <span class="badge-tag">${art.categoryName}</span>
                    <h1>${art.title}</h1>
                    <p>${art.summary}</p>
                    <div class="meta-row">
                        <div class="meta-item">
                            <span class="avatar">${art.authorInitials}</span>
                            <span class="author-name">${art.author}</span>
                        </div>
                        <div class="meta-item">
                            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/></svg>
                            <span>${art.readTime}</span>
                        </div>
                        <div class="meta-item">
                            <svg viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                            <span>${art.views} views</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else {
        mainCol.innerHTML = "";
    }
    
    // 2nd and 3rd Side Features
    let sideHtml = "";
    const sideArticles = featuredArticles.slice(1, 3);
    
    sideArticles.forEach(art => {
        sideHtml += `
            <div class="hero-side-card glass-panel octa-clip" onclick="openArticleReader(${art.id})">
                <img src="${art.image}" alt="${art.title}">
                <div class="hero-side-overlay">
                    <span class="badge-tag">${art.categoryName}</span>
                    <h2>${art.title}</h2>
                    <div class="meta-row">
                        <div class="meta-item">
                            <span class="avatar">${art.authorInitials}</span>
                            <span class="author-name">${art.author}</span>
                        </div>
                        <div class="meta-item">
                            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/></svg>
                            <span>${art.readTime}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    sideCol.innerHTML = sideHtml;
}

// Render News Card Grid
function renderStandardGrid(articles) {
    const grid = document.getElementById("news-grid");
    if (!grid) return;
    
    grid.innerHTML = articles.map(art => {
        const isSaved = appState.bookmarks.includes(art.id);
        const bookmarkClass = isSaved ? "active" : "";
        
        return `
            <article class="news-card glass-panel octa-clip">
                <div class="card-img-wrap" onclick="openArticleReader(${art.id})">
                    <img src="${art.image}" alt="${art.title}">
                    <div style="position: absolute; top: 12px; left: 12px;">
                        <span class="badge-tag">${art.categoryName}</span>
                    </div>
                </div>
                <div class="card-content">
                    <h3 onclick="openArticleReader(${art.id})">${art.title}</h3>
                    <p>${art.summary}</p>
                    <div class="card-footer">
                        <div class="card-author">
                            <span class="avatar">${art.authorInitials}</span>
                            <span class="author-name">${art.author}</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 14px;">
                            <span style="font-size: 0.75rem; color: var(--text-secondary);">${art.readTime}</span>
                            <button class="bookmark-toggle ${bookmarkClass}" onclick="handleBookmarkToggle(event, ${art.id})">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        `;
    }).join("");
}

// Render empty state
function renderEmptyState() {
    const grid = document.getElementById("news-grid");
    if (!grid) return;
    
    grid.innerHTML = `
        <div class="empty-state glass-panel octa-clip">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.637 10.637Z" />
            </svg>
            <h3>No Articles Found</h3>
            <p>We couldn't find any news articles matching "${appState.searchQuery}". Try a different search term or category.</p>
        </div>
    `;
}

// --- Bookmark Handling ---
function handleBookmarkToggle(event, id) {
    event.stopPropagation();
    const index = appState.bookmarks.indexOf(id);
    
    if (index === -1) {
        appState.bookmarks.push(id);
    } else {
        appState.bookmarks.splice(index, 1);
    }
    
    saveBookmarks();
    updateUI();
    renderBookmarksPanelList();
}

// Open/Close Bookmarks Drawer
function toggleBookmarksPanel() {
    const panel = document.getElementById("bookmarks-panel");
    if (!panel) return;
    
    panel.classList.toggle("open");
    if (panel.classList.contains("open")) {
        renderBookmarksPanelList();
    }
}

// Render Bookmark Items inside panel
function renderBookmarksPanelList() {
    const listContainer = document.getElementById("bookmarks-list");
    if (!listContainer) return;
    
    if (appState.bookmarks.length === 0) {
        listContainer.innerHTML = `
            <div class="bookmarks-empty">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                </svg>
                <p>Your bookmarked stories will appear here.</p>
            </div>
        `;
        return;
    }
    
    const savedArticles = ARTICLES_DATABASE.filter(art => appState.bookmarks.includes(art.id));
    
    listContainer.innerHTML = savedArticles.map(art => `
        <div class="bookmark-item" onclick="openArticleReader(${art.id}); toggleBookmarksPanel();">
            <img src="${art.image}" alt="${art.title}" class="bookmark-img">
            <div class="bookmark-info">
                <h4>${art.title}</h4>
                <span>${art.readTime} • ${art.categoryName}</span>
            </div>
        </div>
    `).join("");
}

// --- Article Reader Modal Controller ---
function openArticleReader(id) {
    const art = ARTICLES_DATABASE.find(a => a.id === id);
    if (!art) return;
    
    appState.currentReadingArticle = art;
    
    // Increment view count simulation
    art.views += 1;
    
    // Populating modal fields
    document.getElementById("modal-reading-bar").style.width = "0%";
    document.getElementById("modal-category").textContent = art.categoryName;
    document.getElementById("modal-title").textContent = art.title;
    document.getElementById("modal-author").textContent = art.author;
    document.getElementById("modal-author-avatar").textContent = art.authorInitials;
    document.getElementById("modal-date").textContent = art.date;
    document.getElementById("modal-read-time").textContent = art.readTime;
    document.getElementById("modal-views").textContent = `${art.views} views`;
    
    const imageContainer = document.getElementById("modal-image");
    if (imageContainer) {
        imageContainer.src = art.image;
        imageContainer.alt = art.title;
    }
    
    document.getElementById("modal-content-text").innerHTML = art.content;
    
    // Update comments section for this specific article
    renderCommentsList(id);
    
    // Render related articles
    renderRelatedArticles(art);
    
    // Handle Text-to-Speech initial setup
    resetTTS();
    
    // Display Modal
    const modal = document.getElementById("modal-overlay");
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Prevent background body scroll
}

function closeArticleReader() {
    stopTTS();
    const modal = document.getElementById("modal-overlay");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    appState.currentReadingArticle = null;
    updateUI(); // Redraw UI to reflect incremented views count
}

// Reading progress bar logic
function updateReadingProgress() {
    const modalOverlay = document.getElementById("modal-overlay");
    if (!modalOverlay) return;
    
    const scrollTop = modalOverlay.scrollTop;
    const scrollHeight = modalOverlay.scrollHeight - modalOverlay.clientHeight;
    
    if (scrollHeight > 0) {
        const percentage = (scrollTop / scrollHeight) * 100;
        document.getElementById("modal-reading-bar").style.width = `${percentage}%`;
    }
}

// Related articles computation
function renderRelatedArticles(currentArt) {
    const relatedContainer = document.getElementById("modal-related-grid");
    if (!relatedContainer) return;
    
    // Pick 2 articles from same category or general database
    let related = ARTICLES_DATABASE.filter(a => a.category === currentArt.category && a.id !== currentArt.id);
    if (related.length < 2) {
        const fillers = ARTICLES_DATABASE.filter(a => a.id !== currentArt.id && !related.includes(a));
        related = [...related, ...fillers].slice(0, 2);
    }
    
    relatedContainer.innerHTML = related.map(art => `
        <div class="related-card" onclick="openArticleReader(${art.id})">
            <img src="${art.image}" alt="${art.title}" class="related-img">
            <div class="related-info">
                <h5>${art.title}</h5>
                <span>${art.readTime} • ${art.categoryName}</span>
            </div>
        </div>
    `).join("");
}

// --- Text-to-Speech (TTS) Integration ---
function toggleTTS() {
    if (!appState.currentReadingArticle) return;
    
    const playBtn = document.getElementById("tts-play");
    
    if (ttsController.isPlaying) {
        if (ttsController.isPaused) {
            // Resume
            ttsController.synthesis.resume();
            ttsController.isPaused = false;
            playBtn.innerHTML = `
                <svg viewBox="0 0 24 24"><path d="M9 19H7V5h2v14zm8-14h-2v14h2V5z"/></svg>
                Pause Reader
            `;
        } else {
            // Pause
            ttsController.synthesis.pause();
            ttsController.isPaused = true;
            playBtn.innerHTML = `
                <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                Resume Reader
            `;
        }
    } else {
        // Start Speaking
        // Build readable text: Title, author, content without HTML tags
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = appState.currentReadingArticle.content;
        const textContent = tempDiv.innerText || tempDiv.textContent;
        
        const fullSpeechText = `${appState.currentReadingArticle.title}. Written by ${appState.currentReadingArticle.author}. ${textContent}`;
        
        ttsController.utterance = new SpeechSynthesisUtterance(fullSpeechText);
        ttsController.utterance.rate = 1.0; // standard speaking rate
        
        ttsController.utterance.onend = () => {
            resetTTS();
        };
        
        ttsController.utterance.onerror = () => {
            resetTTS();
        };
        
        ttsController.isPlaying = true;
        ttsController.isPaused = false;
        
        ttsController.synthesis.speak(ttsController.utterance);
        
        playBtn.innerHTML = `
            <svg viewBox="0 0 24 24"><path d="M9 19H7V5h2v14zm8-14h-2v14h2V5z"/></svg>
            Pause Reader
        `;
    }
}

function stopTTS() {
    if (ttsController.synthesis) {
        ttsController.synthesis.cancel();
    }
    resetTTS();
}

function resetTTS() {
    ttsController.isPlaying = false;
    ttsController.isPaused = false;
    ttsController.utterance = null;
    
    const playBtn = document.getElementById("tts-play");
    if (playBtn) {
        playBtn.innerHTML = `
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            Listen Article
        `;
    }
}

// --- Comments System Mock ---
// Global store of custom comments
let articlesComments = {
    1: [
        { author: "Alex Mercer", text: "Incredible read. Activation patching could bridge the gap in neural alignment.", date: "2 hours ago" },
        { author: "FutureCoder", text: "We need more model interpretability tools open-sourced immediately.", date: "4 hours ago" }
    ],
    2: [
        { author: "Elon Jr", text: "Using in-situ regolith for printing shells saves tons of payload weight. Smart approach.", date: "1 day ago" }
    ],
    3: [
        { author: "SecOps_Alpha", text: "Smart grids have been vulnerable for years due to outdated legacy controllers. Scary to see Eclipse-9 active.", date: "12 hours ago" }
    ]
};

function renderCommentsList(articleId) {
    const list = document.getElementById("comments-list");
    if (!list) return;
    
    const comments = articlesComments[articleId] || [];
    
    if (comments.length === 0) {
        list.innerHTML = `<p style="color: var(--text-secondary); font-size: 0.9rem; text-align: center; margin-top: 10px;">No comments yet. Be the first to start the conversation!</p>`;
        return;
    }
    
    list.innerHTML = comments.map(c => `
        <div class="comment-card glass-panel">
            <div class="avatar">${c.author.substring(0,2).toUpperCase()}</div>
            <div class="comment-main">
                <h6>${c.author}</h6>
                <span class="comment-date">${c.date}</span>
                <p>${c.text}</p>
            </div>
        </div>
    `).join("");
}

function handleCommentSubmit() {
    if (!appState.currentReadingArticle) return;
    
    const nameInput = document.getElementById("commenter-name-input");
    const textInput = document.getElementById("comment-textarea");
    
    const author = nameInput.value.trim() || "Anonymous Reader";
    const text = textInput.value.trim();
    
    if (!text) return; // Comment cannot be empty
    
    const artId = appState.currentReadingArticle.id;
    if (!articlesComments[artId]) {
        articlesComments[artId] = [];
    }
    
    articlesComments[artId].unshift({
        author: author,
        text: text,
        date: "Just now"
    });
    
    // Clear textarea, retain name for convenience
    textInput.value = "";
    
    renderCommentsList(artId);
}

// --- Widgets Functionality (Newsletter & Poll) ---
function setupWidgets() {
    // Newsletter Submit Event
    const newsSubmitBtn = document.getElementById("newsletter-btn");
    const newsEmailInput = document.getElementById("newsletter-email");
    const newsSuccessMsg = document.getElementById("newsletter-success");
    const newsFormContent = document.getElementById("newsletter-form-content");
    
    if (newsSubmitBtn && newsEmailInput && newsSuccessMsg && newsFormContent) {
        newsSubmitBtn.addEventListener("click", () => {
            const val = newsEmailInput.value.trim();
            if (!val || !val.includes("@")) {
                newsEmailInput.style.borderColor = "var(--accent-red)";
                return;
            }
            
            // Trigger animation fadeout/fadein
            newsFormContent.style.display = "none";
            newsSuccessMsg.style.display = "block";
        });
    }
    
    // Quick Poll Click events
    const pollOptionsWrap = document.getElementById("poll-options");
    if (!pollOptionsWrap) return;
    
    const pollOptions = pollOptionsWrap.querySelectorAll(".poll-opt");
    
    // Vote weight values
    let pollVotes = {
        1: 65, // AI Integration
        2: 24, // Quantum Algorithms
        3: 11  // Space Web
    };
    
    pollOptions.forEach(opt => {
        opt.addEventListener("click", (e) => {
            if (pollOptionsWrap.classList.contains("voted")) return;
            
            const selectedId = parseInt(e.currentTarget.dataset.val);
            
            // Increment the chosen option
            pollVotes[selectedId] += 1;
            
            // Compute total
            const total = Object.values(pollVotes).reduce((a,b) => a + b, 0);
            
            // Update widths and percentages
            pollOptions.forEach(o => {
                const optId = parseInt(o.dataset.val);
                const pct = Math.round((pollVotes[optId] / total) * 100);
                
                // Set bar width
                const bar = o.querySelector(".poll-opt-bg");
                bar.style.width = `${pct}%`;
                
                // Show percentage text
                const pctText = o.querySelector(".poll-opt-pct");
                pctText.textContent = `${pct}%`;
            });
            
            pollOptionsWrap.classList.add("voted");
        });
    });
}

// ===== Product Data - Deduplicated from 7 Reference Websites =====
const productCatalog = [
    // ===== PNEUMATIC FITTINGS =====
    {
        id: 1,
        name: "Pneumatic Straight Connector",
        category: "pneumatic-fittings",
        type: "1/4 inch",
        description: "High-quality pneumatic straight connector for air lines",
        specs: "Material: Brass, Thread: 1/4 NPT, Pressure: 0-20 bar",
        price: "₹85 - ₹120",
        emoji: "🔌"
    },
    {
        id: 2,
        name: "Pneumatic Male Elbow Fitting",
        category: "pneumatic-fittings",
        type: "1/4 inch",
        description: "90-degree male elbow for directional air line connections",
        specs: "Material: Aluminum, Angle: 90°, Pressure: 0-25 bar",
        price: "₹95 - ₹135",
        emoji: "🔌"
    },
    {
        id: 3,
        name: "Pneumatic Tee Junction",
        category: "pneumatic-fittings",
        type: "1/4 inch",
        description: "T-shaped pneumatic fitting for branching air lines",
        specs: "Material: Brass, Configuration: T-type, Pressure: 0-20 bar",
        price: "₹110 - ₹150",
        emoji: "🔌"
    },
    {
        id: 4,
        name: "PU Pneumatic Tube Fittings",
        category: "pneumatic-fittings",
        type: "Various Sizes",
        description: "Polyurethane tube fittings for all pneumatic connections",
        specs: "Material: PU, Sizes: 6mm, 8mm, 10mm, Temperature: -40°C to 130°C",
        price: "₹20 - ₹45",
        emoji: "🔌"
    },
    {
        id: 5,
        name: "Quick Disconnect Couplers",
        category: "pneumatic-fittings",
        type: "1/4 inch",
        description: "Instant connect/disconnect pneumatic couplers",
        specs: "Material: Steel, Type: Flat Face/Poppet, Pressure: 0-30 bar",
        price: "₹150 - ₹200",
        emoji: "🔌"
    },
    {
        id: 6,
        name: "Pneumatic Bulk Head Connector",
        category: "pneumatic-fittings",
        type: "1/2 inch",
        description: "Bulk head connector for through-panel pneumatic connections",
        specs: "Material: Brass, Panel Size: Various, Pressure: 0-25 bar",
        price: "₹75 - ₹110",
        emoji: "🔌"
    },
    {
        id: 7,
        name: "Pneumatic Swivel Elbow",
        category: "pneumatic-fittings",
        type: "1/4 inch",
        description: "Positionable swivel elbow for flexible air line routing",
        specs: "Material: Brass, Angle: 90° adjustable, Pressure: 0-20 bar",
        price: "₹120 - ₹160",
        emoji: "🔌"
    },
    {
        id: 8,
        name: "Pneumatic Reducer",
        category: "pneumatic-fittings",
        type: "1/2 to 1/4 inch",
        description: "Size reducer for connecting different diameter lines",
        specs: "Material: Aluminum, Reducer Ratio: 1/2x1/4, Pressure: 0-25 bar",
        price: "₹65 - ₹100",
        emoji: "🔌"
    },

    // ===== PIPE FITTINGS =====
    {
        id: 9,
        name: "SS 304 90 Degree Elbow",
        category: "pipe-fittings",
        type: "15-250 NB",
        description: "Stainless steel 90-degree seamless elbow for piping systems",
        specs: "Material: SS 304, Standards: ASTM A 403 WP304, Schedule: 10/40",
        price: "₹58 - ₹17,500",
        emoji: "⚙️"
    },
    {
        id: 10,
        name: "SS 316 90 Degree Elbow",
        category: "pipe-fittings",
        type: "15-250 NB",
        description: "Premium stainless steel 316 elbow with higher corrosion resistance",
        specs: "Material: SS 316L, Standards: ASTM A 403 WP316, Schedule: 10/40",
        price: "₹68 - ₹18,500",
        emoji: "⚙️"
    },
    {
        id: 11,
        name: "SS 304 Seamless Tee",
        category: "pipe-fittings",
        type: "15-250 NB",
        description: "Stainless steel T-junction for three-way pipe connections",
        specs: "Material: SS 304, Shape: Tee, Schedule: 10/40",
        price: "₹185 - ₹32,000",
        emoji: "⚙️"
    },
    {
        id: 12,
        name: "SS 304 Seamless Reducer",
        category: "pipe-fittings",
        type: "15-250 NB",
        description: "Concentric or eccentric reducer for pipe size transitions",
        specs: "Material: SS 304, Configurations: Concentric/Eccentric, Schedule: 10/40",
        price: "₹125 - ₹6,400",
        emoji: "⚙️"
    },
    {
        id: 13,
        name: "Carbon Steel Pipe Fittings",
        category: "pipe-fittings",
        type: "Various",
        description: "Carbon steel fittings for high-pressure applications",
        specs: "Material: Carbon Steel, Grades: A234 WPB, Schedule: 40/80",
        price: "₹45 - ₹5,000",
        emoji: "⚙️"
    },
    {
        id: 14,
        name: "Butt Weld Pipe Fittings",
        category: "pipe-fittings",
        type: "Various",
        description: "Seamless butt weld fittings for permanent connections",
        specs: "Material: SS/Carbon Steel, Standards: ASME B 16.9",
        price: "₹80 - ₹8,000",
        emoji: "⚙️"
    },
    {
        id: 15,
        name: "Flanged Pipe Fittings",
        category: "pipe-fittings",
        type: "Various",
        description: "Flanged connections for easy maintenance and disassembly",
        specs: "Material: SS/Carbon Steel, Flange Type: Slip-on/Weld Neck",
        price: "₹120 - ₹6,500",
        emoji: "⚙️"
    },
    {
        id: 16,
        name: "Threaded Pipe Fittings",
        category: "pipe-fittings",
        type: "1/4 to 2 inch",
        description: "NPT threaded fittings for quick screw connections",
        specs: "Material: Brass/SS, Thread: NPT/BSP, Pressure: 0-300 bar",
        price: "₹35 - ₹300",
        emoji: "⚙️"
    },

    // ===== VALVES & REGULATORS =====
    {
        id: 17,
        name: "Pressure Regulator",
        category: "valves",
        type: "Air/Gas",
        description: "Precision pressure regulator for controlled air supply",
        specs: "Type: Direct-acting/Pilot-operated, Range: 0-10 bar, Flow: 0-1000 L/min",
        price: "₹450 - ₹2,500",
        emoji: "🎛️"
    },
    {
        id: 18,
        name: "Solenoid Valve 2-Way",
        category: "valves",
        type: "Pneumatic",
        description: "2-way solenoid valve for on-off pneumatic control",
        specs: "Coil: 220V AC, Port: 1/4 inch, Pressure: 0-8 bar",
        price: "₹800 - ₹1,500",
        emoji: "🎛️"
    },
    {
        id: 19,
        name: "Solenoid Valve 3-Way",
        category: "valves",
        type: "Pneumatic",
        description: "3-way directional control solenoid valve",
        specs: "Coil: 220V/110V AC/DC, Port: 1/4 inch, Pressure: 0-10 bar",
        price: "₹1,200 - ₹2,000",
        emoji: "🎛️"
    },
    {
        id: 20,
        name: "Check Valve",
        category: "valves",
        type: "Pneumatic",
        description: "One-way check valve for preventing backflow",
        specs: "Material: Brass/SS, Port: 1/4 inch, Crack Pressure: 0.3 bar",
        price: "₹150 - ₹400",
        emoji: "🎛️"
    },
    {
        id: 21,
        name: "Double Acting Cylinder",
        category: "valves",
        type: "Pneumatic Actuator",
        description: "Double-acting pneumatic cylinder for push-pull motion",
        specs: "Bore: 25-100mm, Stroke: 50-500mm, Pressure: 0-10 bar",
        price: "₹2,000 - ₹8,000",
        emoji: "🎛️"
    },
    {
        id: 22,
        name: "Pressure Switch",
        category: "valves",
        type: "Electronic",
        description: "Automatic pressure-activated electrical switch",
        specs: "Range: 0.5-10 bar, Electrical: AC/DC, IP Rating: IP65",
        price: "₹600 - ₹1,200",
        emoji: "🎛️"
    },
    {
        id: 23,
        name: "Needle Valve",
        category: "valves",
        type: "Instrumentation",
        description: "Fine metering valve for precise flow control",
        specs: "Material: Stainless Steel, Port: 1/4 inch, Pressure: 0-400 bar",
        price: "₹350 - ₹1,000",
        emoji: "🎛️"
    },
    {
        id: 24,
        name: "Ball Valve",
        category: "valves",
        type: "Multi-purpose",
        description: "Full-port ball valve for flow isolation and control",
        specs: "Material: Brass/SS, Size: 1/4 to 2 inch, Pressure: 0-350 bar",
        price: "₹200 - ₹2,500",
        emoji: "🎛️"
    },

    // ===== TUBES & HOSES =====
    {
        id: 25,
        name: "PU Pneumatic Tube (Nylon)",
        category: "tubes",
        type: "6mm, 8mm, 10mm",
        description: "Lightweight polyurethane tubing for pneumatic systems",
        specs: "Material: Polyurethane, Sizes: 4-16mm, Temperature: -40°C to +130°C",
        price: "₹1.50 - ₹4 per meter",
        emoji: "📏"
    },
    {
        id: 26,
        name: "Spiral PU Tube",
        category: "tubes",
        type: "5m & 10m rolls",
        description: "Coiled polyurethane tube for space-saving storage and routing",
        specs: "Material: PU, Sizes: 6-12mm, Coil Length: 5m/10m",
        price: "₹150 - ₹600",
        emoji: "📏"
    },
    {
        id: 27,
        name: "Metal Coolant Pipe",
        category: "tubes",
        type: "Various Sizes",
        description: "Stainless steel pipe for coolant and fluid circulation",
        specs: "Material: SS 304/316, Sizes: 6-25mm, Pressure: 0-50 bar",
        price: "₹100 - ₹800",
        emoji: "📏"
    },
    {
        id: 28,
        name: "Plastic Air Gun",
        category: "tubes",
        type: "Standard",
        description: "Lightweight pneumatic air gun for cleaning and drying",
        specs: "Material: ABS Plastic, Flow Rate: 150-200 L/min, Pressure: 6 bar",
        price: "₹200 - ₹400",
        emoji: "📏"
    },
    {
        id: 29,
        name: "Metal Air Gun",
        category: "tubes",
        type: "Heavy Duty",
        description: "Durable metal air gun for industrial cleaning applications",
        specs: "Material: Aluminum/Steel, Flow Rate: 200-250 L/min, Pressure: 8 bar",
        price: "₹500 - ₹900",
        emoji: "📏"
    },
    {
        id: 30,
        name: "High Pressure Hose",
        category: "tubes",
        type: "Various",
        description: "Reinforced hose for high-pressure pneumatic and hydraulic systems",
        specs: "Material: Rubber/Nylon, Sizes: 1/4 to 1 inch, Pressure: 0-350 bar",
        price: "₹200 - ₹3,000",
        emoji: "📏"
    },
    {
        id: 31,
        name: "Hose Coupling",
        category: "tubes",
        type: "Various",
        description: "Quick disconnect couplings for hose connections",
        specs: "Material: Brass/Steel, Sizes: 1/4 to 1 inch, Pressure: 0-50 bar",
        price: "₹75 - ₹500",
        emoji: "📏"
    },

    // ===== ASBESTOS & NON-ASBESTOS SHEETS =====
    {
        id: 32,
        name: "Compressed Asbestos Sheet (CAF)",
        category: "sheets",
        type: "Standard Grade",
        description: "Industrial-grade compressed asbestos fiber gasket material",
        specs: "Material: Asbestos Fiber, Thickness: 1-5mm, Density: 1.4-1.5 g/cm³",
        price: "₹150 - ₹600 per sheet",
        emoji: "📋"
    },
    {
        id: 33,
        name: "Non-Asbestos Gasket Sheet",
        category: "sheets",
        type: "Eco-Friendly",
        description: "Safe non-asbestos alternative for all gasket applications",
        specs: "Material: Aramid Fiber, Thickness: 1-5mm, Density: 1.3-1.6 g/cm³",
        price: "₹200 - ₹700 per sheet",
        emoji: "📋"
    },
    {
        id: 34,
        name: "High Temperature Gasket Sheet",
        category: "sheets",
        type: "Heat Resistant",
        description: "Specially formulated sheet for high-temperature sealing",
        specs: "Material: Aramid/Ceramic, Temp Range: -40°C to 300°C",
        price: "₹400 - ₹1,200 per sheet",
        emoji: "📋"
    },
    {
        id: 35,
        name: "Oil-Resistant Gasket Sheet",
        category: "sheets",
        type: "Chemical Resistant",
        description: "Enhanced formula for oil and chemical resistance",
        specs: "Material: Aramid/Nitrile, Fluid Resistance: Oil/Fuel/Coolant",
        price: "₹300 - ₹900 per sheet",
        emoji: "📋"
    },
    {
        id: 36,
        name: "Compressed Joint Sheet (CJ)",
        category: "sheets",
        type: "Standard",
        description: "Versatile compressed joint sheet for general sealing applications",
        specs: "Material: Fiber Composite, Thickness: 2-3mm, Pressure: 0-25 bar",
        price: "₹100 - ₹500 per sheet",
        emoji: "📋"
    },
    {
        id: 37,
        name: "PTFE Coated Gasket Sheet",
        category: "sheets",
        type: "Specialty",
        description: "PTFE-faced gasket for ultra-low emission applications",
        specs: "Material: PTFE/Composite, Coated Surface: Yes, Emissions: Class I",
        price: "₹500 - ₹1,500 per sheet",
        emoji: "📋"
    },

    // ===== ADDITIONAL PRODUCTS =====
    {
        id: 38,
        name: "Pressure Gauge",
        category: "pneumatic-fittings",
        type: "0-10 bar",
        description: "Analog pressure gauge with pointer for system monitoring",
        specs: "Type: Liquid-filled, Range: 0-10/25/40 bar, Dial: 100mm",
        price: "₹350 - ₹800",
        emoji: "🔌"
    },
    {
        id: 39,
        name: "Air Filter Unit",
        category: "pneumatic-fittings",
        type: "Combination",
        description: "Complete filter, regulator, and lubricator unit (FRL)",
        specs: "Flow Rate: 0-1000 L/min, Filtering: 5 microns, Port: 1/4 inch",
        price: "₹1,500 - ₹3,500",
        emoji: "🔌"
    },
    {
        id: 40,
        name: "Silencer Exhaust Muffler",
        category: "pneumatic-fittings",
        type: "Sintered",
        description: "Noise-reducing muffler for pneumatic exhaust vents",
        specs: "Material: Sintered Bronze, Flow: 50-200 L/min, Port: 1/4 inch",
        price: "₹200 - ₹500",
        emoji: "🔌"
    }
];

// ===== Initialize Products on Page Load =====
document.addEventListener('DOMContentLoaded', function() {
    const productsGrid = document.getElementById('productsGrid');
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');

    if (!productsGrid) return;

    // Display all products initially
    displayProducts(productCatalog);

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterAndDisplayProducts();
        });
    }

    // Category filter functionality
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            filterAndDisplayProducts();
        });
    }

    function filterAndDisplayProducts() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        const selectedCategory = categoryFilter ? categoryFilter.value : 'all';

        const filtered = productCatalog.filter(product => {
            const matchesSearch = 
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm) ||
                product.specs.toLowerCase().includes(searchTerm);

            const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });

        displayProducts(filtered);
    }

    function displayProducts(products) {
        productsGrid.innerHTML = '';

        if (products.length === 0) {
            productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #666; padding: 40px;">No products found. Please try a different search or filter.</p>';
            return;
        }

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-image">${product.emoji}</div>
                <div class="product-body">
                    <div class="product-category">${product.category.replace('-', ' ')}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-specs">${product.specs}</div>
                    <div class="product-footer">
                        <span class="product-price"><strong>${product.price}</strong></span>
                        <button class="product-btn" data-product="${product.name}">Inquire</button>
                    </div>
                </div>
            `;

            // Add click handler to inquire button
            const inquireBtn = productCard.querySelector('.product-btn');
            inquireBtn.addEventListener('click', function() {
                const productName = this.getAttribute('data-product');
                window.location.href = `contact.html?product=${encodeURIComponent(productName)}`;
            });

            productsGrid.appendChild(productCard);
        });
    }
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = productCatalog;
}

const products = [
            // --- FRESH PRODUCE (10 Items) ---
            { id: 1, cat: 'Fresh Produce', name: 'Alphonso Mango', rating: 4.9, reviews: '2.1k', img: 'https://loremflickr.com/400/400/mango,fruit/all', variants: [{ q: '2 Units', p: 450 }, { q: '6 Units', p: 1200 }] },
            { id: 2, cat: 'Fresh Produce', name: 'Organic Broccoli', rating: 4.7, reviews: '800', img: 'https://loremflickr.com/400/400/broccoli,vegetable/all', variants: [{ q: '250g', p: 85 }, { q: '500g', p: 160 }] },
            { id: 3, cat: 'Fresh Produce', name: 'Ooty Carrots', rating: 4.8, reviews: '1.4k', img: 'https://loremflickr.com/400/400/carrot,vegetable/all', variants: [{ q: '500g', p: 40 }, { q: '1kg', p: 75 }] },
            { id: 13, cat: 'Fresh Produce', name: 'Red Onion', rating: 4.5, reviews: '5k', img: 'https://loremflickr.com/400/400/onion,vegetable/all', variants: [{ q: '1kg', p: 35 }, { q: '5kg', p: 150 }] },
            { id: 14, cat: 'Fresh Produce', name: 'Golden Bananas', rating: 4.9, reviews: '10k', img: 'https://loremflickr.com/400/400/banana,fruit/all', variants: [{ q: '6 Units', p: 30 }, { q: '12 Units', p: 55 }] },
            { id: 15, cat: 'Fresh Produce', name: 'Hybrid Tomato', rating: 4.4, reviews: '3k', img: 'https://loremflickr.com/400/400/tomato,vegetable/all', variants: [{ q: '500g', p: 20 }, { q: '1kg', p: 38 }] },
            { id: 16, cat: 'Fresh Produce', name: 'Seedless Grapes', rating: 4.7, reviews: '1.2k', img: 'https://loremflickr.com/400/400/grapes,fruit/all', variants: [{ q: '500g', p: 90 }] },
            { id: 18, cat: 'Fresh Produce', name: 'Pomegranate', rating: 4.6, reviews: '600', img: 'https://loremflickr.com/400/400/pomegranate,fruit/all', variants: [{ q: '2 Units', p: 140 }] },
            { id: 17, cat: 'Fresh Produce', name: 'Fresh Spinach', rating: 4.8, reviews: '900', img: 'https://loremflickr.com/400/400/spinach,leafy/all', variants: [{ q: '1 Bunch', p: 15 }] },
            { id: 19, cat: 'Fresh Produce', name: 'Cucumber', rating: 4.5, reviews: '2k', img: 'https://loremflickr.com/400/400/cucumber,vegetable/all', variants: [{ q: '500g', p: 25 }] },

            // --- DAIRY & EGGS (10 Items) ---
            { id: 4, cat: 'Dairy', name: 'Pure Cow Milk', rating: 4.9, reviews: '12k', img: 'https://loremflickr.com/400/400/milk,dairy/all', variants: [{ q: '500ml', p: 33 }, { q: '1L', p: 64 }] },
            { id: 5, cat: 'Dairy', name: 'Amul Salted Butter', rating: 4.6, reviews: '9k', img: 'https://loremflickr.com/400/400/butter,dairy/all', variants: [{ q: '100g', p: 56 }, { q: '500g', p: 265 }] },
            { id: 20, cat: 'Dairy', name: 'Greek Yogurt', rating: 4.8, reviews: '1.1k', img: 'https://loremflickr.com/400/400/yogurt,dairy/all', variants: [{ q: '200g', p: 70 }] },
            { id: 21, cat: 'Dairy', name: 'Fresh Paneer', rating: 4.7, reviews: '4k', img: 'https://loremflickr.com/400/400/paneer,cheese/all', variants: [{ q: '200g', p: 95 }, { q: '500g', p: 230 }] },
            { id: 22, cat: 'Dairy', name: 'Brown Eggs', rating: 4.9, reviews: '5k', img: 'https://loremflickr.com/400/400/eggs,dairy/all', variants: [{ q: '6 Units', p: 55 }, { q: '12 Units', p: 105 }] },
            { id: 23, cat: 'Dairy', name: 'Cheddar Cheese Slices', rating: 4.5, reviews: '2k', img: 'https://loremflickr.com/400/400/cheese,slice/all', variants: [{ q: '100g', p: 140 }] },
            { id: 24, cat: 'Dairy', name: 'Soy Milk (Vanilla)', rating: 4.3, reviews: '600', img: 'https://loremflickr.com/400/400/soymilk,bottle/all', variants: [{ q: '1L', p: 180 }] },
            { id: 25, cat: 'Dairy', name: 'Mozzarella Shredded', rating: 4.7, reviews: '1.5k', img: 'https://loremflickr.com/400/400/mozzarella,cheese/all', variants: [{ q: '200g', p: 210 }] },
            { id: 26, cat: 'Dairy', name: 'Probiotic Drink', rating: 4.8, reviews: '3k', img: 'https://loremflickr.com/400/400/drink,bottle/all', variants: [{ q: '5 Units', p: 60 }] },
            { id: 27, cat: 'Dairy', name: 'Dairy Whitener', rating: 4.2, reviews: '2k', img: 'https://loremflickr.com/400/400/milkpowder,dairy/all', variants: [{ q: '500g', p: 220 }] },

            // --- BAKERY (10 Items) ---
            { id: 6, cat: 'Bakery', name: 'Whole Wheat Bread', rating: 4.5, reviews: '3k', img: 'https://loremflickr.com/400/400/bread,bakery/all', variants: [{ q: '400g', p: 45 }] },
            { id: 7, cat: 'Bakery', name: 'Chocolate Muffins', rating: 4.8, reviews: '1.2k', img: 'https://loremflickr.com/400/400/muffin,cake/all', variants: [{ q: '2 Units', p: 90 }, { q: '4 Units', p: 160 }] },
            { id: 30, cat: 'Bakery', name: 'Butter Croissants', rating: 4.9, reviews: '800', img: 'https://loremflickr.com/400/400/croissant,bakery/all', variants: [{ q: '2 Units', p: 120 }] },
            { id: 31, cat: 'Bakery', name: 'Garlic Bread Sticks', rating: 4.6, reviews: '2k', img: 'https://loremflickr.com/400/400/garlic-bread,bakery/all', variants: [{ q: '150g', p: 75 }] },
            { id: 32, cat: 'Bakery', name: 'Multi-grain Cookies', rating: 4.7, reviews: '3k', img: 'https://loremflickr.com/400/400/cookie,biscuit/all', variants: [{ q: '200g', p: 110 }] },
            { id: 33, cat: 'Bakery', name: 'Burger Buns', rating: 4.4, reviews: '1.5k', img: 'https://loremflickr.com/400/400/bun,bread/all', variants: [{ q: '2 Units', p: 40 }] },
            { id: 34, cat: 'Bakery', name: 'Pav (Set of 6)', rating: 4.8, reviews: '4k', img: 'https://loremflickr.com/400/400/pav,bread/all', variants: [{ q: '6 Units', p: 35 }] },
            { id: 35, cat: 'Bakery', name: 'Blueberry Cake', rating: 4.9, reviews: '500', img: 'https://loremflickr.com/400/400/cake,blueberry/all', variants: [{ q: '500g', p: 550 }] },
            { id: 36, cat: 'Bakery', name: 'Plain Tortillas', rating: 4.3, reviews: '900', img: 'https://loremflickr.com/400/400/tortilla,wrap/all', variants: [{ q: '6 Units', p: 95 }] },
            { id: 37, cat: 'Bakery', name: 'Fruit Bun', rating: 4.5, reviews: '1.1k', img: 'https://loremflickr.com/400/400/fruitbun,bakery/all', variants: [{ q: '1 Unit', p: 25 }] },

            // --- PANTRY STAPLES (10 Items) ---
            { id: 8, cat: 'Pantry', name: 'Basmati Rice', rating: 4.7, reviews: '5k', img: 'https://loremflickr.com/400/400/rice,grain/all', variants: [{ q: '1kg', p: 130 }, { q: '5kg', p: 610 }] },
            { id: 9, cat: 'Pantry', name: 'Organic Turmeric', rating: 4.9, reviews: '400', img: 'https://loremflickr.com/400/400/turmeric,spice/all', variants: [{ q: '100g', p: 45 }, { q: '200g', p: 80 }] },
            { id: 40, cat: 'Pantry', name: 'Sunflower Oil', rating: 4.6, reviews: '8k', img: 'https://loremflickr.com/400/400/cooking-oil,bottle/all', variants: [{ q: '1L', p: 145 }, { q: '5L', p: 700 }] },
            { id: 41, cat: 'Pantry', name: 'Wheat Flour (Atta)', rating: 4.8, reviews: '15k', img: 'https://loremflickr.com/400/400/flour,bag/all', variants: [{ q: '5kg', p: 260 }, { q: '10kg', p: 510 }] },
            { id: 42, cat: 'Pantry', name: 'Toor Dal', rating: 4.7, reviews: '4k', img: 'https://loremflickr.com/400/400/dal,pulses/all', variants: [{ q: '1kg', p: 160 }] },
            { id: 43, cat: 'Pantry', name: 'Iodized Salt', rating: 4.9, reviews: '20k', img: 'https://loremflickr.com/400/400/salt,white/all', variants: [{ q: '1kg', p: 28 }] },
            { id: 44, cat: 'Pantry', name: 'Refined Sugar', rating: 4.5, reviews: '10k', img: 'https://loremflickr.com/400/400/sugar,grain/all', variants: [{ q: '1kg', p: 48 }] },
            { id: 45, cat: 'Pantry', name: 'Red Chilli Powder', rating: 4.6, reviews: '3k', img: 'https://loremflickr.com/400/400/chilli-powder,spice/all', variants: [{ q: '200g', p: 90 }] },
            { id: 46, cat: 'Pantry', name: 'Pure Ghee', rating: 4.9, reviews: '7k', img: 'https://loremflickr.com/400/400/ghee,jar/all', variants: [{ q: '500ml', p: 350 }, { q: '1L', p: 680 }] },
            { id: 47, cat: 'Pantry', name: 'Extra Virgin Olive Oil', rating: 4.8, reviews: '1.2k', img: 'https://loremflickr.com/400/400/olive-oil,bottle/all', variants: [{ q: '500ml', p: 750 }] },

            // --- MEAT & SEAFOOD (10 Items) ---
            { id: 10, cat: 'Meat', name: 'Fresh Chicken Curry Cut', rating: 4.8, reviews: '1.1k', img: 'https://loremflickr.com/400/400/chicken,meat/all', variants: [{ q: '500g', p: 180 }, { q: '1kg', p: 340 }] },
            { id: 50, cat: 'Meat', name: 'Chicken Breast Boneless', rating: 4.9, reviews: '3k', img: 'https://loremflickr.com/400/400/chickenbreast,meat/all', variants: [{ q: '500g', p: 260 }] },
            { id: 51, cat: 'Meat', name: 'Fresh Prawns (Medium)', rating: 4.7, reviews: '900', img: 'https://loremflickr.com/400/400/prawns,seafood/all', variants: [{ q: '250g', p: 240 }, { q: '500g', p: 460 }] },
            { id: 52, cat: 'Meat', name: 'Rohu Fish Steak', rating: 4.6, reviews: '1.5k', img: 'https://loremflickr.com/400/400/fish,steak/all', variants: [{ q: '500g', p: 280 }] },
            { id: 53, cat: 'Meat', name: 'Mutton Curry Cut', rating: 4.8, reviews: '2k', img: 'https://loremflickr.com/400/400/mutton,meat/all', variants: [{ q: '500g', p: 450 }] },
            { id: 54, cat: 'Meat', name: 'Chicken Wings', rating: 4.5, reviews: '1.2k', img: 'https://loremflickr.com/400/400/chickenwings,meat/all', variants: [{ q: '500g', p: 190 }] },
            { id: 55, cat: 'Meat', name: 'Seer Fish Slices', rating: 4.9, reviews: '400', img: 'https://loremflickr.com/400/400/fishslices,seafood/all', variants: [{ q: '500g', p: 650 }] },
            { id: 56, cat: 'Meat', name: 'Chicken Lollipop', rating: 4.7, reviews: '2k', img: 'https://loremflickr.com/400/400/lollipop,meat/all', variants: [{ q: '10 Units', p: 210 }] },
            { id: 57, cat: 'Meat', name: 'Eggs (Pack of 30)', rating: 4.9, reviews: '8k', img: 'https://loremflickr.com/400/400/eggbox,dairy/all', variants: [{ q: '30 Units', p: 210 }] },
            { id: 58, cat: 'Meat', name: 'Salmon Fillet', rating: 4.8, reviews: '300', img: 'https://loremflickr.com/400/400/salmon,fish/all', variants: [{ q: '250g', p: 850 }] },

            // --- SNACKS & BEVERAGES (10 Items) ---
            { id: 11, cat: 'Snacks', name: 'Classic Salted Chips', rating: 4.4, reviews: '20k', img: 'https://loremflickr.com/400/400/chips,snack/all', variants: [{ q: 'Regular', p: 20 }, { q: 'Large', p: 50 }] },
            { id: 60, cat: 'Snacks', name: 'Coca Cola Can', rating: 4.8, reviews: '15k', img: 'https://loremflickr.com/400/400/cola,soda/all', variants: [{ q: '330ml', p: 40 }] },
            { id: 61, cat: 'Snacks', name: 'Roasted Almonds', rating: 4.7, reviews: '2k', img: 'https://loremflickr.com/400/400/almonds,nuts/all', variants: [{ q: '200g', p: 280 }] },
            { id: 62, cat: 'Snacks', name: 'Oreo Biscuits', rating: 4.9, reviews: '30k', img: 'https://loremflickr.com/400/400/oreo,biscuit/all', variants: [{ q: '120g', p: 35 }] },
            { id: 63, cat: 'Snacks', name: 'Orange Juice', rating: 4.5, reviews: '4k', img: 'https://loremflickr.com/400/400/juice,orange/all', variants: [{ q: '1L', p: 110 }] },
            { id: 64, cat: 'Snacks', name: 'Dark Chocolate (70%)', rating: 4.8, reviews: '1.2k', img: 'https://loremflickr.com/400/400/chocolate,dark/all', variants: [{ q: '100g', p: 180 }] },
            { id: 65, cat: 'Snacks', name: 'Instant Coffee', rating: 4.7, reviews: '8k', img: 'https://loremflickr.com/400/400/coffee,mug/all', variants: [{ q: '100g', p: 295 }] },
            { id: 66, cat: 'Snacks', name: 'Green Tea Bags', rating: 4.6, reviews: '5k', img: 'https://loremflickr.com/400/400/greentea,bags/all', variants: [{ q: '25 Bags', p: 150 }] },
            { id: 67, cat: 'Snacks', name: 'Salted Cashews', rating: 4.8, reviews: '1.5k', img: 'https://loremflickr.com/400/400/cashews,nuts/all', variants: [{ q: '200g', p: 320 }] },
            { id: 68, cat: 'Snacks', name: 'Mineral Water', rating: 4.9, reviews: '50k', img: 'https://loremflickr.com/400/400/water,bottle/all', variants: [{ q: '1L', p: 20 }, { q: '5L', p: 75 }] },

            // --- FROZEN FOODS (10 Items) ---
            { id: 70, cat: 'Frozen', name: 'Frozen Green Peas', rating: 4.6, reviews: '4k', img: 'https://loremflickr.com/400/400/peas,frozen/all', variants: [{ q: '500g', p: 65 }] },
            { id: 71, cat: 'Frozen', name: 'French Fries', rating: 4.7, reviews: '9k', img: 'https://loremflickr.com/400/400/frenchfries,frozen/all', variants: [{ q: '750g', p: 195 }] },
            { id: 72, cat: 'Frozen', name: 'Vanilla Ice Cream', rating: 4.9, reviews: '12k', img: 'https://loremflickr.com/400/400/icecream,vanilla/all', variants: [{ q: '1L', p: 240 }] },
            { id: 73, cat: 'Frozen', name: 'Chicken Nuggets', rating: 4.8, reviews: '6k', img: 'https://loremflickr.com/400/400/nuggets,frozen/all', variants: [{ q: '500g', p: 320 }] },
            { id: 74, cat: 'Frozen', name: 'Frozen Sweet Corn', rating: 4.7, reviews: '2.5k', img: 'https://loremflickr.com/400/400/corn,frozen/all', variants: [{ q: '500g', p: 85 }] },
            { id: 75, cat: 'Frozen', name: 'Paneer Tikka Pizza', rating: 4.4, reviews: '1k', img: 'https://loremflickr.com/400/400/pizza,frozen/all', variants: [{ q: '300g', p: 250 }] },
            { id: 76, cat: 'Frozen', name: 'Frozen Paratha', rating: 4.6, reviews: '3k', img: 'https://loremflickr.com/400/400/paratha,frozen/all', variants: [{ q: '4 Units', p: 110 }] },
            { id: 77, cat: 'Frozen', name: 'Prawns (Frozen)', rating: 4.7, reviews: '800', img: 'https://loremflickr.com/400/400/prawns,frozen/all', variants: [{ q: '500g', p: 480 }] },
            { id: 78, cat: 'Frozen', name: 'Fruit Sorbet', rating: 4.8, reviews: '400', img: 'https://loremflickr.com/400/400/sorbet,frozen/all', variants: [{ q: '500ml', p: 350 }] },
            { id: 79, cat: 'Frozen', name: 'Potato Wedges', rating: 4.5, reviews: '2k', img: 'https://loremflickr.com/400/400/wedges,frozen/all', variants: [{ q: '400g', p: 140 }] },

            // --- HOUSEHOLD & CLEANING (10 Items) ---
            { id: 12, cat: 'Household', name: 'Liquid Detergent', rating: 4.7, reviews: '6k', img: 'https://loremflickr.com/400/400/detergent,soap/all', variants: [{ q: '1L', p: 210 }, { q: '5L', p: 950 }] },
            { id: 80, cat: 'Household', name: 'Dishwash Gel', rating: 4.8, reviews: '15k', img: 'https://loremflickr.com/400/400/dishwash,gel/all', variants: [{ q: '500ml', p: 105 }] },
            { id: 81, cat: 'Household', name: 'Toilet Cleaner', rating: 4.6, reviews: '12k', img: 'https://loremflickr.com/400/400/cleaner,bottle/all', variants: [{ q: '1L', p: 165 }] },
            { id: 82, cat: 'Household', name: 'Floor Cleaner (Pine)', rating: 4.5, reviews: '8k', img: 'https://loremflickr.com/400/400/floorcleaner,pine/all', variants: [{ q: '1L', p: 140 }] },
            { id: 83, cat: 'Household', name: 'Kitchen Towels', rating: 4.9, reviews: '5k', img: 'https://loremflickr.com/400/400/towels,paper/all', variants: [{ q: '2 Rolls', p: 120 }] },
            { id: 84, cat: 'Household', name: 'Garbage Bags (Large)', rating: 4.7, reviews: '10k', img: 'https://loremflickr.com/400/400/garbagebag,trash/all', variants: [{ q: '30 Bags', p: 95 }] },
            { id: 85, cat: 'Household', name: 'Hand Wash Refill', rating: 4.8, reviews: '20k', img: 'https://loremflickr.com/400/400/handwash,soap/all', variants: [{ q: '750ml', p: 185 }] },
            { id: 86, cat: 'Household', name: 'Glass Cleaner Spray', rating: 4.6, reviews: '4k', img: 'https://loremflickr.com/400/400/glasscleaner,spray/all', variants: [{ q: '500ml', p: 95 }] },
            { id: 87, cat: 'Household', name: 'Air Freshener Spray', rating: 4.4, reviews: '6k', img: 'https://loremflickr.com/400/400/freshener,spray/all', variants: [{ q: '300ml', p: 150 }] },
            { id: 88, cat: 'Household', name: 'Scrub Pads (Pack of 3)', rating: 4.9, reviews: '15k', img: 'https://loremflickr.com/400/400/scrub,cleaning/all', variants: [{ q: '3 Units', p: 45 }] }
        ];

        let cart = [];
        let currentCat = 'All';

        function render() {
            const container = document.getElementById('product-container');
            container.innerHTML = '';
            const filtered = currentCat === 'All' ? products : products.filter(p => p.cat === currentCat);

            filtered.forEach(p => {
                container.innerHTML += `
                    <div class="product-card bg-white p-4 rounded-[2rem] border border-gray-100 flex flex-col group">
                        <div class="relative overflow-hidden rounded-2xl mb-4">
                            <img src="${p.img}" class="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500">
                            <div class="absolute top-2 left-2 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-black text-green-700">★ ${p.rating}</div>
                        </div>
                        <h4 class="font-bold text-gray-800 text-sm leading-tight mb-1 h-10 overflow-hidden">${p.name}</h4>
                        <p class="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-3">${p.cat}</p>
                        
                         <select onchange="updatePrice(this, ${p.id})" class="text-xs bg-gray-50 border-none rounded-xl p-2.5 mb-4 focus:ring-1 focus:ring-green-500 outline-none">
                             ${p.variants.map(v => `<option value="${v.p}">${v.q} - ₹${v.p}</option>`).join('')}
                         </select>

                        <div class="mt-auto flex justify-between items-center">
                            <span id="price-tag-${p.id}" class="text-lg font-black text-gray-900">₹${p.variants[0].p}</span>
                            <button onclick="addToCart(${p.id}, '${p.name}')" class="bg-green-600 text-white px-5 py-2 rounded-xl font-bold text-xs shadow-lg shadow-green-100 active:scale-95 transition-all">ADD</button>
                        </div>
                    </div>
                `;
            });
        }



        function filterItems(cat) {
            currentCat = cat;
            document.querySelectorAll('.category-pill').forEach(b => {
                b.classList.remove('active');
                if (b.innerText.includes(cat) || (cat === 'All' && b.innerText === 'All')) b.classList.add('active');
            });
            render();
        }

        function toggleProfile() {
            const drawer = document.getElementById('profile-drawer');
            const backdrop = document.getElementById('drawer-backdrop');
            const loginBtn = document.getElementById('login-btn');

            drawer.classList.toggle('open');
            backdrop.classList.toggle('show');

            if (drawer.classList.contains('open')) {
                document.body.style.overflow = 'hidden';
                loginBtn.classList.add('hidden');   // Hide login button
            } else {
                document.body.style.overflow = 'auto';
                loginBtn.classList.remove('hidden'); // Show login button
            }
        }


        function updatePrice(sel, id) {
            document.getElementById(`price-tag-${id}`).innerText = `₹${sel.value}`;
        }

        // function addToCart(id) {
        //     const product = products.find(p => p.id === id);
        //     cart.push({...product, image: `https://loremflickr.com/400/400/grocery,${product.img}`});
        //     updateCart();
        // }



        // function updateCart() {
        //     const total = cart.reduce((s, i) => s + i.price, 0);
        //     document.getElementById('cart-count').innerText = cart.length;
        //     document.getElementById('footer-item-count').innerText = `${cart.length} ITEMS`;
        //     document.getElementById('footer-total').innerText = `₹${total}`;
        //     if (cart.length > 0) document.getElementById('cart-footer').classList.remove('hidden');
        // }

        // 1. Updated addToCart to capture the selected price from the dropdown
        function addToCart(id) {
            const product = products.find(p => p.id === id);
            // In your current render, you use p.variants[0].p as default. 
            // Here we just grab the first variant price for simplicity in this demo.
            const price = product.variants[0].p;

            cart.push({
                id: Date.now(), // Unique ID for cart item
                productId: product.id,
                name: product.name,
                price: price,
                img: product.img
            });
            updateCart();
        }

        // 2. Updated updateCart to refresh the UI and the modal list
        function updateCart() {
            const total = cart.reduce((sum, item) => sum + item.price, 0);

            // Update counts
            document.getElementById('cart-count').innerText = cart.length;
            document.getElementById('footer-item-count').innerText = `${cart.length} ITEMS`;
            document.getElementById('footer-total').innerText = `₹${total}`;

            // Show/Hide Footer
            const footer = document.getElementById('cart-footer');
            if (cart.length > 0) {
                footer.classList.remove('hidden');
            } else {
                footer.classList.add('hidden');
            }

            // Update the Modal List
            const list = document.getElementById('cart-items-list');
            list.innerHTML = '';

            if (cart.length === 0) {
                list.innerHTML = '<p class="text-center text-gray-400 py-10 font-bold">Your cart is empty</p>';
            }

            cart.forEach((item, index) => {
                list.innerHTML += `
                    <div class="flex items-center gap-4 bg-gray-50 p-3 rounded-2xl">
                        <img src="${item.img}" class="w-12 h-12 rounded-xl object-cover">
                        <div class="flex-1">
                            <h5 class="font-bold text-sm">${item.name}</h5>
                            <p class="text-xs font-black text-green-600">₹${item.price}</p>
                        </div>
                        <button onclick="removeFromCart(${index})" class="text-gray-300 hover:text-red-500 p-2">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                `;
            });
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCart();
        }

        // Initialize Wallet from Storage or 0
        let walletBalance = parseFloat(localStorage.getItem('userWallet')) || 0;
        document.getElementById('wallet-balance-display').innerText = `₹${walletBalance.toFixed(2)}`;

        function addMoneyToWallet() {
            const amount = prompt("Enter amount to add to Pazhamuthir Wallet:");
            if (amount && !isNaN(amount)) {
                walletBalance += parseFloat(amount);
                localStorage.setItem('userWallet', walletBalance);
                document.getElementById('wallet-balance-display').innerText = `₹${walletBalance.toFixed(2)}`;
                alert(`₹${amount} added successfully! New Balance: ₹${walletBalance}`);
            }
        }

        // Updated Checkout to include Slots and Total Move
        function processCheckout() {
            const totalAmount = document.getElementById('footer-total').innerText;
            const selectedSlot = document.querySelector('input[name="delivery-slot"]:checked').value;

            if (cart.length === 0) return alert("Add items to cart first!");

            // Save history before moving to tracking
            saveToPurchaseHistory();

            localStorage.setItem('orderTotal', totalAmount);
            localStorage.setItem('deliverySlot', selectedSlot);

            alert(`Order Confirmed for ${selectedSlot}!\nYour frequent list has been updated.`);
            window.location.href = 'Tracking.html';
        }

        // 4. Initialize in the existing render/init part
        document.addEventListener('DOMContentLoaded', () => {
            render();
            renderSmartReorder(); // Call the reorder hub on load
        });

        function renderSmartReorder() {
            const history = JSON.parse(localStorage.getItem('purchaseHistory')) || [];
            const hub = document.getElementById('reorder-hub');
            const list = document.getElementById('smart-reorder-list');

            if (history.length === 0) {
                hub.classList.add('hidden');
                return;
            }

            hub.classList.remove('hidden');
            list.innerHTML = '';

            history.forEach(item => {
                list.innerHTML += `
                    <div class="flex-shrink-0 w-44 bg-white p-4 rounded-[2rem] border border-purple-50 shadow-sm hover:shadow-md transition-all group">
                        <div class="relative mb-3">
                            <img src="${item.img}" class="w-full h-24 object-cover rounded-2xl group-hover:scale-105 transition-transform">
                            <div class="absolute -bottom-2 -right-1 bg-purple-600 text-white text-[8px] font-black px-2 py-1 rounded-lg shadow-lg">
                                BOUGHT ${item.count}x
                            </div>
                        </div>
                        <h5 class="font-bold text-xs text-gray-800 leading-tight h-8 overflow-hidden">${item.name}</h5>
                        <div class="flex items-center justify-between mt-2">
                            <span class="font-black text-sm">₹${item.price}</span>
                            <button onclick="addToCart(${item.productId})" class="bg-purple-100 text-purple-600 p-2 rounded-xl hover:bg-purple-600 hover:text-white transition-all">
                                <i class="fa-solid fa-plus text-xs"></i>
                            </button>
                        </div>
                    </div>
                `;
            });
        }

        function updateLocationUI(newAddress) {

          const addressSpan = document.getElementById('header-address');
          if (addressSpan) {
              addressSpan.innerText = newAddress;
              
              // Visual feedback
              addressSpan.classList.add('text-green-600');
              setTimeout(() => addressSpan.classList.remove('text-green-600'), 2000);
          }

          // 2. Save to storage
          localStorage.setItem('userLocation', newAddress);

          // 3. Close Modal
          toggleModal('map-modal');
      }

      // Logic to load saved location on refresh
      document.addEventListener('DOMContentLoaded', () => {
          const savedLoc = localStorage.getItem('userLocation');
          if (savedLoc) {
              document.getElementById('header-address').innerText = savedLoc;
          }
      });
        // --- TOGGLE REORDER HISTORY ---
        function toggleReorderHistory() {
            const list = document.getElementById('smart-reorder-list');
            const btn = document.getElementById('view-history-btn');

            // Toggle the 'hidden' class
            if (list.classList.contains('hidden')) {
                list.classList.remove('hidden');
                list.classList.add('flex'); // Ensure flex is applied when shown
                btn.innerText = "HIDE HISTORY";
                btn.classList.replace('text-purple-600', 'text-gray-400'); // Change style when open
            } else {
                list.classList.add('hidden');
                list.classList.remove('flex');
                btn.innerText = "VIEW HISTORY";
                btn.classList.replace('text-gray-400', 'text-purple-600');
            }
        }

        // Update your renderSmartReorder function to ensure it doesn't force the list open
        function renderSmartReorder() {
            const history = JSON.parse(localStorage.getItem('purchaseHistory')) || [];
            const hub = document.getElementById('reorder-hub');
            const list = document.getElementById('smart-reorder-list');

            if (history.length === 0) {
                hub.classList.add('hidden');
                return;
            }

            // Show the Hub (Title + Button) but keep the list hidden
            hub.classList.remove('hidden');

            list.innerHTML = history.map(item => `
                <div class="flex-shrink-0 w-44 bg-white p-4 rounded-[2rem] border border-purple-50 shadow-sm hover:shadow-md transition-all group">
                    <div class="relative mb-3">
                        <img src="${item.img}" class="w-full h-24 object-cover rounded-2xl group-hover:scale-105 transition-transform">
                        <div class="absolute -bottom-2 -right-1 bg-purple-600 text-white text-[8px] font-black px-2 py-1 rounded-lg shadow-lg">
                            BOUGHT ${item.count}x
                        </div>
                    </div>
                    <h5 class="font-bold text-xs text-gray-800 leading-tight h-8 overflow-hidden">${item.name}</h5>
                    <div class="flex items-center justify-between mt-2">
                        <span class="font-black text-sm">₹${item.price}</span>
                        <button onclick="addToCart(${item.productId}, '${item.name.replace(/'/g, "\\'")}')" class="bg-purple-100 text-purple-600 p-2 rounded-xl hover:bg-purple-600 hover:text-white transition-all">
                            <i class="fa-solid fa-plus text-xs"></i>
                        </button>
                    </div>
                </div>
            `).join('');
        }

        function saveToPurchaseHistory() {
            let history = JSON.parse(localStorage.getItem('purchaseHistory')) || [];

            cart.forEach(cartItem => {
                // Find if item already exists in history
                const existingIndex = history.findIndex(h => h.productId === cartItem.productId);

                if (existingIndex > -1) {
                    history[existingIndex].count += 1;
                    history[existingIndex].lastBought = new Date().toLocaleDateString();
                } else {
                    history.push({
                        productId: cartItem.productId,
                        name: cartItem.name,
                        img: cartItem.img,
                        price: cartItem.price,
                        count: 1,
                        lastBought: new Date().toLocaleDateString()
                    });
                }
            });

            // Keep only top 10 frequent items
            history.sort((a, b) => b.count - a.count);
            localStorage.setItem('purchaseHistory', JSON.stringify(history.slice(0, 10)));
        }



        function toggleModal(id) {
            const modal = document.getElementById(id);
            const profileBtn = document.getElementById('profile-btn');

            modal.classList.toggle('hidden');

            if (!modal.classList.contains('hidden')) {
                profileBtn.classList.add('hidden');  // Hide profile button
            } else {
                profileBtn.classList.remove('hidden'); // Show profile button
            }
        }

        // --- ENHANCED FLASH SALE ENGINE ---

        function initFlashSale() {
            let timeLeft = 15 * 60; // 15 Minutes

            const timerDisplay = document.getElementById('flash-timer');

            const flashTimer = setInterval(() => {
                timeLeft--;

                // Timer Display Logic
                const hrs = Math.floor(timeLeft / 3600);
                const mins = Math.floor((timeLeft % 3600) / 60);
                const secs = timeLeft % 60;
                timerDisplay.innerText = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

                // Randomly Decrease Stock for all 3 products to simulate real buyers
                if (timeLeft % 8 === 0) updateStock('f-qty-1', 'f-prog-1', 10);
                if (timeLeft % 12 === 0) updateStock('f-qty-2', 'f-prog-2', 15);
                if (timeLeft % 5 === 0) updateStock('f-qty-3', 'f-prog-3', 20);

                if (timeLeft <= 0) {
                    clearInterval(flashTimer);
                    document.getElementById('flash-sale').classList.add('grayscale', 'opacity-50', 'pointer-events-none');
                    timerDisplay.innerText = "EXPIRED";
                }
            }, 1000);
        }

        function updateStock(qtyId, progId, max) {
            const qtyEl = document.getElementById(qtyId);
            const progEl = document.getElementById(progId);
            let current = parseInt(qtyEl.innerText);

            if (current > 0) {
                current--;
                qtyEl.innerText = current;
                let perc = (current / max) * 100;
                progEl.style.width = perc + "%";

                // Change color based on scarcity
                if (current < 5) progEl.classList.replace('bg-green-500', 'bg-red-600');
            } else {
                qtyEl.innerText = "0";
            }
        }

        // Special function to add items with the flash sale price
        function addFlashToCart(id, name, salePrice, imgUrl) {
            // Check if item already claimed (optional logic)
            cart.push({
                id: Date.now() + Math.random(), // Unique instance
                productId: 'FLASH-' + id,
                name: name,
                price: salePrice,
                img: imgUrl,
                qty: '1 Unit (Limit)'
            });

            // Trigger the standard update functions already in your Groceries.html
            updateCart();

            // Fancy notification
            const btn = event.target;
            btn.innerText = "CLAIMED!";
            btn.classList.replace('bg-gray-900', 'bg-green-600');
            setTimeout(() => {
                btn.innerText = "CLAIM DEAL";
                btn.classList.replace('bg-green-600', 'bg-gray-900');
            }, 2000);
        }

        // Call initFlashSale inside your DOMContentLoaded listener
        document.addEventListener('DOMContentLoaded', () => {
            render();
            renderSmartReorder();
            initFlashSale(); // START THE ENGINE
        });



        // --- KITCHEN DATA API SIMULATION ---
        const kitchenRecipes = [
            {
                title: "Fruit Custard",
                desc: "10 Mins • Gourmet Dessert",
                video: "https://assets.mixkit.co/videos/preview/mixkit-fresh-seasonal-fruit-salad-42407-large.mp4",
                //video: "https://www.youtube.com/shorts/dAY2tFtNDqE",
                items: [1, 4, 14]
            },
            {
                title: "Detox Green Salad",
                desc: "5 Mins • High Fiber",
                video: "https://assets.mixkit.co/videos/preview/mixkit-vegetables-and-fruits-arranged-on-a-table-41221-large.mp4",
                items: [2, 3, 19, 15]
            },
            {
                title: "Classic Avocado Toast",
                desc: "12 Mins • Protein Rich",
                video: "https://assets.mixkit.co/videos/preview/mixkit-preparing-a-salad-with-fresh-vegetables-42410-large.mp4",
                items: [6, 22, 23, 5]
            },
        ];

        let currentKitchenIdx = 0;

        // TOGGLE FUNCTION
        function toggleKitchen() {
            const hub = document.getElementById('kitchen-hub');
            hub.classList.toggle('hidden');

            if (!hub.classList.contains('hidden')) {
                hub.scrollIntoView({ behavior: 'smooth' });
                changeRecipe(0); // Load default
            }
        }

        // CHANGE RECIPE FUNCTION
        function changeRecipe(idx) {
            currentKitchenIdx = idx;
            const r = kitchenRecipes[idx];

            // Update Content
            document.getElementById('recipe-title').innerText = r.title;
            document.getElementById('recipe-desc').innerText = r.desc;
            document.getElementById('recipe-video-api').src = r.video;

            // Update Tabs UI
            const tabs = document.querySelectorAll('.recipe-tab');
            tabs.forEach((t, i) => {
                t.classList.toggle('active', i === idx);
                t.classList.toggle('border-green-500', i === idx);
                t.classList.toggle('text-white', i === idx);
                t.classList.toggle('text-gray-500', i !== idx);
            });

            renderKitchenIngredients();
        }

        function renderKitchenIngredients() {
            const r = kitchenRecipes[currentKitchenIdx];
            const list = document.getElementById('recipe-ingredients-list');
            let total = 0;

            list.innerHTML = r.items.map(id => {
                const p = products.find(prod => prod.id === id);
                total += p.variants[0].p;
                return `
                    <div class="flex items-center justify-between bg-gray-50 p-4 rounded-2xl border border-gray-100">
                        <div class="flex items-center gap-4">
                            <img src="${p.img}" class="w-10 h-10 rounded-lg object-cover bg-white">
                            <div>
                                <p class="font-bold text-gray-800 text-sm leading-none mb-1">${p.name}</p>
                                <p class="text-[9px] font-black text-gray-400 uppercase tracking-widest">${p.variants[0].q}</p>
                            </div>
                        </div>
                        <span class="font-black text-gray-900 text-sm">₹${p.variants[0].p}</span>
                    </div>
                `;
            }).join('');

            document.getElementById('recipe-total-price').innerText = `₹${total}`;
        }

        function addRecipeKit() {
            const r = kitchenRecipes[currentKitchenIdx];
            const btn = document.getElementById('add-recipe-btn');

            r.items.forEach(id => {
                const p = products.find(prod => prod.id === id);
                cart.push({
                    productId: p.id,
                    name: p.name,
                    price: p.variants[0].p,
                    img: p.img
                });
            });

            updateCart();

            btn.innerHTML = `<i class="fa-solid fa-circle-notch animate-spin"></i> ADDING KIT...`;
            setTimeout(() => {
                btn.innerHTML = `<i class="fa-solid fa-check"></i> KIT ADDED TO CART`;
                btn.classList.replace('bg-green-600', 'bg-black');
                setTimeout(() => {
                    btn.innerHTML = `ADD ALL INGREDIENTS <i class="fa-solid fa-cart-plus"></i>`;
                    btn.classList.replace('bg-black', 'bg-green-600');
                }, 2000);
            }, 1000);
        }

        let isLoggedIn = false;
        const VALID_EMAIL = "abhinavbaskaran8303@gmail.com";
        const VALID_PASS = "Abhinav@8323";

        function validateLandingLogin() {
            // Get the input elements (Assuming they are the first email and password fields in the modal)
            const emailInput = document.querySelector('#login-modal input[type="email"]').value;
            const passwordInput = document.querySelector('#login-modal input[type="password"]').value;

            // Define the required credentials
            const validEmail = "abhinavbaskaran8303@gmail.com";
            const validPassword = "Abhinav@8323";

            // Validation Logic
            if (emailInput === validEmail && passwordInput === validPassword) {
                // Success: Redirect to Groceries.html
                window.location.href = 'Groceries.html';
            } else {
                // Failure: Show error message
                alert("Invalid Credentials. Please check your email and password.");
            }
        }
        // Initialize
        render();
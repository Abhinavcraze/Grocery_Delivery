// let minutes = 9;
//         let seconds = 42;
//         const timerEl = document.getElementById('timer');

//         setInterval(() => {
//             if (seconds > 0) {
//                 seconds--;
//             } else if (minutes > 0) {
//                 minutes--;
//                 seconds = 59;
//             }
//             timerEl.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//         }, 1000);

//         // function confirmOrderAtHome() {
//         //     const confirmed = confirm("Please confirm you have received all your items in fresh condition. Clicking OK will release the escrow payment to the store.");
//         //     if (confirmed) {
//         //         alert("Order Finalized! Funds released to Pazhamuthir Fresh. \nThank you for choosing Ultra-Fast Freshness.");
//         //         window.location.href = 'Groceries.html'; // Goes back to store
//         //     }
//         // }

//         window.onload = function() {
//             const savedAmount = localStorage.getItem('orderTotal');

//             const displayElement = document.getElementById('tracking-order-total');

//             if (savedAmount && displayElement) {
//                 displayElement.innerText = savedAmount;
//                 console.log("Successfully reflected amount: ", savedAmount);
//             } else {
//                 console.log("No amount found in memory.");
//             }
//         };
//         function confirmOrderAtHome() {
//             const confirmed = confirm("Please confirm you have received all your items. This releases payment.");
//             if (confirmed) {
//                 alert("Funds released! Thank you for shopping.");
//                 localStorage.removeItem('orderTotal');
//                 window.location.href = 'Groceries.html';
//             }
//         }


//         // Add this inside your existing <script> tag in Tracking.html
//         document.addEventListener('DOMContentLoaded', () => {
//             const savedAmount = localStorage.getItem('orderTotal');

//             const displayElement = document.querySelector('.font-black text-lg');

//             if (savedAmount && displayElement) {
//                 displayElement.innerText = savedAmount;
//             }
//         });



window.onload = function() {
    // 1. Reflect the Total Amount
    const savedAmount = localStorage.getItem('orderTotal');
    const totalDisplay = document.getElementById('tracking-order-total');
    
    if (savedAmount && totalDisplay) {
        totalDisplay.innerText = savedAmount;
    }

    // 2. Set up the "View Items" button event
    const viewBtn = document.getElementById('tracking-items');
    if(viewBtn) {
        viewBtn.onclick = function() {
            showOrderedItems();
        };
    }
};

// Function to open/close the items modal
function toggleItemsModal() {
    document.getElementById('items-modal').classList.toggle('hidden');
}

// Function to show the modal and populate the list
function showOrderedItems() {
    const itemsData = localStorage.getItem('purchasedItems');
    const container = document.getElementById('ordered-items-container');
    
    if (!itemsData || JSON.parse(itemsData).length === 0) {
        container.innerHTML = '<p class="text-center text-gray-400 py-6 font-bold">No item data found.</p>';
    } else {
        const items = JSON.parse(itemsData);
        
        container.innerHTML = items.map(item => `
            <div class="flex items-center gap-4 bg-gray-50 p-3 rounded-2xl border border-gray-100">
                <img src="${item.img}" class="w-12 h-12 rounded-xl object-cover shadow-sm">
                <div class="flex-1">
                    <p class="font-bold text-gray-800 text-sm leading-tight">${item.name}</p>
                    <p class="text-green-600 font-black text-xs">₹${item.price}</p>
                </div>
            </div>
        `).join('');
    }

    toggleItemsModal();
}

// Function to open/close the modal
function toggleItemsModal() {
    const modal = document.getElementById('items-modal');
    modal.classList.toggle('hidden');
}

// Existing function for confirmation
function confirmOrderAtHome() {
    const confirmed = confirm("Confirm delivery receipt? This releases escrow payment.");
    if (confirmed) {
        alert("Funds released! Thank you for shopping.");
        localStorage.removeItem('orderTotal');
        localStorage.removeItem('purchasedItems');
        window.location.href = 'Groceries.html';
    }
}

// Timer Logic (Keep your existing one)
let minutes = 9, seconds = 42;
setInterval(() => {
    if (seconds > 0) seconds--;
    else if (minutes > 0) { minutes--; seconds = 59; }
    document.getElementById('timer').innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}, 1000);
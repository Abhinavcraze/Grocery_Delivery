let minutes = 9;
        let seconds = 42;
        const timerEl = document.getElementById('timer');

        setInterval(() => {
            if (seconds > 0) {
                seconds--;
            } else if (minutes > 0) {
                minutes--;
                seconds = 59;
            }
            timerEl.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);

        function confirmOrderAtHome() {
            const confirmed = confirm("Please confirm you have received all your items in fresh condition. Clicking OK will release the escrow payment to the store.");
            if (confirmed) {
                alert("Order Finalized! Funds released to Pazhamuthir Fresh. \nThank you for choosing Ultra-Fast Freshness.");
                window.location.href = 'Groceries.html'; // Goes back to store
            }
        }

        // Add this inside your existing <script> tag in Tracking.html
        document.addEventListener('DOMContentLoaded', () => {
            const savedAmount = localStorage.getItem('orderTotal');

            const displayElement = document.querySelector('.font-black text-lg');

            if (savedAmount && displayElement) {
                displayElement.innerText = savedAmount;
            }
        });
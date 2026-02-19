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

        // function confirmOrderAtHome() {
        //     const confirmed = confirm("Please confirm you have received all your items in fresh condition. Clicking OK will release the escrow payment to the store.");
        //     if (confirmed) {
        //         alert("Order Finalized! Funds released to Pazhamuthir Fresh. \nThank you for choosing Ultra-Fast Freshness.");
        //         window.location.href = 'Groceries.html'; // Goes back to store
        //     }
        // }

        window.onload = function() {
            const savedAmount = localStorage.getItem('orderTotal');

            const displayElement = document.getElementById('tracking-order-total');

            if (savedAmount && displayElement) {
                displayElement.innerText = savedAmount;
                console.log("Successfully reflected amount: ", savedAmount);
            } else {
                console.log("No amount found in memory.");
            }
        };
        function confirmOrderAtHome() {
            const confirmed = confirm("Please confirm you have received all your items. This releases payment.");
            if (confirmed) {
                alert("Funds released! Thank you for shopping.");
                localStorage.removeItem('orderTotal');
                window.location.href = 'Groceries.html';
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
// --- VIEW SWITCHING ---
        function switchView(viewId, el) {
            document.querySelectorAll('.view-section').forEach(v => v.classList.remove('active'));
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active', 'text-green-500'));
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.add('text-slate-600'));
            
            document.getElementById(viewId + '-view').classList.add('active');
            el.classList.add('active', 'text-green-500');
            el.classList.remove('text-slate-600');
            
            const viewTitles = { home: 'Command Center', analytics: 'Achievements', wallet: 'Rider Wallet' };
            document.getElementById('view-title').innerText = viewTitles[viewId] || 'SETTINGS';
        }

        function simulateRequest() {
            document.getElementById('state-idle').classList.add('hidden');
            document.getElementById('state-request').classList.remove('hidden');
        }

        function resetToIdle() {
            document.getElementById('state-request').classList.add('hidden');
            document.getElementById('state-idle').classList.remove('hidden');
        }

        function acceptOrder() {
            document.getElementById('state-request').classList.add('hidden');
            document.getElementById('state-active').classList.remove('hidden');
        }

        function startNavigation() {
            const btn = document.getElementById('nav-trigger');
            btn.innerHTML = `<i class="fa-solid fa-spinner animate-spin"></i> GENERATING ROUTE...`;
            setTimeout(() => {
                btn.classList.add('hidden');
                document.getElementById('pof-section').classList.remove('hidden');
                alert("GPS Connected: Optimal route via Sector 7 found. Note: Don't ring bell.");
            }, 1500);
        }

        function completeOrder() {
            const confirmed = confirm("Confirm Delivery: Items checked & customer satisfied?");
            if (confirmed) {
                alert("SUCCESS! ₹115.00 Earned. \nBadge Progress: 'Speed Demon' 80% Complete!");
                
                let balEl = document.getElementById('main-balance');
                let currentBal = parseInt(balEl.innerText.replace('₹', ''));
                balEl.innerText = `₹${currentBal + 115}`;
                
                location.reload(); 
            }
        }

        function triggerSOS() {
            const check = confirm("EMERGENCY: Broadcast location to Dark Stores & Police?");
            if(check) alert("SOS Signal Sent. Support is tracking your live coordinates.");
        }
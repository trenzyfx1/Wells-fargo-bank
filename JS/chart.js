// DESIGNED AND DEVELOPED BY ME: CHRISTIAN DAVID TREASURE - PROFESSIONAL FRONT-END DEVELOPER

const ctx = document.getElementById('balanceChart').getContext('2d');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Balance Trend',
            data: [812000, 823500, 830200, 840000, 846000],
            borderColor: '#1dd1a1',
            backgroundColor: 'rgba(29,209,161,0.2)',
            tension: 0.4,
            pointRadius: 3,
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `$${context.raw.toLocaleString()}`;
                    }
                }
            }
        },
        scales: {
            y: {
                ticks: {
                    callback: function (value) {
                        return '$' + (value / 1000) + 'K';
                    },
                    beginAtZero: false
                },
                min: 800000,
                max: 850000
            },
            x: {
                grid: { display: false }
            }
        }
    }
});

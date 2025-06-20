const ctx = document.getElementById('balanceChart').getContext('2d');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Balance Trend',
      data: [4800, 5100, 5300, 5600, 5500],
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
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false } },
      y: { ticks: { beginAtZero: false } }
    }
  }
});

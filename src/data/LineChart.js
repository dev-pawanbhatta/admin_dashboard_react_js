const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const lineData = {
    labels,
    datasets: [
        {
            label: 'Sales',
            data: [10000, 25000, 51000, 40000, 80000, 120000, 10000, 30000, 5000, 40000, 75000, 45000],
            borderColor: '#ffffff',
            backgroundColor: '#ffffff',
        },
    ],
};

export const totalSalesSum = lineData.datasets[0].data.reduce((total, item) => total + item, 0);

export const lineOptions = {
    responsive: true,
    scales: {
        y: {
            ticks: { color: 'white', beginAtZero: true }
        },
        x: {
            ticks: { color: 'white', beginAtZero: true }
        }
    }
}
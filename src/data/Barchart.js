
export const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const barData = {
    labels,
    datasets: [
        {
            label: 'Income',
            data: [1000, 250200, 5100, 40400, 8004, 14000, 12000, 3000, 50300, 300100, 70130, 4100],
            borderColor: 'blue',
            backgroundColor: 'blue',
        },
        {
            label: 'Sales',
            data: [10000, 25000, 51000, 40000, 80000, 120000, 10000, 30000, 5000, 40000, 75000, 45000],
            borderColor: 'orange',
            backgroundColor: 'orange',
        },
        {
            label: 'Profit',
            data: [1000, 2500, 5100, 4000, 8000, 10000, 1000, 3000, 500, 4000, 5000, 4000],
            borderColor: 'green',
            backgroundColor: 'green',
        },
    ],
};

export const barOptions = {
    responsive: true,
    scales: {
        y: {
            ticks: { color: 'black', beginAtZero: true }
        },
        x: {
            ticks: { color: 'black', beginAtZero: true }
        }
    }
}
const attritionData = {
    labels: ['Yes', 'No'],
    values: [237, 1233]
};

const ctx = document.getElementById('attritionChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: attritionData.labels,
        datasets: [{
            label: 'Employee Attrition Count',
            data: attritionData.values,
            backgroundColor: ['#ef4444', '#22c55e'],
            borderRadius: 6
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: '#e2e8f0'
                }
            }
        },
        scales: {
            x: {
                ticks: { color: '#cbd5f5' }
            },
            y: {
                ticks: { color: '#cbd5f5' }
            }
        }
    }
});
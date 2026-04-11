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
})
const ageData = {
    labels: ['20-30', '30-40', '40-50', '50+'],
    values: [300, 700, 350, 120]
};

const ctx2 = document.getElementById('ageChart');

new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ageData.labels,
        datasets: [{
            label: 'Employee Age Groups',
            data: ageData.values,
            backgroundColor: '#3b82f6',
            borderRadius: 6
        }]
    },
    options: {
        plugins: {
            legend: {
                labels: { color: '#e2e8f0' }
            }
        },
        scales: {
            x: { ticks: { color: '#cbd5f5' } },
            y: { ticks: { color: '#cbd5f5' } }
        }
    }
});
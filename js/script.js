document.addEventListener("DOMContentLoaded", function () {

    // Attrition Data
    const attritionData = {
        labels: ['Yes', 'No'],
        values: [237, 1233]
    };

    new Chart(document.getElementById('attritionChart'), {
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
            interaction: {
                mode: 'index',
                intersect: false
            },
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

    // Age Data
    const ageData = {
        labels: ['20-30', '30-40', '40-50', '50+'],
        values: [300, 700, 350, 120]
    };

    new Chart(document.getElementById('ageChart'), {
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
            interaction: {
                mode: 'index',
                intersect: false
            },
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

    // Overtime Data
    const overtimeData = {
        labels: ['Overtime Yes', 'Overtime No'],
        attritionYes: [127, 110],
        attritionNo: [289, 944]
    };

    new Chart(document.getElementById('overtimeChart'), {
        type: 'bar',
        data: {
            labels: overtimeData.labels,
            datasets: [
                {
                    label: 'Attrition Yes',
                    data: overtimeData.attritionYes,
                    backgroundColor: '#ef4444',
                    borderRadius: 6
                },
                {
                    label: 'Attrition No',
                    data: overtimeData.attritionNo,
                    backgroundColor: '#22c55e',
                    borderRadius: 6
                }
            ]
        },
        options: {
            interaction: {
                mode: 'index',
                intersect: false
            },
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

});
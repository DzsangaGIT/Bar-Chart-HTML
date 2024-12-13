let myBarChart;

document.getElementById('show-chart').addEventListener('click', function() {
    const tableRows = document.querySelectorAll('#data-table tbody tr');
    
    const labels = [];
    const values = [];

    tableRows.forEach(row => {
        const label = row.cells[0].innerText;
        const value = parseFloat(row.cells[1].innerText) || 0;
        labels.push(label);
        values.push(value);
    });

    const data = {
        labels: labels,
        datasets: [{
            label: 'Értékek',
            data: values,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    };

    if (myBarChart) {
        myBarChart.destroy();
    }

    const ctx = document.getElementById('chart-canvas').getContext('2d');
    myBarChart = new Chart(ctx, config);

    document.getElementById('chart-canvas').style.display = 'block';
});
 

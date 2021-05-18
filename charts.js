let expenseNames = document.getElementsByClassName('.name')
console.log(expenseNames)

let chart = document.getElementById('myChart').getContext('2d');

let estimatedChart = new Chart(chart, {
    type: 'pie',
    data: {
        labels: ['Rent', 'Food', 'Clothing'],
        datasets: [{
            label: 'Budget',
            data: [1000, 200, 100],
            backgroundColor: [
                ['#DEC376']
            ],
            hoverBackgroundColor: 'blue'
        }]
    },
    options: {},
});

// estimatedChart.datasetOverride = {

// }
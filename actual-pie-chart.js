/*

ACTUAL EXPENSE PIE CHART

*/

let actualChart = document.getElementById('myactualChart').getContext('2d');

// grab local storage data
const actualExpenses = JSON.parse(localStorage.getItem('localActualExpenses'))
console.log(actualExpenses)

const actualExpenseLabels = []
const actualExpenseData = []

actualExpenses.forEach(expense => {
    const expenseName = expense.name
    const expenseAmount = expense.amount

    actualExpenseLabels.push(expenseName)
    actualExpenseData.push(expenseAmount)
})

let actualPieChart = new Chart(actualChart, {
    type: 'pie',
    data: {
        labels: actualExpenseLabels,
        datasets: [{
            label: 'Actual Expenses',
            data: actualExpenseData,
            backgroundColor: [
                ['#023047']
            ],
            hoverBackgroundColor: '#8ecae6'
        }]
    },
    options: {},
});
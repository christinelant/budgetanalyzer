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
            backgroundColor: ["#d9ed92", "#b5e48c", "#99d98c", "#52b69a", "#168aad", "#1e6091", "#184e77", "#577590"],
            hoverBackgroundColor: ["#e9c46a"],
            hoverBorderColor: ['black']
        }]
    },
    options: {},
});

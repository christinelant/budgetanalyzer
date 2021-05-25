
/*

BUDGETED EXPENSE PIE CHART

*/

let budgetChart = document.getElementById('mybudgetChart').getContext('2d');

// grab local storage data
const expenses = JSON.parse(localStorage.getItem('localBudgetExpenses'))

const budgetedExpenseLabels = []
const budgetedExpenseData = []

expenses.forEach(expense => {
    const expenseName = expense.name
    const expenseAmount = expense.amount

    budgetedExpenseLabels.push(expenseName)
    budgetedExpenseData.push(expenseAmount)
})

let estimatedbudgetChart = new Chart(budgetChart, {
    type: 'pie',
    data: {
        labels: budgetedExpenseLabels,
        datasets: [{
            label: 'Budgeted Expenses',
            data: budgetedExpenseData,
            backgroundColor: [
                ['#023047']
            ],
            hoverBackgroundColor: '#8ecae6'
        }]
    },
    options: {},
});
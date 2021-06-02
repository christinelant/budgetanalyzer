
/*

BUDGETED EXPENSE PIE CHART

*/

let budgetChart = document.getElementById('mybudgetChart').getContext('2d');

// grab local storage data
const expenses = JSON.parse(localStorage.getItem('localBudgetExpenses'))
console.log(expenses)

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
            backgroundColor: ["#d9ed92", "#b5e48c", "#99d98c", "#52b69a", "#168aad", "#1e6091", "#184e77", "#577590"],
            hoverBackgroundColor: ["#e9c46a"],
            hoverBorderColor: ['black']
        }]
    },
    options: {},
});
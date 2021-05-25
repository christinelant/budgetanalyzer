let budgetChart = document.getElementById('mybudgetChart').getContext('2d');

// grab local storage data
const expenses = JSON.parse(localStorage.getItem('localExpenses'))

const budgetedExpenseLabels = []
const budgetedExpenseLabels = []

expenses.forEach(expense => {
    const expenseName = expense.name
    const expenseAmount = expense.amount

    budgetedExpenseLabels.push(expenseName)
    budgetedExpenseLabels.push(expenseAmount)
})

let estimatedbudgetChart = new chart(budgetChart, {
    type: 'pie',
    data: {
        labels: budgetedExpenseLabels,
        datasets: [{
            label: 'Budget',
            data: budgetedExpenseLabels,
            backgroundColor: [
                ['#023047']
            ],
            hoverBackgroundColor: '#8ecae6'
        }]
    },
    options: {},
});


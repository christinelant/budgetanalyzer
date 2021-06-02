const comparisonSection = document.getElementsByClassName('expense-comparison')[0]

const localActualExpenses = JSON.parse(localStorage.getItem('localActualExpenses'))
const localBudgetExpenses = JSON.parse(localStorage.getItem('localBudgetExpenses'))
const income = JSON.parse(localStorage.getItem('income'))

const getBudgetExpense = (name) => {
    for (let i = 0; i < localBudgetExpenses.length; i++) {
        if (localBudgetExpenses[i].name === name) {
            return localBudgetExpenses[i]
        }
    }
    return false
}

let total = 0

for (let i = 0; i < localActualExpenses.length; i++) {
    const expense = localActualExpenses[i]

    total += expense.amount
}
const isOverBudget = total > income


let str = "<div class='comparison-wrapper'>"

// displays whether the user went over total monthly income
if (total === income) {
    str += `<h2>You broke even</h2>`
} else {
    str += `<h2>You are ${isOverBudget ? 'over' : 'under'} budget by $${Math.abs(total - income)}</h2>`
}

console.log(localActualExpenses.length)

for (let i = 0; i < localActualExpenses.length; i++) {
    const expense = localActualExpenses[i]
    const budgetExpense = getBudgetExpense(expense.name)

    if (budgetExpense) {
        const breakEven = expense.amount === budgetExpense.amount
        if (breakEven) {
            str += `<p class='on-budget'>you stayed on budget for ${expense.name}</p>`
        } else {
            const isOverBudget = expense.amount > budgetExpense.amount
            str += `<p>${expense.name} is ${isOverBudget ? 'over' : 'under'} budget by $${Math.abs(localActualExpenses[i].amount - budgetExpense.amount)}</p>`
        }
    } else {
        str += `<p>${expense.name} was not accounted for in your budgeted expense</p>`
    }
}

str += "</div>"
comparisonSection.innerHTML = str
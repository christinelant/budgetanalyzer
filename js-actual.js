const addExpense = document.querySelector(".add")
const list = document.querySelector(".entered-expenses")
const form = document.querySelector('form')

form.addEventListener('submit', function (event) {
    event.preventDefault()
    addNewExpense()
})

const expenses = []

const addNewExpense = () => {
    // this will grab the values from the input fields and create an object, which will push into expenses

    const expenseName = document.querySelector(".name");
    const expenseValue = document.querySelector(".amount");

    const expense = {
        name: expenseName.value,
        amount: parseFloat(expenseValue.value)
    }

    expenses.push(expense)

    // clear input values
    expenseName.value = ""
    expenseValue.value = ""

    // call buildExpenses
    buildExpenses()
    updateLocalStorage()
}

// build expenses array
const buildExpenses = () => {
    // function loops through the expenses array and builds out the innerHTML and then set it into the expense HTML list
    let str = ""

    for (i = 0; i < expenses.length; i++) {
        console.log(expenses[i])
        str += `
        <li class='expense expense-${i}' id='${i}'>
            <span class='name'>${expenses[i].name}</span>
            <span class='amount'>${expenses[i].amount}</span>
            <button onClick='window.removeExpense(event)' class='remove'>-</button>
        </li>
        `
    }

    // add code to html
    list.innerHTML = str
}


// remove an expense
window.removeExpense = (event) => {

    // grab the specified expense
    const element = event.target.parentElement

    // grab the expense's id
    const id = element.id

    // delete expense from the array
    expenses.splice(id, 1)

    // remove the item visually from the screen
    element.remove()
    updateLocalStorage()
}


// local storage
const updateLocalStorage = () => {
    const stringExpenses = JSON.stringify(expenses)
    localStorage.setItem('localActualExpenses', stringExpenses.toLowerCase())
}


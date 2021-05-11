const addExpense = document.querySelector(".add")
const removeExpense = document.querySelector(".remove")
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
}


const buildExpenses = () => {
    // function loops through the expenses array and builds out the innerHTML and then set it into the expense HTML list
    let str = ""

    for (i = 0; i < expenses.length; i++) {
        console.log(expenses[i])
        str += `
        <li class='expense'>
            <span class='name'>${expenses[i].name}</span>
            <span class='amount'>${expenses[i].amount}</span>
            <button class='remove'>-</button>
        </li>
        `
    }

    list.innerHTML = str
}

// removes an expense from the list
removeExpense.addEventListener("click", function (event) {
    event.preventDefault();
    form.removeChild(form.lastElementChild);
});


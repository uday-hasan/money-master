//Get input from user and make condition on input value
function getInput(inpt) {
    const userInput = document.getElementById(inpt + '-input');
    const userValue = parseFloat(userInput.value);
    if (userValue < 0 || isNaN(userValue)) {
        document.getElementById(inpt + '-error').style.display = 'block';
        document.getElementById('display-expenses-balance').style.display = 'none';
        return getInput();
    }
    else {
        document.getElementById(inpt + '-error').style.display = 'none';
        document.getElementById('display-expenses-balance').style.display = 'block'
        return userValue;
    }
}

function getExpenses() {
    // Calling getInput() function to get user input
    const userIncome = getInput('income');
    const foodExpenses = getInput('food');
    const rentExpenses = getInput('rent');
    const clothesExpenses = getInput('clothes');

    const expenses = foodExpenses + rentExpenses + clothesExpenses;
    if (expenses > userIncome) {
        document.getElementById('display-expenses-balance').style.display = 'none';
        document.getElementById('expenses-error').style.display = 'block';
        return getExpenses();
    }
    else {
        document.getElementById('total-expenses').innerText = expenses;
        const balance = userIncome - expenses;
        document.getElementById('balance').innerText = balance;
        document.getElementById('expenses-error').style.display = 'none';
    }
    return (userIncome - expenses);
}

// Calculate Total Expenses And Balance
document.getElementById('calculate-expenses').addEventListener('click', function () {
    getExpenses();
})

// Calculating Saving
document.getElementById('calculate-save').addEventListener('click', function () {
    const userIncomeInput = document.getElementById('income-input');
    const userIncome = parseFloat(userIncomeInput.value);
    const userbalance = getExpenses();
    const saveInput = parseFloat(document.getElementById('save').value);
    const saveValue = (saveInput / 100);

    const saveAmount = userIncome * saveValue;

    if (saveAmount > userbalance) {
        document.getElementById('saving-display').style.display = 'none';
        document.getElementById('save-error').style.display = 'block';
        document.getElementById('save-value-error').style.display = 'none';
    }
    else {
        if (saveInput < 0) {
            document.getElementById('save-value-error').style.display = 'block'
            document.getElementById('save-error').style.display = 'none';
            document.getElementById('saving-display').style.display = 'none';
        }
        else {
            document.getElementById('saving-display').style.display = 'block';
            document.getElementById('save-error').style.display = 'none';
            document.getElementById('save-amount').innerText = saveAmount;
            document.getElementById('remaining-amount').innerText = userbalance - saveAmount;
        }
    }
})



// Transactions Array
let transactions = [];

// Add Transaction
document.getElementById("addTransaction").addEventListener("click", function() {
    const description = document.getElementById("description").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const type = document.getElementById("type").value;

    if (description && amount && !isNaN(amount)) {
        const transaction = { description, amount, type };
        transactions.push(transaction);
        updateDisplay();
    }
});

// Update Display
function updateDisplay() {
    const transactionsList = document.getElementById("transactionsList");
    transactionsList.innerHTML = "";

    let totalIncome = 0, totalExpenses = 0;

    transactions.forEach((transaction, index) => {
        const li = document.createElement("li");
        li.textContent = `${transaction.type.toUpperCase()}: ${transaction.description} - KSh${transaction.amount}`;
        transactionsList.appendChild(li);

        // Calculate Totals
        if (transaction.type === "income") {
            totalIncome += transaction.amount;
        } else {
            totalExpenses += transaction.amount;
        }
    });

    // Update Totals
    document.getElementById("totalIncome").textContent = `KSh${totalIncome}`;
    document.getElementById("totalExpenses").textContent = `KSh${totalExpenses}`;
    document.getElementById("balance").textContent = `KSh${totalIncome - totalExpenses}`;
}
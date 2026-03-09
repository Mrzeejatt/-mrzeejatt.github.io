// script.js file ke liye sahi code
function showModal() {
    document.getElementById('sendModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('sendModal').style.display = 'none';
}

function confirmSend() {
    let name = document.getElementById('rec').value;
    let amount = parseFloat(document.getElementById('amt').value);
    let balanceElement = document.getElementById('balance');
    let currentBalance = parseFloat(balanceElement.innerText.replace(/,/g, ''));

    if (name !== "" && amount > 0 && amount <= currentBalance) {
        // Balance update karein
        let newBalance = currentBalance - amount;
        balanceElement.innerText = newBalance.toLocaleString(undefined, {minimumFractionDigits: 2});
        
        // Modal band karein
        closeModal();
        alert("Success! Sent to " + name);
    } else {
        alert("Check name or balance!");
    }
}

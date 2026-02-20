document.getElementById("checkBtn").addEventListener("click", function () {

    let budget = parseFloat(prompt("Enter your budget amount:"));
    let price = parseFloat(prompt("Enter the item price:"));
    let savings = parseFloat(prompt("Enter your savings (optional, enter 0 if none):"));

    let totalMoney = budget + savings;

    if (totalMoney >= price) {
        alert("✅ You can afford this item!");
    } else {
        let difference = price - totalMoney;
        alert("❌ You cannot afford this item. You need " + difference + " more.");
    }

});

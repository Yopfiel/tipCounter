const billAmount = document.getElementById("bill-amount");
const tipPercentage = document.getElementById("tip-percentage");
const totalSpan = document.getElementById("total");
const calculate = document.getElementById("calculate");

function calculateTotal() {
  const billValue = billAmount.value;
  const tipValue = tipPercentage.value;
  const totalAmount = billValue * (1 + tipValue / 100);
  totalSpan.innerText = totalAmount.toFixed(2);
}

calculate.addEventListener("click", calculateTotal);

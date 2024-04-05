const myBillAmount = document.getElementById("bill");
const myTipAmount = document.getElementById("tip");
const btnCalculate = document.getElementById("calculate");
const mytotal = document.getElementById("total");

function calculateTip() {
  const billAmount = myBillAmount.value;

  const tipAmount = myTipAmount.value;

  const totalAmount = billAmount * (1 + tipAmount / 100);

  mytotal.innerHTML = totalAmount.toFixed(2);
}

btnCalculate.addEventListener("click", calculateTip);
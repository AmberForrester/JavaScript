function calculateloan() {
    loanAmount = document.getElementById("loan-amount").value;
    intrestRate = document.getElementById("intrest-rate").value;
    monthsToPay = document.getElementById("month-to-pay").value;
  
    let interest = (loanAmount * (intrestRate * 0.01)) / monthsToPay;
  
    let myPayment = (loanAmount / monthsToPay + interest).toFixed(2);
  
    document.getElementById(
      "payment"
    ).innerHTML = `Monthly Payment : ${myPayment}`;
  }
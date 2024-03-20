const currencyEl_one =  document.getElementById('currency-one');

const currencyEl_two =  document.getElementById('currency-two');

const amountEl_one =  document.getElementById('amount-one');

const amountEl_two =  document.getElementById('amount-two');

const rateEl = document.getElementById('rate');

const swapEl = document.getElementById('swap');

// fetch currency rates and update the dom

function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    fetch(`https://v6.exchangerate-api.com/v6/b71ba5a6f69833fe3ac900ec/latest/${currency_one}`)
    .then((res)=> res.json())
    .then((data) => {
        //console.log(data);
    const rate = data.conversion_rates[currency_two];
    rateEl.innerText = '1 ${currency_one}'
    });
}

currencyEl_one.addEventListener('change', calculate);

currencyEl_two.addEventListener('change', calculate);

amountEl_one.addEventListener('input', calculate);

amountEl_two.addEventListener('input', calculate);

calculate();
let tipOutput = document.querySelector(".tip-output");
let billAmount = document.querySelector(".bill-amount");
let percent10 = document.querySelector(".percent-10");
let tipAmount = 0;

let calculateTip = () => {
  tipAmount = billAmount.value * 0.12;
  // tipAmount = billAmount.value * 0.1;
  tipOutput.innerHTML = "Tip amount <br/> $" + tipAmount.toFixed(2);
  // billAmount.value = "";
};

percent10.addEventListener("click", calculateTip);

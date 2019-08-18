let tipOutput = document.querySelector(".tip-output");
let billAmount = document.querySelector(".bill-amount");
let percent10 = document.querySelector(".percent-10");
let tipAmount = 0;

let calculateTip = () => {
  console.log("click");
  tipAmount = billAmount.value * 0.1;
  console.log(tipAmount);
  tipOutput.innerHTML = tipAmount;
  billAmount.value = "";
};

percent10.addEventListener("click", calculateTip);

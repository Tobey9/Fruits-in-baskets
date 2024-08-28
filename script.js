let appleBasket = document.getElementById("apple-basket");
let orangeBasket = document.getElementById("orange-basket");
let countsAppleEl = document.getElementById("counts-apple");
let countsOrangeEl = document.getElementById("counts-orange");
let countApple = 0;
let countOrange = 0;

function addApple() {
  countApple += 1;
  countsAppleEl.textContent = "Count Apples : " + countApple;
  appleBasket.textContent += "🍎";
}

function addOrange() {
  countOrange += 1;
  countsOrangeEl.textContent = "Count Oranges : " + countOrange;
  orangeBasket.textContent += "🍊";
}

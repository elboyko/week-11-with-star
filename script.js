const doublePrice = document.getElementById('double');
const mochaPrice = document.getElementById('mocha');
const caramelPrice = document.getElementById('caramel');
const icedPrice = document.getElementById('iced');
// console.log(doublePrice.textContent);

const allPrice = +doublePrice.textContent + +mochaPrice.textContent + +caramelPrice.textContent + +icedPrice.textContent;
const priceOut = document.getElementById('itogsum')
priceOut.innerText = allPrice;


const button = document.getElementById('btn');
button.addEventListener('click', useCoupon, { once: true });

function useCoupon() {

   let double20 = 0.2 * doublePrice.textContent;
   // console.log(double20);
   let doubleSell = doublePrice.textContent - double20;
   // console.log(doubleSell);
   doublePrice.textContent = doubleSell;

   let mocha20 = 0.2 * mochaPrice.textContent;
   let mochaSell = mochaPrice.textContent - mocha20;
   mochaPrice.textContent = mochaSell;

   let caramel20 = 0.2 * caramelPrice.textContent;
   let caramellSell = caramelPrice.textContent - caramel20;
   caramelPrice.textContent = caramellSell;

   let iced20 = 0.2 * icedPrice.textContent;
   let icedSell = icedPrice.textContent - iced20;
   icedPrice.textContent = icedSell;

   const sell20 = 0.2 * allPrice;
   // console.log(sell20);

   const sellPrice = allPrice - sell20;
   // console.log(sellPrice);
   priceOut.innerText = sellPrice;

}
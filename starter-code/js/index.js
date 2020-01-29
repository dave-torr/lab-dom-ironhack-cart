var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $delbtn = 

// Iteration 1.1
// function updateSubtot() {
//   prodCost= document.querySelector(".pu span").innerHTML * document.querySelector(".qty input").value;
//   console.log(prodCost);
//   return prodCost;
// }
// // Iteration 1.2
// function calcAll() {
//   document.querySelector(".subtot span").innerText = updateSubtot()
// }
// $calc.onclick = calcAll;
// console.log(document.querySelectorAll("tr"))
// console.log(document.querySelectorAll("tr.product"))
// console.log(document.querySelectorAll("tr.product .pu span")[1].innerHTML)
//   console.log(document.querySelectorAll(".subtot span")[0].innerText)
//   console.log(document.querySelectorAll("tr.product .pu span")[1].innerHTML * document.querySelectorAll(".qty input")[1].value)
//   console.log(document.querySelectorAll("tr.product .pu span")[1].innerHTML)
//   console.log((document.querySelectorAll("tr.product .subtot span").value));
// Iteration 2:
// function calcEvery() {
//   for(let i=0; i<document.querySelectorAll("tr.product").length; i++){
//     calcAll(document.querySelectorAll("tr.product")[i]);
//   }
// }

// Iteration 1-3 WORKS WOOOOO
function calcAll(){
    let sumArr = [];

    for(let i=0; i<document.querySelectorAll("tr.product").length; i++){
    let prodCost = document.querySelectorAll("tr.product .pu span")[i].innerHTML * document.querySelectorAll(".qty input")[i].value;
    sumArr.push(prodCost);
    document.querySelectorAll(".subtot span")[i].innerText = prodCost;
  }
  console.log(sumArr);
  let grandTotal = sumArr.reduce((a,b) => a + b);
  document.querySelector("body > h2 > span").innerHTML = grandTotal
  console.log(grandTotal)
  return grandTotal;
}
$calc.onclick = calcAll;

function eraseVal(){
  document.querySelector("#cart > tbody > tr:nth-child(1) > td.rm > button")
}








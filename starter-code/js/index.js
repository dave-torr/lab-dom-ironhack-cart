var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

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

// ITERATION 4 OPERATIONAL:
  let rmBtns = document.getElementsByClassName("btn btn-delete");
  for(let i=0; i < rmBtns.length; i++){
    rmBtns[i].onclick = function(e){

      e.currentTarget.parentElement.parentElement.remove();
    }
  }


// Operational #4
  // let rmBtns = document.getElementsByClassName("btn btn-delete");
  // for(let i=0; i < rmBtns.length; i++){
  //   rmBtns[i].onclick = function(e){

  //     e.currentTarget.parentElement.parentElement.remove();
  //   }
  // }
// Iteration 5
  let crtBtn = document.getElementById("create");
  crtBtn.onclick = function (){

      let newProd = document.getElementsByClassName("product")[0].cloneNode(true);
      let newName = document.querySelector("#cart > tfoot > tr > td:nth-child(1) > input[type=text]").value;
      let newPrice = document.querySelector("#cart > tfoot > tr > td:nth-child(2) > input[type=number]").value;
      newProd.querySelector('.name span').innerText = newName;
      newProd.querySelector("td.pu > span").innerText = newPrice;
      newProd.querySelector('.btn-delete').onclick = function(e){

        newProd.remove();
      }

     document.getElementsByTagName("tbody")[0].appendChild(newProd);
    }



// PREVIOUS TRIES:
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

// Iteration 2:
// function calcEvery() {
//   for(let i=0; i<document.querySelectorAll("tr.product").length; i++){
//     calcAll(document.querySelectorAll("tr.product")[i]);
//   }
// }


// TESTS:
// console.log(document.querySelectorAll("tr.product .rm button")[0].innerHTML)
// console.log(document.getElementsByClassName("btn btn-delete"))
// // console.log(document.querySelectorAll("tr"))
// console.log(document.querySelectorAll("tr.product"))
// console.log(document.querySelectorAll("tr.product .pu span")[1].innerHTML)
//   console.log(document.querySelectorAll(".subtot span")[0].innerText)
//   console.log(document.querySelectorAll("tr.product .pu span")[1].innerHTML)
//   console.log((document.querySelectorAll("tr.product .subtot span").value));
// console.log(document.querySelector("#cart > tfoot > tr > td:nth-child(1) > input[type=text]"))
// console.log((document.getElementsByClassName("product")[0].childNodes))

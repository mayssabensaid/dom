function myFunction(x) {
  x.classList.toggle("is-active");
}

function remote(y) {
  y.parentElement.parentElement.remove();
}


var btnPlus = document.getElementsByClassName('plus-btn')

 for (let i = 0; i < btnPlus.length; i++) {
    const plusButton = btnPlus[i];
    plusButton.addEventListener('click',function (e) {
      var qty = e.target.nextElementSibling
      qty.value = +qty.value + 1
      
    })
 }

var btnMinus = document.getElementsByClassName('minus-btn')
for (let i = 0; i < btnMinus.length; i++) {
  const minusButton = btnMinus[i] ;
  minusButton.addEventListener('click',function(e){
   
    var qty = e.target.previousElementSibling 
    qty.value = +qty.value - 1 
   })
}
function calculsomme (){
  var price = document.getElementsByClassName('total-price')
  var qty =  document.getElementsByClassName('number')
  let total = 0
   for (let i = 0; i < qty.length; i++) {
      const qtyPerProduct = qty[i].value
      const pricePerProduct = price[i].innerText.replace('$','')
      total += +qtyPerProduct*parseInt(pricePerProduct)
      console.log(parseInt(pricePerProduct),qtyPerProduct);
   }
   document.getElementById('total').innerText=total ;
}



let even = [];
let uneven = [];
var elForm = document.querySelector(".form")
var elInput = document.querySelector(".form__input")
var evenReslt = document.querySelector(".even")
var unevenReslt = document.querySelector(".uneven")

elForm.addEventListener("submit", function (evt){
   evt.preventDefault()
   
   let check = (elInput.value).toString();
   
   if((elInput.value).trim() == ""){
      alert("You need to enter something")
      elInput.value = ""
      return;
   }
   if(isNaN(elInput.value)){
      alert("You must enter a number or digit")
      elInput.value = ""
      return;
   }
   if(elInput.value <= 0){
      alert("The value must be strictly greater than 0")
      elInput.value = ""
      return;
   }
   if(check[0] == 0 ){
      alert("The first digit must be greater than 0")
      elInput.value = ""
      return;
   }   
   if(elInput.value % 2 == 0){
      Number(even.push(elInput.value))
      evenReslt.textContent = ( "Even Numbers: " + even)
      elInput.value = ""
      return;
   }
   if(elInput.value % 2 == 1){
      Number(uneven.push(elInput.value))
      unevenReslt.textContent = ( "Unven Numbers: " + uneven)
      elInput.value = ""
      return;
   }
})
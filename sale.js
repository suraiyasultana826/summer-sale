let totalMoney = 0;

function convertInputField(idName){
    const inputNumber = document.getElementById(idName);
    const inputValue = inputNumber.innerText;
    const convertInput = parseFloat(inputValue);
    const shopEntry = document.getElementById('itemName');
    const div = document.createElement('div')
    div.innerHTML= idName;
    shopEntry.appendChild(div)
   
    return convertInput;
    
}

// function append(){
//     const node = document.createElement("ul");
// const textnode = document.createTextNode(idName);
// node.appendChild(textnode);
// document.getElementById("itemName").appendChild(node);
// }


    

document.getElementById("applyBtn").disabled = true;

document.getElementById("makePurchase").disabled = true;





document.getElementById('spoons').addEventListener('click', function(){
    const money = convertInputField('spoonPrice');
  totalMoney += money;

  if(totalMoney <200){
    document.getElementById("applyBtn").disabled = true;
}

else{
    document.getElementById("applyBtn").disabled = false;
}

  totalAmount.innerText =  totalMoney.toFixed(2);;
 
  if(totalMoney===0){
    document.getElementById("makePurchase").disabled = true;
  }
  else{
    document.getElementById("makePurchase").disabled = false;
  }
  document.getElementById('itemName').appendChild('spoon')



})
document.getElementById('boards').addEventListener('click', function(){
    const money = convertInputField('boardPrice');
  totalMoney += money;
  if(totalMoney <200){
    document.getElementById("applyBtn").disabled = true;
}
else{
    document.getElementById("applyBtn").disabled = false;
}

  totalAmount.innerText = totalMoney.toFixed(2);;

  if(totalMoney===0){
    document.getElementById("makePurchase").disabled = true;
  }
  else{
    document.getElementById("makePurchase").disabled = false;
  }


})
document.getElementById('cookers').addEventListener('click', function(){
    const money = convertInputField('cookerPrice');
  totalMoney += money;

  if(totalMoney <200){
    document.getElementById("applyBtn").disabled = true;
}
else{
    document.getElementById("applyBtn").disabled = false;
}

  totalAmount.innerText = totalMoney.toFixed(2);;

  if(totalMoney===0){
    document.getElementById("makePurchase").disabled = true;
  }
  else{
    document.getElementById("makePurchase").disabled = false;
  }


})
document.getElementById('caps').addEventListener('click', function(){
    const money = convertInputField('capPrice');
  totalMoney += money;

  if(totalMoney <200){
    document.getElementById("applyBtn").disabled = true;
}
else{
    document.getElementById("applyBtn").disabled = false;
}

  totalAmount.innerText = totalMoney.toFixed(2);

  if(totalMoney===0){
    document.getElementById("makePurchase").disabled = true;
  }
  else{
    document.getElementById("makePurchase").disabled = false;
  }


})
document.getElementById('jerseys').addEventListener('click', function(){
    const money = convertInputField('jerseyPrice');
  totalMoney += money;

  if(totalMoney <200){
    document.getElementById("applyBtn").disabled = true;
}
else{
    document.getElementById("applyBtn").disabled = false;
}

  totalAmount.innerText = totalMoney.toFixed(2);;

  if(totalMoney===0){
    document.getElementById("makePurchase").disabled = true;
  }
  else{
    document.getElementById("makePurchase").disabled = false;
  }


})
document.getElementById('cates').addEventListener('click', function(){
    const money = convertInputField('catesPrice');
  totalMoney += money;

  if(totalMoney <200){
    document.getElementById("applyBtn").disabled = true;
}
else{
    document.getElementById("applyBtn").disabled = false;
}

  totalAmount.innerText = totalMoney.toFixed(2);;

  if(totalMoney===0){
    document.getElementById("makePurchase").disabled = true;
  }
  else{
    document.getElementById("makePurchase").disabled = false;
  }


})


document.getElementById('applyBtn').addEventListener('click', function(){
   const couponInput = coupon.innerText;
   if(coupon.innerText='SELL200'){
    const finalAmount = totalMoney *0.2;
    const discount = totalMoney - finalAmount;
    discountAmount.innerText= finalAmount.toFixed(2);
    totalPay.innerText= discount.toFixed(2);
   }
   else{
    alert('Invalid Coupon Code')
   }
})

document.getElementById('resetBtn').addEventListener('click', function(){
  discountAmount.innerText = '';
  totalPay.innerText= '';
  totalAmount.innerText='';
  itemName.innerText='';
  document.getElementById("makePurchase").disabled = true;
  document.getElementById("applyBtn").disabled = true;
  
})






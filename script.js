  // let total_bill = document.getElementById("total_bill").value;
  // let no_person = document.getElementById("no_person").value;
  // let tip = document.getElementById("tip").value;
  // let toal_tip = document.getElementById("toal_tip");
  // let dis_person = document.getElementById("dis_person");

// function ans() {
//    if(total_bill==""){
//     alert("ADD AMOUNT");
//   }else{
//           toal_tip.value=parseInt((tip/100)*total_bill);

//         dis_person.value=parseFloat(((tip/100)*total_bill)/no_person).toFixed(2);
     
//        console.log();
//   }
//  }



function auto(){

  let total_bill = document.getElementById("total_bill");
  let no_person = document.getElementById("no_person");
  let tip = document.getElementById("tip");
  let toal_tip = document.getElementById("toal_tip");
  let dis_person = document.getElementById("dis_person");

  function remove(){
          if(total_bill.value==""){
    alert("ADD AMOUNT"+" "+"NO. OF PERSON");
  }else if(no_person.value==""){
    alert("NO. OF PERSON");
  }else if(tip.value==""){
    alert("TIP");
  }else{
      toal_tip.value=parseInt((tip.value/100)*total_bill.value);

       dis_person.value=parseFloat(((tip.value/100)*total_bill.value)/no_person.value).toFixed(2);
  }
    
  }
   
  remove();

  setTimeout(function clear(){
         toal_tip.value="";
        total_bill.value="";
       dis_person.value="";
       tip.value="";
       no_person.value="";
       alert("ENTER NEW AMOUNT")
  },20000)

}

 

 



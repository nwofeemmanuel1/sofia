$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});


let checkclick=0
document.querySelector('.navTrigger').onclick=()=>{
    if(checkclick ==0){
        checkclick=1
  document.querySelector('.home').innerHTML=""
    }else if (checkclick ==1){
     document.querySelector('.home').innerHTML=" <h1 class='hometext' >Name affiliate marketing </h1>      <p > is an affiliate market place for helping customers reach their needs at no stress</p><p >at name all products posted here has been tasted and confirmed to help eliminate scam</p>  "
      checkclick=0
    }
}




// document.querySelector('#mainListDiv').onclick=()=>{
//     // document.querySelector('.home').innerHTML=''
//     alert('hey')
// }


// var modalButtons = document.querySelectorAll("[data-modal]");
var genericModal = document.querySelector(".generic-modal-wraper");
// var closeGmodal = document.querySelector(".close-g-modal");

// [].forEach.call(modalButtons, function(button) {
//   button.addEventListener("click", function(){
//     genericModal.style.opacity = "1";
//     genericModal.style.pointerEvents = "auto";
//   });
// });

// window.addEventListener("click", function(event){
//   if(event.target == genericModal){
//     genericModal.style.opacity = "0";
//     genericModal.style.pointerEvents = "none";
//   }
// })

closeGmodal.addEventListener("click", function(){
  genericModal.style.opacity = "0";
  genericModal.style.pointerEvents = "none";
})

function showModallWraper(modal){
  document.getElementById(modal).style.display = "block";
  genericModal.style.opacity = "1";
  genericModal.style.pointerEvents = "auto";
}

function hideModal(modal){
  genericModal.style.opacity = "0";
  genericModal.style.pointerEvents = "none";
  setTimeout(() => {
    document.getElementById(modal).style.display = "none";
  }, 400);
}
var owl = $('.owl-carousel');
owl.owlCarousel({
  loop:true,
  items: 1,
  margin:10,
  nav:true,
})

// armazena os botões da modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.querySelector(".close");
var labwidth = document.querySelector('.lab-bg');
var labContent = document.querySelector('.lab-modal-content');
var microscopioLayer = document.querySelector(".microscopio-overlay");
var closeMicro = document.querySelector(".close-micro");
var warningLab = document.querySelector(".warning-lab");




var organela1 = document.querySelector(".organela-01");
var organela2 = document.querySelector(".organela-02");
var organela3 = document.querySelector(".organela-03");
var organela4 = document.querySelector(".organela-04");
var organela5 = document.querySelector(".organela-05");
var organela6 = document.querySelector(".organela-06");
var organela7 = document.querySelector(".organela-07");
var organela8 = document.querySelector(".organela-08");

// pega os clicks da modal
btn.onclick = function() {
  document.querySelector(".lab-modal-content").style.animationName = "animatetop";
  modal.style.display = "block";
  bubbles.load();
  bubbles.play();
  labContent.style.height = labwidth.offsetHeight + "px";  
}

span.onclick = function() {
  document.querySelector(".lab-modal-content").style.animationName = "animateout";
  setTimeout(function(){
    modal.style.display = "none"
  }, 300);
  bubbles.pause();
  warningLab.style.opacity = "1"
}

window.addEventListener ('keypress', function () {
  document.querySelector(".lab-modal-content").style.animationName = "animateout";
  setTimeout(function(){
    modal.style.display = "none"
  }, 300);
  bubbles.pause();
  warningLab.style.opacity = "1"
});

// closeMicro.addEventListener("click", function(event){
//   microscopioLayer.style.opacity = "0";
//   microscopioLayer.style.pointerEvents = "none";
// });

//armazena o som do lab
var bubbles = document.getElementById("audio-player"); 
  
window.addEventListener("resize", function(){
  labContent.style.height = labwidth.offsetHeight + "px";
  console.log(labContent.style.height )
});

var allOrganelas = document.querySelectorAll('.organela-small');

function setOrganela(cssClass) {
  [].forEach.call(allOrganelas, function(organela) {
    organela.style.transition = "0ms";
    organela.style.opacity = 0;
    organela.style.pointerEvents = "none";
  });

  document.querySelector(".arrow-down-two").style.display = "block";
  document.querySelector("."+cssClass).style.transition = "300ms";
  document.querySelector("."+cssClass).style.opacity = "1";
  document.querySelector("."+cssClass).style.pointerEvents = "auto";
}

var laminas = document.querySelectorAll('.lamina');

function opanOrganelaModal(cssClass){
  [].forEach.call(laminas, function(lamina) {
    lamina.style.display = "none";
  });
  document.querySelector(".lab-micros-wraper").style.opacity = "1";
  document.querySelector(".lab-micros-wraper").style.pointerEvents = "auto";
  document.querySelector("."+cssClass).style.display = "block";
}

function closeOrgModal(){
  document.querySelector(".lab-micros-wraper").style.opacity = "0";
  document.querySelector(".lab-micros-wraper").style.pointerEvents = "none";
}

// organela1.addEventListener("click", function(event){
//   microscopioLayer.style.opacity = "1";
//   microscopioLayer.style.pointerEvents = "auto";
//   owl.trigger('to.owl.carousel', [0]);
// })

// organela2.addEventListener("click", function(event){
//   microscopioLayer.style.opacity = "1";
//   microscopioLayer.style.pointerEvents = "auto";
//   owl.trigger('to.owl.carousel', [1]);
// })

// organela3.addEventListener("click", function(event){
//   microscopioLayer.style.opacity = "1";
//   microscopioLayer.style.pointerEvents = "auto";
//   owl.trigger('to.owl.carousel', [2]);
// })

// organela4.addEventListener("click", function(event){
//   microscopioLayer.style.opacity = "1";
//   microscopioLayer.style.pointerEvents = "auto";
//   owl.trigger('to.owl.carousel', [3]);
// })

// organela5.addEventListener("click", function(event){
//   microscopioLayer.style.opacity = "1";
//   microscopioLayer.style.pointerEvents = "auto";
//   owl.trigger('to.owl.carousel', [4]);
// })

// organela6.addEventListener("click", function(event){
//   microscopioLayer.style.opacity = "1";
//   microscopioLayer.style.pointerEvents = "auto";
//   owl.trigger('to.owl.carousel', [5]);
// })

// organela7.addEventListener("click", function(event){
//   microscopioLayer.style.opacity = "1";
//   microscopioLayer.style.pointerEvents = "auto";
//   owl.trigger('to.owl.carousel', [6]);
// })

// organela8.addEventListener("click", function(event){
//   microscopioLayer.style.opacity = "1";
//   microscopioLayer.style.pointerEvents = "auto";
//   owl.trigger('to.owl.carousel', [7]);
// })





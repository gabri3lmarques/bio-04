window.addEventListener("load", function () {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  $(".preloader").fadeOut(300);
});

AOS.init();

$(function () {
  $('[data-toggle="tooltip"]').tooltip({
    trigger: "click"
  })
})

//handtalk script
var scriptElem = document.createElement("script");

(scriptElem.src = "https://plugin.handtalk.me/web/latest/handtalk.min.js"),
  (scriptElem.onload = function () {
    window.ht = new HT({
      token: "bf5b7efb148a829a126a0e0c9fd533bf",
      align: "top",
      videoEnabled: true,
      ytEmbedReplace: true,
      mobileConfig: {
        align: "right",
        actionsAlign: "top",
        customButtonStyle: {
          borderRadius: "6px",
          size: "38px",
          horizontalMargin: "13px",
          bottomMargin: "140px",
          rightMargin: "40px",
        },
      },
    });
    $(".ht-skip").attr("aria-hidden", "true");
  }),
  document.body.appendChild(scriptElem);

//ascroll spy script
(function () {
  "use strict";

  var section = document.querySelectorAll(".section");
  var sections = {};
  var i = 0;

  Array.prototype.forEach.call(section, function (e) {
    sections[e.id] = e.offsetTop -1;
  });

  window.onscroll = function () {
    var scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector(".active").setAttribute("class", " ");
        document
          .querySelector("a[href*=" + i + "]")
          .setAttribute("class", "active");
      }
    }
  };
})();

var panelButtons = document.querySelectorAll('.panel-button');


[].forEach.call(panelButtons, function(button) {
  button.addEventListener("click", function(event){
    event.preventDefault();
  });
});

// pega o click no botão 3
panelButtons[0].addEventListener("click", function(event){
  document.getElementById("section-2-panel").setAttribute("src", "./img/section-2/painel-1.png");
  document.getElementById("panel-modal").style.display = "block";
  document.getElementById("panel-modal").innerHTML = "";
  document.getElementById("panel-modal").insertAdjacentHTML('beforeEnd', '<p><b>Núcleo</b></p>');
  document.getElementById("panel-modal").insertAdjacentHTML('beforeEnd', '<p>Responsável por comandar todas as atividades da célula, realizar os processos de divisão celular e armazenar o material genético (DNA).</p>');
});
// pega o click no botão 3
panelButtons[1].addEventListener("click", function(event){
  document.getElementById("section-2-panel").setAttribute("src", "./img/section-2/painel-2.png");
  document.getElementById("panel-modal").style.display = "block";
  document.getElementById("panel-modal").innerHTML = "";
  document.getElementById("panel-modal").insertAdjacentHTML('beforeEnd', '<p><b>Citoplasma</b></p>');
  document.getElementById("panel-modal").insertAdjacentHTML('beforeEnd', '<p>É o local onde todas as organelas celulares e o núcleo estão situados. Formado por água, sais minerais e proteínas, conferindo um aspecto gelatinoso ao interior da célula.</p>');
});
// pega o click no botão 1
panelButtons[2].addEventListener("click", function(event){
  document.getElementById("section-2-panel").setAttribute("src", "./img/section-2/painel-3.png");
  document.getElementById("panel-modal").style.display = "block";
  document.getElementById("panel-modal").innerHTML = "";
  document.getElementById("panel-modal").insertAdjacentHTML('beforeEnd', '<p><b>Membrana</b></p>');
  document.getElementById("panel-modal").insertAdjacentHTML('beforeEnd', '<p>Estrutura que reveste, protege e delimita as células. É responsável pela passagem, entrada e saída de substâncias na célula.</p>');
});

var menuBTN = document.getElementById("open-main-menu");
var mainMenu = document.querySelector(".main-menu");
var closeMenuBTN = document.getElementById("close-main-menu");


menuBTN.addEventListener("click", function(){
  mainMenu.style.marginLeft = "100%";
  mainMenu.style.opacity = "1";
})

closeMenuBTN.addEventListener("click", function(){
  mainMenu.style.marginLeft = "0";
  mainMenu.style.opacity = "0";
})

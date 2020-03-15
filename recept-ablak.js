function receptAblak(recept){
  var ablak = document.getElementById(recept + "-tartalom");
  var gomb = document.getElementById(recept + "-gomb");
  var hatter = document.getElementById("hatter");

  ablak.style.display = "block";

  hatter.onclick = function() {
    ablak.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == ablak) {
      ablak.style.display = "none";
    }
  }
}

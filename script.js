var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");
var toptobottom = document.getElementById("TB");
var lefttoright = document.getElementById("LR");
var diagonal = document.getElementById("DI");
// var dropdown = document.getElementById("myDropdown");

function setGradient() {
	var backgroundSetUp = "linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";
	body.style.background = backgroundSetUp;
	css.textContent = body.style.background + ";";
	button.style.background = backgroundSetUp;
	button.onmouseout = function() {
		button.style.background = backgroundSetUp;
	};
	button.onmouseover = function() {
		button.style.background = 
		"linear-gradient(180deg, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";
	};
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

toptobottom.addEventListener("click", function(){
	body.style.background = backgroundSetUp = "linear-gradient(to bottom, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";
	body.style.backgroundAttachment= "fixed";
	css.textContent = body.style.background + ";";
});
lefttoright.addEventListener("click", setGradient);
diagonal.addEventListener("click", function(){
	body.style.background = backgroundSetUp = "linear-gradient(to bottom right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";
	body.style.backgroundAttachment= "fixed";
	css.textContent = body.style.background + ";";
});


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
function random(min, max) {
  return ~~(Math.random() * (max - min + 1) + min);
}

var books = ["Alpha","Beta","Gamma","United Airlines", "Epsilon", "Zeta", "Eta", "Theta", "Iota", "Kappa", "Lamnda", "Mu", "Nu", "Xi", "Omicron", "Pi", "Rho", "Sigma", "Tau", "Upsilon", "Phi", "Chi", "Psi", "Omega"];
function run() {
  //console.log('The DOM is loaded');
  //alert('Page is loaded');
  //document.querySelector(".navbar-brand").textContent = books[random(0,books.length-1)] + " Math"
  sleep(450).then(() => {document.querySelector(".navbar-brand").textContent = books[random(0,books.length-1)] + " Math"});
}

document.addEventListener("DOMContentLoaded", run);


/*
window.onload = function() {
	alert('Page is loaded');
	sleep(300).then(() => {document.querySelector(".navbar-brand").textContent = books[random(0,books.length-1)] + " Math"});
  //document.querySelector(".navbar-brand").textContent = "Omicron Math"
};
*/

/*
document.querySelector(".navbar-brand").classList.add("glyphicon-education");


glyphicon, glyphicon-education

document.querySelector(".navbar-brand").querySelector(".glyphicon").classList.add("my-class");



document.querySelector(".navbar-brand").textContent = '"Omicron" <span class="small-space"></span> "Math"'
document.querySelector(".navbar-brand").textContent = '<i class="glyphicon glyphicon-education"> </i> Omicron <span class="small-space"></span> Math');
document.addEventListener("DOMContentLoaded", function() { 
	document.querySelector(".navbar-brand").textContent = "OmicronMath"
});
*/
/*
window.addEventListener("load", function(){
    omicron = document.querySelector(".navbar-brand");
});
omicron.textContent = "OmicronMath";
*/
/*
while (true){
	if (document.readyState === "complete") {
		document.querySelector(".navbar-brand").textContent = "OmicronMath"
		break
	}
}
*/
/*
function waitingKeypress() {
  return new Promise((resolve) => {
    document.addEventListener('keydown', onKeyHandler);
    function onKeyHandler(e) {
      if (e.keyCode === 13) {
        document.removeEventListener('keydown', onKeyHandler);
        resolve();
      }
    }
  });
}

async function test() {
  console.log('waiting keypress..')
  await waitingKeypress();
  console.log('good job!')
  document.querySelector(".navbar-brand").textContent = "OmicronMath"
}

test()
*/
/*
const omicron = document.querySelector(".navbar-brand");

if (omicron) {
  omicron.textContent = "OmicronMath";
}
*/

/*
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
sleep(4000).then(() => {});
*/
//document.querySelector(".navbar-brand").textContent = "OmicronMath"
//document.querySelector(".navbar-brand").textContent = "OmicronMath"
//document.querySelector(".navbar-brand").textContent = "OmicronMath"
/*
const featureBoxRight = document.querySelector(".navbar-brand")

if (featureBoxRight) {
  document.querySelector(".navbar-brand").textContent = "OmicronMath"
}
*/

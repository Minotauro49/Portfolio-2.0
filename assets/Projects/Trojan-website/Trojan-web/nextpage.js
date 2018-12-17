var icon1 = document.getElementById('icon1');
var icon2 = document.getElementById('icon2');
var icon3 = document.getElementById('icon3');
var invisible = document.getElementById("img");
var drop = document.getElementById("secontainer");
var tran = document.getElementById("tran");
var track = 0

function displaymenu(){
	if (track == 0) {
		track=1;
	}else{
		track = 0
	}
	
// invisible.src.match("open.png")
// invisible.src.match("close.png")
console.log(track)

if (track == 0) {
icon1.style.cssText="transform: rotate(0deg);";
icon2.style.cssText="opacity: 1;";
icon3.style.cssText="transform: rotate(0deg);";
tran.style.cssText="transform:translateY(-200px)";
// invisible.src="close.png";

} else if (track = 1){
icon1.style.cssText="transform: rotate(45deg) translate(15px, 8px);";
icon2.style.cssText="opacity: 0;";
icon3.style.cssText="transform: rotate(-45deg) translate(13px, -5px);";
// invisible.src="open.png";
tran.style.cssText="transform:translateY(0px)";
	}


}


//slider of insert divs
var Simulation = document.getElementById("Simulation");
var iframe = document.getElementsByTagName("iframe")[0];


window.onload = function(){iframe.style.cssText="transform: translateX(0px);"}

function nextpage(){
if (num == 1) {Simulation.style.cssText="transform: translateX(0px);"}
		else {Simulation.style.cssText="transform: translateX(-2000px);"}

if (num == 2) {iframe.style.cssText="transform: translateX(0px);"}
		else {iframe.style.cssText="transform: translateX(-2000px);"}
}

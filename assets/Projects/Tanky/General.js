var Key = [];
var AllVal = [0,window.innerHeight/2,window.innerWidth/2,0,0,0,0,0,0,5];
var IDcnt = 0;
var Ready = true;
var ReloadTime = 20;
var Mover = false;
var Num = 0;



setInterval(window.onload = function(){
var Player = document.getElementById('Player');
var Turret = document.getElementById('Turret');
var hall = document.getElementById('hall');

//Turret body Rotation
if (Key[87]){AllVal[3] = -1}
if (Key[83]){AllVal[3] =  1}
if (Key[87] || Key[83]) {AllVal[0]=AllVal[9];Mover = true;}else{
	AllVal[0]-=0.1;
if (AllVal[0] < 0) {AllVal[0]=AllVal[9];Mover = false;}
}
	



if (Mover == true) {
	AllVal[1] += (AllVal[0] * AllVal[3]) * Math.cos(Math.PI / 180 * AllVal[4]);
	AllVal[2] -= (AllVal[0] * AllVal[3]) * Math.sin(Math.PI / 180 * AllVal[4]);}
	Player.style.top= AllVal[1]+"px";
	Player.style.left= AllVal[2]+"px";

//Turret rotation
if (Key[68]) {AllVal[4]+= AllVal[9]}
if (Key[65]) {AllVal[4]-= AllVal[9]}
	Player.style.transform ="rotate("+AllVal[4]+"deg)";
if (Key[39]) {AllVal[5]+= 1}
if (Key[37]) {AllVal[5]-= 1}
	Turret.style.transform='rotate('+AllVal[5]+'deg)';

// Shooting
if (Ready == false) {
	ReloadTime++;
if (ReloadTime > 50) {ReloadTime = 0;Ready = true}}

// Space bar to shoot
if (Key[32] && Ready == true) { 
	IDcnt++;
	if (IDcnt >= 5) {IDcnt = 0}
	AllVal[6] = AllVal[1]+25;
	AllVal[7] = AllVal[2]+25;
	AllVal[8] = AllVal[5]+AllVal[4];
	hall.style.top = -60+"px";

// Shock obsober
	setTimeout(function(){
	hall.style.top = -80+"px";},200)
	Ready = false;}

var GetName = document.getElementById('Bull'+IDcnt+'');
		AllVal[6] +=(-15)* Math.cos(Math.PI / 180 * AllVal[8]);
		AllVal[7] -=(-15)* Math.sin(Math.PI / 180 * AllVal[8]);
	 	GetName.style.cssText="top:"+AllVal[6]+"px;left:"+AllVal[7]+"px;transform:rotate("+AllVal[8]+"deg)";

},20);
window.onkeydown = function(e){Key[e.keyCode] = true;}
window.onkeyup = function(e){Key[e.keyCode] = false}

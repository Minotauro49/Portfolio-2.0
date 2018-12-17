
var maxGridX,
	maxGridY,
	cnt = -1,
	cntpassiveHold = false,
	cntHoldN = [],
	lenHold = 0,
	checkHold = null,
	timerCntD = 0;

var lifeSpan = [0];
	lifeSpan[0] = [0];
	lifeSpan[1] = [0];
	lifeSpan[2] = [0];


function Food() {

	// if (true) {}
//----// maxGridY , maxGridX; data is gotten from general.js
	var foodPosX = Math.floor(Math.random()*maxGridX),
	foodPosY = Math.floor(Math.random()*maxGridY);
	timerCntD = Math.floor(Math.random()*15)+10; // Maximum life span of food from between 5 sec and 25 sec;


// Keeps track on the number this function has executed
	if (cntpassiveHold == true) {
		for (var i = 0; i < cntHoldN.length; i++) {
			if (cntHoldN[i] != undefined) {
				cnt = cntHoldN[i];
				cntHoldN[i] = undefined;
				break;
			 }else{checkHold = i;}
		}
		if (checkHold == cntHoldN.length-1) {
			cnt = lenHold;
			cntpassiveHold = false;
		}
	}

	if (cntpassiveHold == false){
		cnt++;
		lenHold = cnt;
	}

	// setTimeout(function(){cntpassiveHold = true},1000)
	lifeSpan[0][cnt] = foodPosX;
	lifeSpan[1][cnt] = foodPosY;
	lifeSpan[2][cnt] = timerCntD;


	//----// Variable from script.js 
	PickrandFood = Math.floor(Math.random()*5)
	var food =  document.getElementsByTagName('UL')[foodPosY].getElementsByTagName('LI')[foodPosX];
	food.style.background = foodColor[PickrandFood];

for (var i = 0; i < lifeSpan[2].length; i++) {
		if (lifeSpan[2][i] > 0) {
			lifeSpan[2][i]-=1;
			// console.log(lifeSpan[2])
		}else{
			cntpassiveHold = true;
			cntHoldN[i] = i;
			// console.log("Overflow!");
			food =  document.getElementsByTagName('UL')[lifeSpan[1][i]].getElementsByTagName('LI')[lifeSpan[0][i]];
			food.style.background = "";
		}
	}
}
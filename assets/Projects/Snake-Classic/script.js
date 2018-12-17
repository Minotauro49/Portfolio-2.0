var playerHead,
	playerTail,
	playerTailR,
	tailLength = 2,
	dirX = 0,
	dirY = 0,
	cntRemoveT = 1,
	cntAssign = 0,
	cntAssignH = 1,
	startDelay = false,
	startDelayH = false,
	xPlayer,
	yPlayer,
	foodRand = 200,
	speed = 10,
	resTrictX = false,
	resTrictY = false,
	backGColor,
	vol = 1,
	stop = false,
	gameEnd = false,
	foodColor = ['rgb(255, 87, 51)','rgb(255, 189, 51)','rgb(51, 255, 87)','rgb(159, 51, 255)','rgb(255, 51, 147)',"rgb(17, 97, 255)","rgb(51, 73, 255)"],
	PickrandFood = 5,
	startFood = false;

var key = []
var tailengthX = []
var tailengthY = []

window.onload = function StartGame(){ 
if (window.innerWidth < 1200) {alert("This game requires a bigger window screen")}// Gives alert to player


//-----// All funtions control
	LoadGrid();
	LoadSplashText();

	Player();
	
//-----// Give frequent Update to funtion()
	setInterval(Player, 10);

	function Player(){
//-------// Runs Food function
		// Controlls the spawn rate of food
		if (startFood == true) {
			if ((foodRand-=1) <= 0) {
				foodRand = Math.floor(Math.random()*300)+200;
				Food();
			}	
		}

//-------// Control player direction

		// 68 left 39
		if((key[68] || key[39]) && resTrictX == false){dirX = 1; dirY = 0;resTrictX = true;resTrictY = false}
		// 65 right 37
		if((key[65] || key[37]) && resTrictX == false){dirX = -1;dirY = 0;resTrictX = true;resTrictY = false}
		// 87 up 38
		if((key[87] || key[38]) && resTrictY == false){dirY = -1;dirX = 0;resTrictY = true;resTrictX = false}
		// 83 bottom 40
		if((key[83] || key[40]) && resTrictY == false){dirY = 1; dirX = 0;resTrictY = true;resTrictX = false}
		if(key[32]){speed = 1}else{speed = 6}


		if (resTrictX == true || resTrictY == true ) {playerMoves = true;}


		//readyPlayer --- variable in Text Display
		if (readyPlayer == false) {dirX = 0;dirY = 0;resTrictX = false;resTrictY = false}else{
			if (stop == false) {
				stop = true;
				dirY = -1;
				resTrictY = true;
			}
		}


//-------// Make player move and Adjusts speed
		if (vol > speed && gameEnd == false) {
			xPlayer+=dirX
			yPlayer+=dirY
	
			// Prevents player from going off Grid
			if (xPlayer < 0) {xPlayer = gridX-1}else if (xPlayer >= gridX){xPlayer = 0}
			if (yPlayer < 0) {yPlayer = gridY-1}else if (yPlayer >= gridY){yPlayer = 0}

			cntAssign++;
			tailengthX[cntAssign] = xPlayer;
			tailengthY[cntAssign] = yPlayer;
	
			// Reengages the cntRemoveT counter after a full loop
			if (cntAssign >= 100) {cntAssign = 0;startDelay = true;startDelayH = true}
			if (startDelay == true && cntRemoveT < 100) {
				cntRemoveT++;
			}else if (cntAssign  > tailLength){
				cntRemoveT = cntAssign-tailLength
				startDelay = false
			}
	
			// Tail
			if (startDelayH == true && cntAssignH < 100) {
				cntAssignH++;
			}else if(cntAssign > 1){
				cntAssignH = cntAssign-1
				startDelayH = false
			}
	
			//-----// Make player Head visible
			playerHead =  document.getElementsByTagName('UL')[yPlayer].getElementsByTagName('LI')[xPlayer];
			backGColor = playerHead.style.backgroundColor;
			playerHead.style.background = foodColor[PickrandFood];
	
			//----// Make player Tail visible
			if (resTrictX == true || resTrictY == true ) {
				startFood = true;
				playerTail =  document.getElementsByTagName('UL')[tailengthY[cntAssignH]].getElementsByTagName('LI')[tailengthX[cntAssignH]];
				playerTail.style.background = foodColor[6];
		
				//-----// Removes players tail
				playerTailR =  document.getElementsByTagName('UL')[tailengthY[cntRemoveT]].getElementsByTagName('LI')[tailengthX[cntRemoveT]];
				playerTailR.style.background = "";

				if (backGColor == foodColor[PickrandFood]){
					tailLength++;
//--------------// Game ends when this excutes
				}else if (backGColor != ""){
					playerHead.style.transition = "all 0.2s";
					playerHead.style.transform = "scale(0.8,0.8)";
					playerHead.style.background = "#FF3355";
					alert("You're sooooooo Dead!");
					location.reload();
					gameEnd = true;
				}
			}
			vol = 0
		}vol++;
	}
	window.onkeydown = function(e){key[e.keyCode] = true;}
	window.onkeyup = function(e){key[e.keyCode] = false}
	window.onresize = function(){location.reload()}
}



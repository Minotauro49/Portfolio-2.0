var size = 600,
	margin = 300,
	mouseC = ["move","default"],
	indexMove = -2,
	confirmDrag = false,
	isMousedown = false,
	isMousemove = false,
	planetCont,
	xposPrev,
	yposPrev,
	slide;

var locateSlide = [];
	locateSlide[0] = [-100,650,1150,1000,350];
	locateSlide[1] = [-800,-1010,-250,500,770];

function Animate(num){
	planetCont = document.querySelector(".cont");
	var planet = document.getElementById('V2');

	if (num =="Next") {indexMove++;}
	if (num =="Prev") {indexMove--;}


	if (indexMove < 6){
		planetCont.style.cssText = "transform:scale(4.5,4.5);cursor:move;";
		planet.style.cssText = "animation:none";
		confirmDrag = true;
		
		if (indexMove > 0) {slide.style.cssText="transition:all 1s;opacity:0;width:10px;height:10px;border-radius:50%;"}
		if (indexMove >= 0 && indexMove <= 4) {
			slide = document.querySelector(".img"+(indexMove+1)+"");
			planetCont.style.transition="all 0.8s";
			planetCont.style.left=locateSlide[0][indexMove]+"px";
			planetCont.style.top=locateSlide[1][indexMove]+"px";
			slide.style.cssText="transition:all 1s;opacity:1;width:250px;height:187.5px;border-radius:0%;"
			

		}

		if (indexMove >= 5 || (num =="Prev" && indexMove < 0)) {
			planetCont.style.cssText = "transform:scale(1,1);cursor:default;";
			planet.style.cssText = "animation:motion 250s linear infinite";
			confirmDrag = false
			indexMove = -2;
			slide.style.cssText="transition:all 1s;opacity:0;width:10px;height:10px;border-radius:50%;"
		}
	}
}


function DragMove(e){
	if (isMousemove && isMousedown && confirmDrag) {
		// planetCont.style.cssText="transition:none;transform:translate("+e.x+"px,"+e.y+"px);transform-origin:150% 150%;";
		planetCont.transition = "none";
		planetCont.style.left=(e.x)+"px";
		planetCont.style.top=(e.y)+"px";
		
	}

	
}


window.onmousemove = function(e){isMousemove = true;DragMove(e);}
window.onmousedown = function(e){isMousedown = true;}
window.onmouseup = function(e){isMousedown = false;isMousemove = false;}























// var container;
// var content;
// var massage;
// var scroll = 100;



// window.onload = function(){
// 	// var body = document.getElementById('body');

// 	setTimeout(function(){
// 		// document.body.style.zoom="150%"
// 	},2000)



// 	// 


// 	window.addEventListener('mousemove',function(e){
// 		// window.scrollBy(Math.sqrt(e.y),Math.sqrt(e.x));
// 		// console.log(Math.sqrt(e.x-e.y),Math.sqrt(e.x))
// 	});
// 	window.addEventListener('wheel',function(e){
// 		if (e.wheelDeltaY >= 120) {
// 			scroll+=5;
// 			// window.scrollBy(e.x, e.y);
// 			document.body.style.zoom=scroll+"%";
// 			document.body.style.transform="translate("+scroll+"px,"+scroll+"px)";
// 			// body.style.cssText="transform:scale("+Scroll+","+Scroll+")translate("+MposX+"px,"+MposY+"px);";
// 		}else{
// 			scroll-=5;
// 			// document.body.style.transform="translate("+scroll+"px,"+scroll+"px)";
// 			document.body.style.zoom=scroll+"%"
// 			// console.log(e.zoom);
// 		}
// 		console.log(scroll);
		
// 	})



// }










// // function divC(){
// //  
// //  massage = document.getElementById('massage');	
// //  container = document.getElementById('container');
// //  content = document.getElementById('content'); 

// // }



// // var increase = 0;
// // function active(e){
// // divC();
// // massage.style.opacity="0";
// // setTimeout(function(){massage.style.display="none";},200);

// // setInterval(window.onkeydown = function(e){
// // if (e.keyCode==37){Scroll++}
// // if (e.keyCode==39) {Scroll--}
// // 	if (Scroll>=8) {Scroll=8}else if (Scroll<=1) {Scroll=1}
// // 		if (Scroll >=3) {body.className="js";container.style.cssText="animation:none";content.style.cssText="display:block"}
// // 			else{body.className="";container.style.cssText="animation: rot 200s linear infinite;";content.style.cssText="display:none"}	


// // 		/*-------------------------------------------Navigation system ---------------------------------------------*/
// // var img1 = document.getElementById('img1');
// // var img2 = document.getElementById('img2');
// // var img3 = document.getElementById('img3');
// // var img4 = document.getElementById('img4');
// // var img5 = document.getElementById('img5');

// // if (e.keyCode == 65) {increase++;}else if (e.keyCode == 68) {increase--;}
// // if (increase==1) {img1.style.cssText="transform:scale(7,7)";}else{img1.style.cssText="transform:scale(1,1)";}
// // if (increase==2) {img2.style.cssText="transform:scale(7,7)";}else{img2.style.cssText="transform:scale(1,1)";}
// // if (increase==3) {img3.style.cssText="transform:scale(7,7)";}else{img3.style.cssText="transform:scale(1,1)";}
// // if (increase==4) {img4.style.cssText="transform:scale(7,7)";}else{img4.style.cssText="transform:scale(1,1)";}
// // if (increase==5) {img5.style.cssText="transform:scale(7,7)";}else{img5.style.cssText="transform:scale(1,1)";}
// // if (increase >= 6) {increase = 1}else if (increase <= 1) {increase = 1}


// // },30);



// // setInterval(document.addEventListener('wheel',function(e){
// // divC();
// // //RESTRICTIONS

// // if (e.wheelDelta > 0){Scroll++}
// // if (e.wheelDelta < 0) {Scroll--}
// // 	if (Scroll>=8) {Scroll=8}else if (Scroll<=1) {Scroll=1}
// // 		if (Scroll >=3) {body.className="js";container.style.cssText="animation:none";content.style.cssText="display:block"}
// // 				else{body.className="";container.style.cssText="animation: rot 200s linear infinite;";content.style.cssText="display:none"}
// // }),30);

// // setInterval(document.addEventListener('mousemove',function(e){
// // divC();

// // if (Scroll >=3) {
// // 	var posY = e.clientY;
// // 	var posX = e.clientX;
// // 	}else{
// // 	posY = 0;
// // 	posX = 0;
// // 	}
// // //Old mouse position 

// // localStorage.setItem("X", posX);
// // localStorage.setItem("Y", posY);

// // setInterval(function old(){ 
// //  oldX = localStorage.getItem("X");
// //  oldY = localStorage.getItem("Y");
// // },33);

// // if (posY < oldY) {MposY--} else if (posY > oldY){MposY++}
// // if (posX < oldX) {MposX--} else if (posX > oldX){MposX++}


// // }),30);

// // }


// // //INDIVIDUAL UPDATE FOR THE body
// // setInterval(window.onload = function(){ 
// // divC();
// // body.style.cssText="transform:scale("+Scroll+","+Scroll+")translate("+MposX+"px,"+MposY+"px);";

// // if (Scroll < 2) {
// // 	body.style.cssText="left:450px;top:90px;";
// // 	MposY = 0;
// // 	MposX = 0;}

// // },30);





















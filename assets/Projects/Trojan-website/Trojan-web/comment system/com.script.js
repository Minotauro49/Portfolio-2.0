function reverse(){
 var h = document.getElementById('comment');
 var t = document.getElementById('input');
 var s =document.getElementById('send');
 var img = document.getElementById('change');
 var img2 = document.getElementById('img');

 if(img.src.match("images/change1.jpg")){h.style.cssText="-webkit-transform:translateY(-65px);";
 										t.style.cssText="opacity: 1;"
 										s.style.cssText="opacity: 1;"
 										img.src="images/change2.jpg"
 										img2.style.cssText="-webkit-transform:	rotate(-180deg);"
 										}

else if(img.src.match("images/change2.jpg")){h.style.cssText="-webkit-transform:translateY(0px);";
 											 t.style.cssText="opacity: 0;"
 											 s.style.cssText="opacity: 0;"
 											 img.src="images/change1.jpg"
 											 img2.style.cssText="-webkit-transform:	rotate(0deg);"
 											}
}


/*login section*/
function login1(){
	var rc = document.getElementById('h1register');
	var lo = document.getElementById('log-regi');
	var id = document.getElementById('login');

	if (num == 2) {id.style.cssText="color:rgb(4, 162, 95)"
	lo.style.cssText="opacity:1;-webkit-transform: 	scale(1,1);"};
	
	if (num == 1) {rc.style.cssText="opacity:1;transform:scale(1,1);"}

}

/* automatic fuction*/
function Removeitem(){
	var rc = document.getElementById('h1register');
	var lo = document.getElementById('log-regi');
	var id = document.getElementById('login');
	if (id == id) {id.style.cssText=""}
	lo.style.cssText="";
	rc.style.cssText="";
}


// comment display section
var commentcount = 0;
function postinfor(){
	var block= document.getElementById("block");
	var inset = document.getElementById('MSdisplay');
    var clone = block.cloneNode(true);
    var text = document.getElementById("input").value;
    var clear = document.getElementById('input');
    var counter = document.getElementById("counter");
    var innersector = document.getElementById("inner");
// comment counter
	if(text==""){/*commentcount. don't count*/}
		else{commentcount += 1; 
		counter.innerHTML = commentcount;
	}


// display on the massage board
	innersector.appendChild(clone);
	var data = inset.innerHTML= text;
			block.style.display="block";
			if (text=="") {block.style.display="none";}
			clear.value = '';

// storing process

localStorage.setItem(commentcount,data);

}


window.onload = function loaddata(){
var block= document.getElementById("block");
var innersector = document.getElementById("inner");
var text2 = "";
block.style.display="block";

// correct this function because it does not work as expected

for (var i = 0; i < localStorage.length; i++) {
	text2+= localStorage[i] + "<br>";
}
// display on the page
block.innerHTML=text2;
}




var characterCase = "Capital";
var characterNow = null;
var characterProv = null;
// var elmTag = null; 
var check = false;
var config = false;
const element = [];
const cssClass1 = ["btn btn-outline-primary","btn btn-outline-dark","btn btn-outline-info"];
const cssClass2 = ["btn btn-primary","btn btn-dark","btn btn-info"];
// Stores all data
var latters = {};
var catcher = true;
var provEml;
var currentEml;

$(document).ready(function(){

	// Load saved data 
	if (localStorage.getItem("latters") != null) {
		latters = JSON.parse(localStorage.getItem("latters"));

		for (var i = 0; i < Object.keys(latters).length; i++) {
			let chr = Object.keys(latters)[i]
			
			if (Object.keys(latters[chr][characterCase]["Y"]).length > 0) {
				$('button:contains("'+chr+'")').css("font-weight","bold");
			}
		}
	}
	

	$(this).contextmenu(function() {return false;}); // Removes right click menu
	$(this).bind('dragstart',function(){return false;});
	$.grid();

	// button toggle
	$(this).click(function(e){
		if (($(e.target).html() != "Download") && (e.target.nodeName == "BUTTON" || e.target.nodeName == "LABEL")) {

		let holdClass = e.target.className;
		if (e.target.nodeName != "LABEL") {config = true;}

			// // toggle style
			if ($.trim($(e.target).text()) == "UPPER - CASE") {$("#char").find("button").css("text-transform", "uppercase");characterCase = "Capital";check = true}
			if ($.trim($(e.target).text()) == "lower - case") {$("#char").find("button").css("text-transform", "lowercase");characterCase = "Small";check = true}

			// detect edits 
			characterProv = characterNow;
			provEml = currentEml;

			if (check == false) {
				characterNow = $.trim($(e.target).text());
				currentEml = e.target;
			}check = false;
			

			// toggle prev class
			if ((!jQuery.isEmptyObject(element)) && (e.target.nodeName == "BUTTON")) {
				let tempElm = $(element[holdClass.split("-")[holdClass.split("-").length-1]]);

				if (typeof $(tempElm).html() != "undefined" && typeof $(e.target).html() != "undefined"){
					if ($(tempElm).html() != $(e.target).html()) {
						let cActive = tempElm.attr('class');
						let cName = "btn btn-outline-primary";
						tempElm.removeClass(cActive).addClass(cName);
					}
				}
			}
			element[holdClass.split("-")[holdClass.split("-").length-1]] = e.target;

			// Collect data points
			if(config){$.dataBase();};
			if (characterProv != null && Object.keys(latters[characterProv][characterCase]["Y"]).length > 0) {$(provEml).css("font-weight","bold")}	
		}
	});
});



// Grid controlls / data manipulation 
$.grid = function(){
	$(".box").mousedown(function(e){ 
		$(this).mousemove(function(e){
			// check = "Edit";

			if (e.which == 1) {
				$("ul:eq("+(e.target.parentNode.id-1)+") li:eq("+(e.target.id-1)+")").css("background-color","#27AE60");
			}
			if (e.which == 3) {
				$("ul:eq("+(e.target.parentNode.id-1)+") li:eq("+(e.target.id-1)+")").css("background-color","");
			}
		});
		
		if (e.which == 1) {
			$("ul:eq("+(e.target.parentNode.id-1)+") li:eq("+(e.target.id-1)+")").css("background-color","#27AE60");
		}
		if (e.which == 3) {
			$("ul:eq("+(e.target.parentNode.id-1)+") li:eq("+(e.target.id-1)+")").css("background-color","");
		}
	});
}


$.dataBase = function(){
	try{ 
		catcher = true;
		if (latters[characterNow][characterCase]["Y"] != undefined) {catcher = false;}
	}catch(error){
		if (catcher == true) {
			characterNow = characterNow.toUpperCase();
			latters[characterNow] = {"Capital":{"X":{},"Y":{}},"Small":{"X":{},"Y":{}}};
		}
	}


	if (characterNow.length == 1) {
		if (characterProv != null) {$.writeData ();}
		$.loadData();
	}else{
		$.loadData();
		if (characterProv != null) {$.writeData ();}
	}
}



$.writeData = function(){
	console.log("Write")
	for (var r = 0; r < 5; r++) {
		for (var c = 0; c < 5; c++) {
			let parent = $("ul:eq("+(r)+") li:eq("+(c)+")");
			if (parent.css("background-color") != "rgba(0, 0, 0, 0)") {

				latters[characterProv][characterCase]["Y"][r+""+c] = r;
				latters[characterProv][characterCase]["X"][r+""+c] = c;
			}
			
		}
	}
}


$.loadData = function(){
	for (var r = 0; r < 5; r++) {
		for (var c = 0; c < 5; c++) {
			let parent = $("ul:eq("+(r)+") li:eq("+(c)+")");
			parent.css("background-color","");

			if (latters[characterNow][characterCase]["Y"][r+""+c] != undefined) {
				$("ul:eq("+latters[characterNow][characterCase]["Y"][r+""+c]+") li:eq("+latters[characterNow][characterCase]["X"][r+""+c]+")").css("background-color","#27AE60");
			}
		}
	}

	// check if character have edits 
	latters[characterNow] = {"Capital":{"X":{},"Y":{}},"Small":{"X":{},"Y":{}}};
	$.storeData(latters);


}


$.storeData = function(latters){
	localStorage.setItem("latters",JSON.stringify(latters));
}





/////////////////////////////////////////////////////////////// Download Data //////////////////////////////////////////////

function Download(){
	let download = latters;

	// adds variable to latters
	for (var i = 0; i < Object.keys(download).length; i++) {
		let chr = Object.keys(download)[i];
		let key = Object.keys(download[chr][characterCase]["X"]);

		key.map(k => {
			let textDataX = download[chr][characterCase]["X"][k];
			let textDataY = download[chr][characterCase]["Y"][k];

			download[chr][characterCase]["X"][k] = textDataX;
			download[chr][characterCase]["Y"][k] = textDataY;
		});
	}





	download = ("function jsonData(){\n\treturn\t"+(JSON.stringify(download))+"\n}");

	// Removes "
	let h = "";
	let g = "";
	for (var i = 0; i < download.length; i++) {
		if (download[i+2] == "Y") {
			g = "\n\t\t\t";
		}else{	
			g = "";	
		}
			h+=(download[i]+""+g);
		
	}

	download = h;
	
	// download process 
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(download));
	element.setAttribute('download', "TextData.js");

	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}

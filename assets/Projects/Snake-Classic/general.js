var gridX = window.innerWidth/24,
	gridY = window.innerHeight/24,
	paddingX = gridX - Math.floor(gridX),
	paddingY = gridY - Math.floor(gridY),
	totalGrid;
	gridX = parseInt(gridX);
	gridY = parseInt(gridY);

function LoadGrid(){
	var Container = document.getElementById('Container');
	if (gridX > 90) {gridX = 90}
	if (gridY > 90) {gridY = 90}

	Container.style.padding=""+(Number((paddingY+"")[2])+1)+"px 0px 0px "+0+"px";


// //------// PlAYERS data
	totalGrid = gridY*gridX
	xPlayer = Math.round(gridX/2);
	yPlayer = Math.round(gridY/2);

// //------// food data 
	maxGridX = gridX,
	maxGridY = gridY;
	
//------// Clonning Grid boxes
 	for (var i = 0; i < gridY; i++) {
		 var Elm = document.createElement('UL');
		 var Clone = Elm.cloneNode(true);
		 Clone.setAttribute("id",i);
		 Container.appendChild(Clone);

 		for (var j = 0; j < gridX; j++) {
			 var ElmC = document.createElement('LI');
			 var Child = ElmC.cloneNode(true);
			 Child.setAttribute("id",j);
			 document.getElementsByTagName('UL')[i].appendChild(Child);
		}
	}
}


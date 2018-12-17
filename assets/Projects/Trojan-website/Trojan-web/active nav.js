// the onclick active bar transition.
var style1;
var style2;
var style3;
var style4;
var style5;

function action1(){
	// the class active is a css file
	SetStyles();
	if (num == 1) {style1.className='active'} else if (num == 2 || 3 || 4 || 5) {style1.className=''};
	if (num == 2) {style2.className='active'} else if (num == 1 || 3 || 4 || 5) {style2.className=''};
	if (num == 3) {style3.className='active'} else if (num == 1 || 2 || 4 || 5) {style3.className=''};
	if (num == 4) {style4.className='active'} else if (num == 1 || 2 || 3 || 5) {style4.className=''};
	if (num == 5) {style5.className='active'} else if (num == 1 || 2 || 3 || 4) {style5.className=''};		
}


// on scroll function
window.onscroll = function() {myFunction()}

function myFunction(e){

	SetStyles();
	var vPos = document.body.scrollTop;
// the introduction section
		if (vPos <= 0 || vPos > 580){style1.className=''}
						else{style1.className='active'};

// the history section
		if (vPos <= 780 || vPos > 1400) {style2.className=''}
						else{style2.className='active'};

// the my creation section
		if (vPos <= 1570 || vPos > 2170) {style3.className=''} 
						 else{style3.className='active'};
// the fun facts section
		if (vPos <= 2350 || vPos > 2990) {style4.className=''} 
						 else{style4.className='active'};
// the summary section
		if (vPos <= 3140 || vPos > 3720) {style5.className=''} 
						 else{style5.className='active'};
}

function SetStyles (){
	style1 = document.getElementById('intro');
    style2 = document.getElementById('history');
    style3 = document.getElementById('creation');
    style4 = document.getElementById('facts');
    style5 = document.getElementById('summary');
}

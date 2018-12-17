function active(){
var page1 = document.getElementById('page1');
var page2 = document.getElementById('page2');
var page3 = document.getElementById('page3');
var page4 = document.getElementById('page4');
var page5 = document.getElementById('page5');
var page6 = document.getElementById('page6');

if (num==1) {page1.style.cssText="transform:translateX(0px)"}else{page1.style.cssText="transform:translateX(-2000px)"};
if (num==2) {page2.style.cssText="transform:translateX(2000px)"}else{page2.style.cssText="transform:translateX(-2000px)"};
if (num==3) {page3.style.cssText="transform:translateX(2000px)"}else{page3.style.cssText="transform:translateX(-2000px)"};
if (num==4) {page4.style.cssText="transform:translateX(2000px)"}else{page4.style.cssText="transform:translateX(-2000px)"};
if (num==5) {page5.style.cssText="transform:translateX(2000px)"}else{page5.style.cssText="transform:translateX(-2000px)"};
}

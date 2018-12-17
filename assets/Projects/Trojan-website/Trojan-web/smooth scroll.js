/* Smooth scroll for page */
Math.easeOut = function (t, b, c, d) { t /= d; return -c * t*(t-2) + b; };

(function() { // do not mess global space
var
  interval, // scroll is being eased
  mult = 0, // how fast do we scroll
  dir = 0, // 1 = scroll down, -1 = scroll up
  steps = 50, // how many steps in animation
  length = 30; // how long to animate
function MouseWheelHandler(e) {
  e.preventDefault(); // prevent default browser scroll
  clearInterval(interval); // cancel previous animation
  ++mult; // we are going to scroll faster
  var delta = -Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
  if(dir!=delta) { // scroll direction changed
    mult = 1; // start slowly
    dir = delta;
  }
  for(var tgt=e.target; tgt!=document.documentElement; tgt=tgt.parentNode) {
    var oldScroll = tgt.scrollTop;
    tgt.scrollTop+= delta;
    if(oldScroll!=tgt.scrollTop) break;
  }
  var start = tgt.scrollTop;
  var end = start + length*mult*delta; // where to end the scroll
  var change = end - start; // base change in one step
  var step = 0; // current step
  interval = setInterval(function() {
    var pos = Math.easeOut(step++,start,change,steps);
    //window.scrollTo(0,pos);
    tgt.scrollTop = pos;
    if(step>=steps) { // scroll finished without speed up - stop by easing out
      mult = 0;
      clearInterval(interval);
    }
  },10);
}
window.addEventListener("mousewheel", MouseWheelHandler, false);
window.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
})();






// smooth scrolling to a body div
(function()
{
      window.setTimeout = window.setTimeout; //
})();

      var smoothScr = {
      iterr : 30, // set timeout miliseconds ..decreased with 1ms for each iteration
        tm : null, //timeout local variable
      scrolls: function()
      {
        clearTimeout(this.tm); // stopp the timeout
        this.iterr = 30; // reset milisec iterator to original value
      },
      scrolls : function (el) // helper function instead of jQuery
      {
        var elm = el; 
        var realTop = 0;
        do
        {
          realTop += elm.offsetTop;
          elm = elm.offsetParent;
        }
        while(elm);
        return realTop;
      },
    scrolls: function()  // helper function instead of jQuery
      {
        var pgYoff = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
        return pgYoff;
      },
      scrolls : function (id) // the main func
      {
        this.stopShow(); // for click on another button or link
        var eOff, pOff, tOff, scrVal, pos, dir, step;

        eOff = document.getElementById(id).offsetTop; // element offsetTop

        tOff =  this.getRealTop(document.getElementById(id).parentNode); // terminus point 

        pOff = this.getPageScroll(); // page offsetTop

        if (pOff === null || isNaN(pOff) || pOff === 'undefined') pOff = 0;

        scrVal = eOff - pOff; // actual scroll value;

        if (scrVal > tOff) 
        {
          pos = (eOff - tOff - pOff); 
          dir = 1;
        }
        if (scrVal < tOff)
        {
          pos = (pOff + tOff) - eOff;
          dir = -1; 
        }
        if(scrVal !== tOff) 
        {
          step = ~~((pos / 4) +1) * dir;

          if(this.iterr > 1) this.iterr -= 1; 
          else this.itter = 0; // decrease the timeout timer value but not below 0
          window.scrollBy(0, step);
          this.tm = window.setTimeout(function()
          {
             smoothScr.anim(id);  
          }, this.iterr); 
        }  
        if(scrVal === tOff) 
        { 
          this.stopShow(); // reset function values
          return;
        }
    }
 }
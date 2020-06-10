(function (doc, win) {

  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      var font_s=10 * (clientWidth / 320);
      if(font_s<18){
        docEl.style.fontSize = 10 * (clientWidth / 320) + 'px';
      }else{
        docEl.style.fontSize=18 + 'px';
      }
      
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

// // SMOOTH SCROLLING SECTIONS
// $('a[href*=#]:not([href=#])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
//         || location.hostname == this.hostname) {
//
//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//            if (target.length) {
//              $('html,body').animate({
//                  scrollTop: target.offset().top
//             }, 1000);
//             return false;
//         }
//     }
// });// some code

// window.requestAnimationFrame(callback);
document.addEventListener("DOMContentLoaded", function(event) {
  var li = document.getElementsByTagName("li");
  li[0].classList.add("active");

  console.log("Window loaded");
  document.addEventListener("scroll", function(event) {
    var w_h = (getWindowSize()),
    o_h = Math.abs(getPos());
    console.log(li);
    console.log(w_h+" "+o_h);
    var numActive = 0;
    if(o_h>w_h){
      numActive = (Math.round(o_h/w_h));
      listLi(li, numActive);
    }else{
      // numActive = (Math.round(w_h/o_h));
      listLi(li, 0);
    }
    if(o_h>50)removeHeader();
    // if(w_h<o_h){
    //   listLi(li, numActive);
    //   // changeBackgroundFwd()
    // }else{
    //   // changeBackgroundBwd()
    // }
    // console.log(getWindowSize());
    // console.log(getPos());

  });
  // changeBackground(333);
});

function getWindowSize(){
var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('section')[0],
    x = win.innerWidth || docElem.clientWidth || body.clientWidth,
    y = win.innerHeight|| docElem.clientHeight|| body.clientHeight,
    size = {w:x,h:y};
// alert(x + ' × ' + y);
  return size.h;
}
function getPos(){
  var size = document.body.getBoundingClientRect();
  // var size = {
  //   'h': window.screen.height,
  //   'w': window.screen.width
  // }
  return size.y;
}
function changeBackgroundFwd() {
  console.log("click");
  doc = document.getElementById('section2017');
  doc.classList.remove("my-class");
  doc.classList.add("mu-class");
}
function changeBackgroundBwd() {
  console.log("click");
  doc = document.getElementById('section2017');
  doc.classList.remove("mu-class");
  doc.classList.add("my-class");
}
function listLi(elArr, numActive){
  var arr = elArr;
  if (arr==='undefined'){
    console.error("Array LI undefined");
  }else{
    for (var i = 0; i < arr.length; i++) {
      arr[i].classList.remove("active");
    }
    arr[numActive].classList.add("active");
  }

}
function removeHeader(){
  var elH1=document.getElementById("h1");
  elH1.classList.add("notvisible");
}

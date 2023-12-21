var buttons = document.getElementsByClassName("values");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick=click;
}
var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
  operator[i].onclick=click;
}
clear=document.getElementById("clear")
clear.onclick= function(){
  window.location.reload();
}
function click(){
  var value = this.value;
  var screen = document.getElementById("screen");
    screen.innerText += value;
}
equal=document.getElementById("equal")
equal.onclick=function(){
  var screen = document.getElementById("screen");
  screen.innerText= eval(screen.innerText)
}
var del = document.getElementById("del");
del.onclick = function () {
  var display = document.getElementById("screen");
  display.innerText = display.innerText.slice(0, -1);
};
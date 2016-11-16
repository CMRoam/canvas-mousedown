var canvas = document.getElementById('area_de_dibujo');
var lienzo = canvas. getContext('2d');
var x = 150;
var y = 150;

canvas.addEventListener('mousedown', dibujarMouse);

dibujarLinea('teal', x-1, y-1, x+1, y+1);

function dibujarMouse(evento){
  var xf = evento.offsetX;
  var yf = evento.offsetY;
  dibujarLinea('teal', x, y, xf, yf);
  x = xf;
  y = yf;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

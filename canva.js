var canvas = document.getElementById('mycanvas'); // seleccionamos el elemento canvas
var ctx = canvas.getContext('2d'); // seleccionamos el contexto 2d a partir del elemento

ctx.lineWidth = 5; // Grosor de la linea

var startx = 480; // Posicion X
var starty = 210; // Posicion Y
var eyerx = 470; // Posicion X
var eyery = 200; // Posicion Y
var eyelx = 490; // Posicion X
var eyely = 200; // Posicion Y
var smilex = 480; // Posicion X
var smiley = 220; // Posicion Y

ctx.font="bold 30px solid";
ctx.strokeStyle="blue";
ctx.fillText('Udenar',400,40,100);


ctx.strokeStyle = 'green'; // el color de la linea, azul, se pueden usar colores en ingles, en formato hexadecimal, en rgb y rgba
ctx.beginPath();
ctx.arc(eyerx, eyery, 1, 0, 2 * Math.PI); // Creamos un circulo para la cabeza. el orden de los parámetros son: posición x, posición y ancho y alto
ctx.stroke();

ctx.strokeStyle = 'green'; // el color de la linea, azul, se pueden usar colores en ingles, en formato hexadecimal, en rgb y rgba
ctx.beginPath();
ctx.arc(smilex, smiley, 1, 3, 2 * Math.PI); // Creamos un circulo para la cabeza. el orden de los parámetros son: posición x, posición y ancho y alto
ctx.stroke();

ctx.strokeStyle = 'green'; // el color de la linea, azul, se pueden usar colores en ingles, en formato hexadecimal, en rgb y rgba
ctx.beginPath();
ctx.arc(eyelx, eyely, 1, 0, 2 * Math.PI); // Creamos un circulo para la cabeza. el orden de los parámetros son: posición x, posición y ancho y alto
ctx.stroke();


ctx.beginPath();
ctx.arc(startx, starty, 30, 0, 2 * Math.PI); // Creamos un circulo para la cabeza. el orden de los parámetros son: posición x, posición y ancho y alto
ctx.stroke();


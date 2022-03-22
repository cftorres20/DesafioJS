let consulta = prompt("¿Que producto desea comprar A, B o C?");
let consultaDos = parseFloat(prompt("¿Cuantos productos desea comprar?"));
const A = 300;
const B = 450;
const C = 500;

const multiplicacion = (a, b) => a * b;

if (consulta == "A" || consulta == "a") {
  let resultado = multiplicacion(A, consultaDos);

  alert("El total es " + resultado + " Pesos");

  let formaPago = prompt("Desea Abonar con Tarjeta, recargo 5% (SI/NO)");

  if (formaPago == "si" || formaPago == "SI") {
    let resultadoPago = multiplicacion(resultado, 1.05);

    document.write("El total con tarjeta es " + resultadoPago + " Pesos");
  } else {
    document.write("El total a abonar es " + resultado);
  }
}
if (consulta == "B" || consulta == "b") {
  let resultado = multiplicacion(B, consultaDos);

  alert("El total es " + resultado + " Pesos");

  let formaPago = prompt("Desea Abonar con Tarjeta, recargo 5% (SI/NO)");

  if (formaPago == "si" || formaPago == "SI") {
    let resultadoPago = multiplicacion(resultado, 1.05);

    document.write("El total con tarjeta es " + resultadoPago + " Pesos");
  } else {
    document.write("El total a abonar es " + resultado);
  }
}
if (consulta == "C" || consulta == "c") {
  let resultado = multiplicacion(C, consultaDos);

  alert("El total es " + resultado + " Pesos");

  let formaPago = prompt("Desea Abonar con Tarjeta, recargo 5% (SI/NO)");

  if (formaPago == "si" || formaPago == "SI") {
    let resultadoPago = multiplicacion(resultado, 1.05);

    document.write("El total con tarjeta es " + resultadoPago + " Pesos");
  } else {
    document.write("El total a abonar es " + resultado);
  }
} else {
  alert("Gracias por visitarnos");
}

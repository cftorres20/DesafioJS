let consulta = prompt("¿Que producto desea comprar A, B o C?");
let consultaDos = parseFloat(prompt("¿Cuantos productos desea comprar?"));

const productA = ["A", 300, { medida: "M" }, { origen: "Arg" }];
const productB = ["B", 450, { medida: "L" }, { origen: "Br" }];
const productC = ["C", 500, { medida: "XL" }, { origen: "Chn" }];
const nuevoProduct = [""];

const multiplicacion = (a, b) => a * b;

if (consulta == "A" || consulta == "a") {
  let resultado = multiplicacion(productA[1], consultaDos);

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
  let resultado = multiplicacion(productB[1], consultaDos);

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
  let resultado = multiplicacion(productC[1], consultaDos);

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

let question = prompt(
  "Que producto agregarias a nuestra cartera? 'NO para salir'  "
);

while (question !== "NO") {
  nuevoProduct.push(question);
  question = prompt(
    "Que producto agregarias a nuestra cartera? 'NO para salir' "
  );
  for (let index = 0; index < nuevoProduct.length; index++) {
    console.log(nuevoProduct[index]);
  }
}

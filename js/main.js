// Ejemplo aplicado
const suma = (a, b) => {return a + b};
const resta = (a, b) => {return a - b};
const cuota3 = (valor) => {return valor * 0.25};
const cuota6 = (valor) => {return valor * 0.45};
const cuota12 = (valor) => {return valor * 0.75};
const iva = (valor) => {return valor * 0.21};
//Valores por defecto
let precioProducto = 1000;
const descuento = (valor) => {return valor * 0.10};

console.log("El valor del Producto es: $" + precioProducto);
let ivaProducto = iva(precioProducto);
console.log("El IVA del Producto es: $" + ivaProducto);
let sumaCalculo = suma(precioProducto, ivaProducto);
console.log("La suma del Producto más IVA es: $" + sumaCalculo);
let descuentoProducto = descuento(precioProducto);
console.log("El Descuento es: $" + descuentoProducto);
let restaCalculo = resta(sumaCalculo, descuentoProducto);
let calculo = restaCalculo;
console.log("El valor es: $" + calculo);
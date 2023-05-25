// Función para pedir el valor de la compra
function pedirPrecio() {
    // Se pide el valor y se verifica que no sea menor o igual a cero
    let precio = parseFloat(prompt('Ingrese Valor de la Compra'));
    while (precio <= 0) {
    precio = parseFloat(prompt('No puede ingresar un monto menor o igual a 0. Por favor, ingrese otro valor.'));
    }
    // Se devuelve el valor ingresado
    return precio;
    }
    
    // Se saluda al usuario
    alert('Bienvenido, queremos ayudarte a calcular lo que necesites pagar en cualquier forma de pago');
    
    // Se definen las funciones para cálculos de operaciones
    const suma = (a, b) => a + b;
    const resta = (a, b) => a - b;
    const cuotas3 = (valor) => valor * 0.25;
    const cuotas6 = (valor) => valor * 0.50;
    const cuotas12 = (valor) => valor * 0.75;
    const iva = (valor) => valor * 0.21;
    const descuento = (valor) => valor * 0.10;
    
    // Se pide al usuario el valor de la compra
    const valorCompra = pedirPrecio();
    
    // Se muestra el valor de la compra
    console.log(`El valor del Producto es: $${valorCompra}`);
    
    // Se calcula y muestra el IVA correspondiente
    const valorIva = iva(valorCompra);
    console.log(`El IVA del Producto es: $${valorIva}`);
    
    // Se calcula y muestra el descuento correspondiente
    const valorDescuento = descuento(valorCompra);
    console.log(`El descuento correspondiente al 10% abonando en efectivo: $${valorDescuento}`);
    
    // Se calcula y muestra el total a pagar en cada forma de pago
    const totalContado = valorCompra + valorIva - valorDescuento;
    console.log(`El total a pagar de contado (Debito o Credito 1 pago) es: $${totalContado}`);
    
    const total3Cuotas = suma(valorCompra, cuotas3(valorCompra), valorIva) - valorDescuento;
    console.log(`El total a pagar en 3 cuotas (con interés del 25%) es: $${total3Cuotas}`);
    
    const total6Cuotas = suma(valorCompra, cuotas6(valorCompra), valorIva) - valorDescuento;
    console.log(`El total a pagar en 6 cuotas (con interés del 50%) es: $${total6Cuotas}`);
    
    const total12Cuotas = suma(valorCompra, cuotas12(valorCompra), valorIva) - valorDescuento;
    console.log(`El total a pagar en 12 cuotas (con interés del 75%) es: $${total12Cuotas}`);
 
    // Se despide al usuario
  alert('Gracias por ser parte de esta experiencia Recomiendanos');

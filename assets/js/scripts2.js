function saludo(nombre){
    mensaje = `Hola  ${nombre} `;
    alert(mensaje);
}

// invocamos la funcion saludo pasando como argumento el string Elfar
// saludo('Elfar');

// los argumentos de la función son datos adicionales para que la función haga su trabajo
// usted como programador decide si utiliza o no los argumentos
function procesaEntrada(callback){
    let suNombre = prompt('Ingrese su nombre');
    callback(suNombre);
}

function procesaEntrada2(){
    let suNombre = prompt('Ingrese su nombre');
    saludo(suNombre);
}

procesaEntrada(saludo);
procesaEntrada2();

// funcion de callback saludar ES6

const saludar = ()=>{
    console.log('Hola Mundo');
}

// funcion principal que recibe como argumento la funcion de callback

setInterval(saludar, 4000);
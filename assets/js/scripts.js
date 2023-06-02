var procesosTerminados = 0;

const incrementarConteo  = ()=>{
 let elConteo = document.getElementById('conteo');
 elConteo.innerText = procesosTerminados;
};

const inicioProceso1 = ()=>{
    let elParrafo1 = document.getElementById('proceso1');
    elParrafo1.innerText = 'TERMINÓ EL PROCESO 1';
    elParrafo1.style.color = 'black';
    elParrafo1.style.backgroundColor = 'white';
    procesosTerminados+=1;
    // procesosTerminados = procesosTerminados + 1;
    incrementarConteo();
};

const inicioProceso2 =()=>{
    let elParrafo2 = document.getElementById('proceso2');
    elParrafo2.innerText = 'ha CULMINADO el proceso 2';
    elParrafo2.style.color = 'black';
    elParrafo2.style.backgroundColor = 'white';
    procesosTerminados+=1;
    // procesosTerminados = procesosTerminados + 1;
    incrementarConteo();
};
const inicioProceso3 = ()=>{

    let computador = {
        tipo: 'laptop',
        sistema: 'windows'
    };
    
    let servidor = {
        tipo: 'servidor',
        sistema: 'linux'
    };
    
    let tablet = {
        tipo: 'tablet',
        sistema: 'android'
    }
    
    let telefono = {
        tipo: 'movil',
        sistema: 'ios'
    }

    let otroEquipment = new Set([computador, servidor, computador, computador,servidor,tablet, computador, servidor, tablet,]);
    console.log(`El tamaño del Set es: ${otroEquipment.size}`);
    otroEquipment.add(telefono);
    console.log(`El nuevo tamaño del Set despues de agregar el objeto telefono es: ${otroEquipment.size}`);

    for(let elemento of otroEquipment.values()){
        // console.log(elemento);
        console.log(`Clave: ${elemento.tipo} , Valor:${elemento.sistema}`);
    }
    procesosTerminados+=1;
    // procesosTerminados = procesosTerminados + 1;
    incrementarConteo();
};

const comenzar = ()=>{
    setTimeout(inicioProceso1, 7000);
    setTimeout(inicioProceso2, 20000);
    setTimeout(inicioProceso3, 3000);
    let dato1 = 5;
    let dato2 = 8;
    let resultado = dato1+dato2;
    console.log(`El resultado de la suma es: ${resultado}`);
    let elParrafoPrincipal= document.getElementById('principal');
    elParrafoPrincipal.innerText = 'culminó el proceso principal';
    elParrafoPrincipal.style.color = 'red';
    elParrafoPrincipal.style.backgroundColor = 'yellow';
    procesosTerminados+=1;
    // procesosTerminados = procesosTerminados + 1;
    incrementarConteo();
};

const asignarEventos = ()=>{
    let elBoton = document.getElementById('btnIniciar');
    elBoton.addEventListener('click', comenzar);
};
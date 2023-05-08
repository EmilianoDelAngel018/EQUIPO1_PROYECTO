/* let restante = solicitarPresupuesto(presupuesto);
let boton = document.querySelector("#enviar");
boton.disabled = false;
function solicitarPresupuesto() {
    const presupuesto = parseInt(prompt("INGRESA TU PRESUPUESTO SEMANAL:"));
    document.querySelector("#total").innerHTML = "" + presupuesto;
    return presupuesto;
}
function imprimirGastos() {
    const gasto = document.querySelector("#gasto").value;
    const cantidad = parseInt(document.querySelector("#cantidad").value);
    const lista = document.querySelector("#gastos");
    const item = document.createElement("li");
    item.innerHTML = "" + gasto + " ---- $" + cantidad;
    lista.appendChild(item);
    restante = restante - cantidad;
    document.querySelector('#restante').innerHTML = "" + restante;

    if (restante <= 0) {
        alert('sin presupuesto')
        boton.disabled = true;

    }

    return;
}
function agregarBotonDelate() {
}

 */


//IMPLEMENTANDO CLASES Y FUNCIONES 

let boton = document.querySelector("#enviar");
boton.disabled = false;
let presupuesto;
const formulario = document.querySelector('#agregar-gasto');
const contenedorGastos = document.querySelector('#gastos ul');


function solicitarPresupuesto() {
    const presupuestoIngresado = prompt('INGRESA TU PRESUPUESTO SEMANAL');
    if (presupuestoIngresado === '' || presupuestoIngresado === null || isNaN(presupuestoIngresado) || presupuestoIngresado <= 0) {
        window.location.reload();
    }
    presupuesto = new Presupuesto(presupuestoIngresado);
    ui.addPresupuestoHTML(presupuesto);
}


formulario.addEventListener('submit', agregarGasto)
document.addEventListener('DOMContentLoaded', solicitarPresupuesto);


class Presupuesto {
    constructor(presupuesto) {
        this.gastos = [];
        this.presupuesto = presupuesto;
        this.restante = presupuesto;
    }

    gastoLi(gasto) {
        this.gastos = [...this.gastos, gasto];
        this.restarGastos();
    }

    restarGastos(total, cantidad) {
        const gastado = total - cantidad;
        this.restante = presupuesto - gastado;
    }

    eliminarGasto(id) {
        this.gastos = this.gastos.filter(gasto => gasto.id !== id);
        this.restarGastos();
    }
}

class UI {

    agregarGastos(gastos) {
        this.limpiarHtml();
        gastos.forEach(gasto => {
            const { cantidad, nombre, id } = gasto;
            const gastoLi = document.createElement('li');
            gastoLi.dataset.id = id;
            gastoLi.innerHTML = `${nombre} ---  $${cantidad}     `;

            const btnEliminarGasto = document.createElement('button');
            btnEliminarGasto.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnEliminarGasto.innerHTML = `x`;
            btnEliminarGasto.onclick = () => {
                eliminarGasto(id);
            }
            gastoLi.appendChild(btnEliminarGasto)
            contenedorGastos.appendChild(gastoLi);
        });
    }

    limpiarHtml() {
        while (contenedorGastos.firstChild) {
            contenedorGastos.removeChild(contenedorGastos.firstChild);
        }
    }

    condicionAlertas(restante) {
        if (restante <= 0) {
            alert('LIMITE DE PRESUPUESTO ALCANZADO');
            boton.disabled = true;
        }
    }

    addPresupuestoHTML(cantidad) {
        const { presupuesto, restante } = cantidad;
        document.querySelector('#total').innerHTML = `${presupuesto}`;
        document.querySelector('#restante').innerHTML = `${restante}`;
    }
}


const ui = new UI();



function agregarGasto(e) {
    e.preventDefault();
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);
    if (isNaN(cantidad) || cantidad <= 0) {
        alert('DATO DESCONOCIDO');
        return
    }
    const gasto = { nombre, cantidad, id: Date.now() }
    presupuesto.gastoLi(gasto);
    const { gastos, restante } = presupuesto;
    ui.agregarGastos(gastos);
    formulario.reset();
}

function eliminarGasto(id) {
    presupuesto.eliminarGasto(id);
    const { gastos, restante } = presupuesto;
    ui.agregarGastos(gastos);
}
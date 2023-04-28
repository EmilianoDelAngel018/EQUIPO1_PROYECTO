
let presu

class Presupuesto {
    constructor(presu) {
        this.gastos = []
    }
    AgregarGasto(gasto) {
        this.gastos = [...this.gastos, gasto]//modificar esta parte y agregar el eliminar gasto
    }

}


function PreguntarPresupuesto() {
    const presupuesto = prompt('INGRESE SU PRESUPUESTO')
    if (presupuesto === '' || presupuesto === num || isNaN(presupuesto) || presupuesto <= 0) {
        window.location.reload()
    }
    presu = new Presupuesto(presupuesto)
}


const gastoObject={
    gasto: '',
    cantidad: '',
}


class UI {
    imrimirAlerta(mensaje, tipo){
    const divAlerta=document.createElement('div')
    divAlerta.classList.add('text-center', 'alert', 'd-block', 'col-12')


    //definir la condicion y sacar el retante PENDIENTE
    if (2>1){//Condicion para imprimir alerta segun el retante del presupuesto
        divAlerta.classList.add('alert')
    }
    }

    imprimirGastos({gastos}){
        this.limpiarHTML()

        gastos.forEach(gasto=>{
            const {gasto, cantidad}=gasto

            const divGasto=document.createElement('div')
            divGasto.classList.add('gasto')
            divGasto.dataset.id=id

            const gastoParrafo=document.createElement('p')
            gastoParrafo.innerHTML=`<span class='' ></span>${gasto}`
        })


    }
}


const ui = new UI();

function nuevoGasto(e){
    e.preventDefault()
    const {gasto, cantidad}=gastoObject
}

let restante = solicitarPresupuesto(presupuesto);
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
    const eliminar = document.createElement('button')
    const btnEliminar = Document.querySelector("li");
    btnEliminar.onclick = () => eliminarGasto(id) //darle funcion al boton de EliminarCita
    btnEliminar.classList.add('btn', 'btn-danger', 'mr-2')
    btnEliminar.innerHTML = 'Eliminar <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/> </svg> '
}




console.log('Working...');

const precio = document.getElementById('btnPrecio');
const submit = document.getElementById('btnSubmit');
precio.addEventListener('click', calcular);

function calcular() {
    const result = document.getElementById('result');
    const service = document.getElementById('service').value;
    const passengers = document.getElementById('pax').value;
    const cc = document.getElementById('cc').checked;
    
    console.log(service);
    let price = 0;
    let total = 0;
    if (service === "Eco Class"){
        price = 10;
    } else if (service === "Business Class"){
        price = 15;
    } else if (service === "Premium"){
        price = 20;
    } else {
        alert('No ha seleccionado el tipo de servicio');
    }
    if (cc === true){
        price *= 1.1;
    }
    total = price * passengers;
    result.innerHTML = `Total a pagar: <b>${total}</b>`;
    submit.disabled = false;
}

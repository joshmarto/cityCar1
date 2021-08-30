console.log('Working...');

const submit = document.getElementById('btnSubmit');
submit.addEventListener('click', calcular);

function calcular() {
    const service = document.getElementById('service').value;
    const passengers = document.getElementById('passengers').value;
    const payment = document.getElementById('cash').checked;
    
    console.log(service, passengers, payment);
}

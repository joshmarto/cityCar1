const submission = document.getElementById('btnSubmit');
submission.addEventListener('click', enviar);

function enviar(){
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const date = document.getElementById('datePick').value;
  const time = document.getElementById('timePick').value;
  const arrival = document.getElementById('arrivalCheck').checked;
  const departure = document.getElementById('departureCheck').checked;
  const airline = document.getElementById('aero').value;
  const flight = document.getElementById('flight').value;
  const service = document.getElementById('service').value;
  const passengers = document.getElementById('pax').value;
  const cash = document.getElementById('cash').checked;
  const cc = document.getElementById('cc').checked;

  const reservation = { name, phone, date, time, arrival, departure, airline, flight, service, passengers, cash, cc };
  console.log(reservation);
}

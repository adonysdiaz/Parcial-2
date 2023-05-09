const calcularBtn = document.getElementById('calcular');
const resultadoDiv = document.getElementById('resultado');

calcularBtn.addEventListener('click', () => {
  const origenSelect = document.getElementById('select-origin');
  const destinoSelect = document.getElementById('select-destination');
  const fechaInput = document.getElementById('date');
  const horaInput = document.getElementById('hora');

  const origen = origenSelect.value;
  const destino = destinoSelect.value;
  const fecha = new Date(fechaInput.value);
  const hora = horaInput.value;

  let costo = 200;

  if (origen !== destino) {
    costo += 50;
  }

  if (fecha.getDay() === 4 || fecha.getDay() === 5 || fecha.getDay() === 6) {
    costo += 100;
  }

  const horaNumber = parseInt(hora.replace(':', ''), 10);

  if ((horaNumber >= 700 && horaNumber <= 900) || (horaNumber >= 1600 && horaNumber <= 1800)) {
    costo += 75;
  }

  resultadoDiv.innerHTML = `
    <p>Origen: ${origen}</p>
    <p>Destino: ${destino}</p>
    <p>Fecha de salida: ${fecha.toLocaleDateString()}</p>
    <p>Hora de salida: ${hora}</p>
    <p>Costo del boleto: $${costo}</p>
  `;
  origenSelect.selectedIndex = 0;
  destinoSelect.selectedIndex = 0;
  fechaInput.value = '';
  horaInput.value = '';
});

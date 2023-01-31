// A data/hora para a qual queremos fazer a contagem regressiva
const countDownDate = new Date("nov 25, 2023 16:37:52").getTime();

const daysElement = document.querySelector("#days");
const hoursElement = document.querySelector("#hours");
const minsElement = document.querySelector("#mins");
const secsElement = document.querySelector("#secs");

function linkIsncrition() {
  const url = "https://www.terra.com.br/";
  window.open(url, '_target');
}

// Executa myfunc a cada segundo
const timeFuction = setInterval(function() {
  const now = new Date().getTime();
  const timeleft = countDownDate - now;

// Calculando os dias, horas, minutos e segundos restantes
const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

// O resultado é enviado para o elemento específico
daysElement.innerHTML = days;
hoursElement.innerHTML = hours;
minsElement.innerHTML = minutes;
secsElement.innerHTML = seconds;

// Exibe a mensagem quando a contagem regressiva termina
if (timeleft < 0) {
  clearInterval(timeFuction);
  daysElement.innerHTML = "00";
  hoursElement.innerHTML = "00";
  minsElement.innerHTML = "00";
  secsElement.innerHTML = "00";
}
}, 100);
const contador = document.querySelector(".contador");

const dataFinal = new Date('2024-05-17T23:59:59');

function atualizarcontador() {
  const hoje = new Date();
  const intervalotempo = dataFinal - hoje;

  if(intervalotempo <= 0) {
    contador.textContent = "promoção encerrada!";
  } else {
    
const dias = Math.floor(intervalotempo / (1000 * 60 * 60 * 24));
  
const horas = Math.floor((intervalotempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
const minutos = Math.floor((intervalotempo % (1000 * 60 * 60) / (1000 * 60)));
    
const segundos = Math.floor((intervalotempo % (1000 * 60)) / 1000);
    
    contador.textContent = dias + "d " + horas + "h " + minutos + "min " + segundos + "s";
  }
}

setInterval(atualizarcontador, 1000);

atualizarcontador();
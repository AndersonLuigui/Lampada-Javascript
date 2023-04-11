// CAPITURANDO BOTÕES DO HTML
const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp  = document.getElementById ('lamp');



// FUNÇÕES
function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1; // O indexOf FAZ UMA VARREDURA PRA SABER SE TEM UMA STRING DESTA MANEIRA SABEMOS QUE A LAMPADA ESTÁ NO ESTADO ('QUEBRADO')
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff() {
    if (!isLampBroken() ) {
        lamp.src = './img/desligada.jpg';
    }
}

function lampBroken() {
    lamp.src = './img/quebrada.jpg';
}


// ESCUTANDO OS EVENTOS E MANDANDO FAZER AÇÃO
turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);
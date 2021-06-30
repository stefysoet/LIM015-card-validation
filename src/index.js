import validator from './validator.js';

console.log(validator);



function numeros(e) {
    if (e.keyCode < 48 || e.keyCode >57) {
        e.returnValue = false;
    }
}

function val() {
    const numero = document.getElementById('numero').value;
    const validador = validator.isValid(numero);
    const mascara = validator.maskify(numero);

    document.getElementById('valor').innerHTML = validador ? 'TARJETA VÁLIDA' : 'TARJETA INVÁLIDA';
    document.getElementById('maskify').innerHTML = mascara;
}

document.getElementById('numero').addEventListener('keypress', (e) => { numeros(e); });
document.getElementById('validar').addEventListener('click', () => { val() });

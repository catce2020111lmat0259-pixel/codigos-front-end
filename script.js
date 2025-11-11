//função auxiliar
function getById(id) {
    return document.getElementById(id);
};

//questão 01

//variáveis
let peso = getById('peso');
let altura = getById('altura');

//calcular imc
getById('calcularIMC').addEventListener('click', () => {
    let IMC = Number(peso.value)/(Number(altura.value)**2);
    let resultado;
    if (IMC < 18.5) {
        resultado = 'Abaixo do peso';
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        resultado = 'Peso normal';
    } else if (IMC >= 25 && IMC <= 29.9) {
        resultado = 'Sobrepeso';
    } else {
        resultado = 'Obesidade';
    }
    getById('resultado1').innerText = `IMC: ${IMC.toFixed(2)} – ${resultado}`;

});

//questão 02

//lista de candidatos
let nomes = ['Candidato A', 'Candidato B', 'Candidato C'];
let votos = [0, 0, 0]; //índice 0 = A, 1 = B, 2 = C

//votar
getById('votar').addEventListener('click', () => {
    let escolhido = getById('candidatos').value;
    
    for (let i = 0; i < nomes.length; i++) {
        if (escolhido === nomes[i]) {
            votos[i] += 1;
        }
    }
    getById('resultado2').innerText = `Voto para ${escolhido}`;
});
//apurar
getById('apurar').addEventListener('click', () => {
    let vencedor = '';
    let maiorVoto = 0;

    for (let i = 0; i < nomes.length; i++) {
        if (votos[i] > maiorVoto) {
            maiorVoto = votos[i];
            vencedor = nomes[i];
        }
    }
    getById('resultado2').innerText = `Vencedor: ${vencedor} com ${maiorVoto} votos.`;
});
//zerar
getById('zerar').addEventListener('click', () => {
    for (let i = 0; i < votos.length; i++) {
        votos[i] = 0;
    }

    getById('resultado2').innerText = 'Contagem zerada.';
});

//questão 03

//valor da temperatura
let valorTemp = getById('valorTemp');

//conversão
getById('converter').addEventListener('click', () => {
    let temperatura = getById('temperatura').value;
    let conversao;
    let simbolo;

    if (temperatura === 'paraFahrenheit') {
        conversao = Number(valorTemp.value)*(1.8) + 32;
        simbolo = '°F';
    } else {
        conversao = (Number(valorTemp.value) - 32) / (1.8);
        simbolo = '°C';
    }

    getById('resultado3').innerText = `${conversao.toFixed(1)} ${simbolo}`;
});

//questão 04

let valor = getById('valorGasto');
let total = 0;

//adicionar
getById('adicionarValor').addEventListener('click', () => {
    total += Number(valor.value);
    valor.value = '';
});

//exibe resultado
getById('exibirResumo').addEventListener('click', () => {
    let mensagem;
    if (total < 50) {
        mensagem = 'Gasto leve.';
    } else if (total >= 50 && total <= 200) {
        mensagem = 'Gasto moderado.';
    } else {
        mensagem = 'Cuidado com as despesas!';
    }
    getById('resultado4').innerText = `total: ${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}. ${mensagem}`;
});

//questão 05

let numeroDigitado = getById('numero');

function sortearNumero() {
    return Math.floor(Math.random() * 10) + 1;
}

let numeroSorteado = sortearNumero();

//verificar número
getById('verificarNumero').addEventListener('click', () => {
    let numero = Number(numeroDigitado.value);
    let mensagemVerificacao;
    
    while (true) {
        if (numero > numeroSorteado) {
            mensagemVerificacao = 'Maior que o número!';
            break;
        } else if (numero < numeroSorteado) {
            mensagemVerificacao = 'Menor que o número!';
            break;
        } else {
            mensagemVerificacao = 'Acertou!';
            numeroSorteado = sortearNumero(); // sorteia novo número
            break;
        }
    }
    getById('resultado5').innerText = mensagemVerificacao;
});

const form = document.querySelector('.form');

let btnCalcular = document.querySelector('#btn-calcular');
let tipoSistema = document.querySelector('#tipoSistema');
let tipoLigacao = document.querySelector('#tipoLigacao');
let consumoMensal = document.querySelector('#consumoMensal');
let municipio = document.querySelector('#municipio');
let rendimento = 0.85;

let resultadoTipoSistema = document.querySelector('.tipo-sistema');
let consumoCalculado = document.querySelector('.consumo');
let economia = document.querySelector('.economia');


function sistemaEscolhido () {
    return tipoSistema.value;
}

function ligacaoEscolhida () {

    let ligacao = tipoLigacao.value;

    const consumoMinimoCobrado = {
        mono: 'monofasico',
        bi: 'bifasico',
        tri: 'trifasico'
    };
    
    if (ligacao === consumoMinimoCobrado.mono){
            consumoSelecionado = 30;
    }
    
    if (ligacao === consumoMinimoCobrado.bi){
        consumoSelecionado = 50;
    }
        
    if (ligacao === consumoMinimoCobrado.tri){
        consumoSelecionado = 100;
    }

    return consumoSelecionado;
}

function inputConsumo () {
    let conveterParaNumber = parseFloat(consumoMensal.value);
    return conveterParaNumber;
}

function irradiacao() {
    
    let municipios = municipio.value
    let irradiacaoSolarDiariaMedia;
    
    const listaMunicipios = {
        macapa: 'macapa',
        santana: 'santana',
        serraDoNavio: 'serraDoNavio'
    };

    if (municipios === listaMunicipios.macapa){
        irradiacaoSolarDiariaMedia = 4.94;
    }

    if (municipios === listaMunicipios.santana){
        irradiacaoSolarDiariaMedia = 4.83;
    }
    
    if (municipios === listaMunicipios.serraDoNavio){
        irradiacaoSolarDiariaMedia = 4.56;
    }

    return irradiacaoSolarDiariaMedia;
}

function dimensionarSistema () {

    let potMinima = ligacaoEscolhida();
    let consumo = inputConsumo();
    let tempoDeExposição = irradiacao();

    let potCalculada = (consumo - potMinima)/30;

    let potDimensionada = (potCalculada/(tempoDeExposição*rendimento));

    return potDimensionada.toFixed(2);
}


form.addEventListener('submit', (e) => {

    e.preventDefault();

    let sistemaTipo = sistemaEscolhido();
    let potenciaDoSistema = dimensionarSistema();

    resultadoTipoSistema.innerHTML = `SISTEMA SELECIONADO: ${sistemaTipo}`;
    consumoCalculado.innerHTML = `POTÊNCIA DO SEU SISTEMA: ${potenciaDoSistema} kWp`;
});













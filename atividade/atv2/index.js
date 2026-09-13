const readline = require('node:readline');

const SALDO_INICIAL_EM_CENTAVOS = 100000;

const conta = {
  titular: 'Thiago Scharf',
  agencia: '0001',
  numero: '12345-6',
  saldoEmCentavos: SALDO_INICIAL_EM_CENTAVOS,
};

const formatadorDeMoeda = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

function formatarMoeda(valorEmCentavos) {
  return formatadorDeMoeda.format(valorEmCentavos / 100);
}

function converterParaCentavos(valorDigitado) {
  const valor = valorDigitado.trim().replace(/\s/g, '').replace(/^R\$/i, '');

  if (!valor || !/^\d+(?:[.,]\d{1,2})?$/.test(valor)) {
    return null;
  }

  const [reais, centavos = ''] = valor.replace(',', '.').split('.');
  const valorEmCentavos = Number(reais) * 100 + Number(centavos.padEnd(2, '0'));

  return Number.isSafeInteger(valorEmCentavos) && valorEmCentavos > 0
    ? valorEmCentavos
    : null;
}

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar(pergunta) {
  return new Promise((resolve) => leitor.question(pergunta, resolve));
}

function exibirMenu() {
  console.log(`
========== CAIXA ELETRÔNICO ==========
1 - Consultar dados da conta
2 - Consultar saldo
3 - Realizar débito
4 - Realizar crédito
0 - Sair
=======================================`);
}

function exibirDadosDaConta() {
  console.log(`
--- Dados da conta ---
Titular: ${conta.titular}
Agência: ${conta.agencia}
Conta: ${conta.numero}`);
}

function exibirSaldo() {
  console.log(`\nSaldo atual: ${formatarMoeda(conta.saldoEmCentavos)}`);
}

async function realizarDebito() {
  const resposta = await perguntar('\nDigite o valor do débito: R$ ');
  const valorEmCentavos = converterParaCentavos(resposta);

  if (valorEmCentavos === null) {
    console.log('\nValor inválido. Digite um número maior que zero.');
    return;
  }

  if (valorEmCentavos > conta.saldoEmCentavos) {
    console.log(`\nSaldo insuficiente. Saldo disponível: ${formatarMoeda(conta.saldoEmCentavos)}`);
    return;
  }

  conta.saldoEmCentavos -= valorEmCentavos;
  console.log(`\nDébito realizado com sucesso. Novo saldo: ${formatarMoeda(conta.saldoEmCentavos)}`);
}

async function realizarCredito() {
  const resposta = await perguntar('\nDigite o valor do crédito: R$ ');
  const valorEmCentavos = converterParaCentavos(resposta);

  if (valorEmCentavos === null) {
    console.log('\nValor inválido. Digite um número maior que zero.');
    return;
  }

  conta.saldoEmCentavos += valorEmCentavos;
  console.log(`\nCrédito realizado com sucesso. Novo saldo: ${formatarMoeda(conta.saldoEmCentavos)}`);
}

async function iniciarCaixaEletronico() {
  console.log('Bem-vindo ao mini sistema bancário!');

  let executando = true;

  while (executando) {
    exibirMenu();
    const opcao = (await perguntar('\nEscolha uma opção: ')).trim();

    switch (opcao) {
      case '1':
        exibirDadosDaConta();
        break;
      case '2':
        exibirSaldo();
        break;
      case '3':
        await realizarDebito();
        break;
      case '4':
        await realizarCredito();
        break;
      case '0':
        executando = false;
        console.log('\nObrigado por utilizar o sistema. Até logo!');
        break;
      default:
        console.log('\nOpção inválida. Escolha uma opção de 0 a 4.');
    }
  }

  leitor.close();
}

iniciarCaixaEletronico();

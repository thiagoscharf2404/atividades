# Atividade 2 — Mini sistema bancário

Sistema bancário interativo desenvolvido em JavaScript para ser executado no terminal com Node.js.

## Funcionalidades

- consulta dos dados da conta;
- consulta do saldo em reais;
- realização de débito com validação de saldo;
- realização de crédito;
- validação das opções e dos valores informados;
- menu contínuo até o usuário escolher sair.

O saldo é armazenado internamente em centavos para que créditos e débitos sejam calculados sem erros de arredondamento.

## Como executar

Com o Node.js instalado, abra o terminal nesta pasta e execute:

```bash
node index.js
```

Os valores podem ser informados com vírgula ou ponto como separador decimal, por exemplo: `50,25` ou `50.25`.

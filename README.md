# ObserverWatch

## Objetivo
Este projeto implementa o padrão de design 'Observer' para gerenciar notificações de vendas. O principal objetivo do projeto é reduzir a quantidade de solicitações ao banco de dados após cada venda.

## Características
- Venda realizada: Um evento é desencadeado sempre que uma transação de venda é concluída com sucesso.
- Observadores: Após cada venda, todas as partes interessadas ou 'observadores' são notificadas simultaneamente, eliminando a necessidade de buscar informações do banco de dados.
- Redução de carga no DB: Este projeto visa essencialmente minimizar a quantidade de solicitações ao banco de dados, melhorando assim a eficiência e a performance do sistema.

## Instalação

1. Clone o repositório:

```bash
   git clone https://github.com/RXGabriel/ObserverWatch.git
   cd ObserverWatch
```

2. Instale as dependências:

```bash
npm install
```

## Uso
Para iniciar o ObserverWatch, execute os seguintes comandos:

 iniciar o servidor:
```bash
  npm run start
```
rodar os testes:
```bash
npm run test
```
gerar relatório de cobertura de teste:
```bash
npm run cov
```

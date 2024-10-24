# Cypress Automation with Allure Report

Este projeto implementa automação de testes utilizando [Cypress](https://www.cypress.io/),
Após execução dos testes um relatório é gerado com allure [Allure Report](https://docs.qameta.io/allure/).

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)
- [Allure CLI](https://docs.qameta.io/allure/#_installing_a_commandline) (para gerar relatórios)

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/cypress-allure-automation.git

2. instalar dependencias

    ```bash
    npm install

3. Executar os testes e gerar um relatorio

    ```bash
    npm run allure:chro

Esse comando esta executando os testes no navegador do Chorme e ao final gera um arquivo allure-results com resultado dos testes

4. Gerar relatorio Allure

    ```bash
    npm run allure:repo

Relatorio será gerado e abrirá no navegador exibindo o resultado dos testes



## Plus de relatorio
    Utilizando do github pages o relatorio gerado nessas suites de teste é publicado como artefato e gerado uma pagina com o relatorio para da branch main para a branch report_page_TAYA_cypress

    - Um teste irá falhar para ser visualizado como o relatorio apresentará o erro
Feature: Financiamento aquisição de imovel

    
    Scenario: Tela Aquisição de imovel
        Given que esteja na tela de Calculadoras
        When escolher o produto "Aquisição de Imovel"
        And  e clicar em proxima etapa
        Then deve ser redirecionado para tela de inserir dados para calculo de aquisição
    
    Scenario: Calcular financiamento Aquisição de imovel Residencial
        Given que esteja na tela de aquisição imovel
        When  Preencher formulario com tipo de imovel Residencial
        And   clicar em calcular para simular Financiamento sem ITBI
        Then  usuario é redirecionado para a tela com as condicões de financiamento

    Scenario: Calcular financiamento Aquisição de imovel Comercial
        Given que esteja na tela de aquisição imovel
        When  Preencher formulario com tipo de imovel Comercial
        And   clicar em calcular para simular Financiamento sem ITBI
        Then  usuario é redirecionado para a tela com as condicões de financiamento

    
    Scenario: Conhecer todas as ofertas de Aquisição de imovel
        Given que esteja na tela de resultados das melhores condicões
        And   queira conhecer todas as ofertas
        When  clicar no botão "CONHECER TODAS AS OFERTAS"
        And   preencher formulario com todos os dados obrigatorios
        Then  validar formulario enviado com sucesso
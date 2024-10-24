Feature: Consorcio
    
    Scenario: Tela de Consorcio
        Given que esteja na tela de Calculadoras
        When escolher o produto Consorcio
        And  e clicar em proxima etapa
        Then deve ser redirecionado para tela de inserir dados para calculo do Consorcio
    
    
    Scenario: Calcular consorcio de veiculo leve pessoa fisica
        Given que esteja na tela de consorcio pessoa fisica
        When  preencher fomulario de consorcio
        And   calcular a analise dos consorcios disponiveis
        Then  deve ser redirecionado para tela de resultado com as melhores condições de consorcio
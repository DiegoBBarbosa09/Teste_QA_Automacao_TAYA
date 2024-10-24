Feature: Emprestimo com garantia
    
    Scenario: Tela de emprestimo com garantia
        Given que esteja na tela de Calculadoras
        When escolher o produto emprestimo com garantia de imovel
        And  e clicar em proxima etapa
        Then deve ser redirecionado para tela de inserir dados para calculo de emprestimo


    
    Scenario: Calcular emprestimo Aquisição de imovel Residencial pessoa fisica com taxas inclusas
        Given que esteja na tela de emprestimo com garantia de imovel pessoa fisica
        When  preencher fomulario de emprestimo incluindo todas as taxas
        And   calcular a analise de emprestimo
        Then  deve ser redirecionado para tela de resultado com as melhores condições
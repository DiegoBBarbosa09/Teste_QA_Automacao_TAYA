/// <reference types="cypress" />

export class Emprestimo {
    static validarItensPaginaEmprestimo() {
        const itensPagina = [
            'Calculadora Rápida',
            'Tipo do Imóvel',
            'Residencial',
            'Comercial',
            'Data de Nascimento',
            'Valor do Imóvel',
            'Valor do Empréstimo',
            'Prazo de Pagamento (em meses)',
            'Deseja financiar o IOF da operação?',
            'Deseja financiar a tarifa de Avaliação?',
            'Deseja financiar a Tarifa de Emissão do Contrato? (5% do valor do empréstimo)'
        ]
        itensPagina.forEach(itensPagina => {
            cy.get('.MuiContainer-root').contains(itensPagina).should('have.text', itensPagina)
        })
    }

    static tipoImovelResidencial() {
        cy.get('[data-testid="HomeOutlinedIcon"]').should('be.visible')
        cy.get('[data-testid="HomeOutlinedIcon"]').click()
    }

    static tipoImovelComercial() {
        cy.get('[data-testid="StorefrontIcon"]').should('be.visible')
        cy.get('[data-testid="StorefrontIcon"]').click()
    }

    static inputDataNascimento() {
        cy.get('label').contains('Data de Nascimento').as('input_data')
        cy.get('@input_data').parent().find('input').type('25/03/2000')
    }

    static inputValorImovel() {
        cy.get('label').contains('Valor do Imóvel').as('input_valor_imovel')
        cy.get('@input_valor_imovel').type('250000')
        cy.wait(1000)
    }

    static inputValorEmprestimo() {
        cy.get('label').contains('Valor do Empréstimo').as('input_valor_emprestimo')
        cy.get('@input_valor_emprestimo').should('be.visible')
        cy.get('@input_valor_emprestimo').parent().find('input').type('150000')
    }

    static inputPrazoPagamento() {
        cy.get('label').contains('Prazo de Pagamento (em meses)').as('input_prazo_pagamento')
        cy.get('@input_prazo_pagamento').type('240')
    }

    static preencherFormularioEmprestimoResidencial() {     
        this.tipoImovelResidencial(),            
        this.inputDataNascimento()
        this.inputValorImovel()
        this.inputValorEmprestimo()
        this.inputPrazoPagamento()
    }

    static validarValoresEntrada() {
        const valoresEntrada = [
            "Valores de entrada",
            "Valor do Imóvel",
            "Valor do Financiamento",
            "Valor da Entrada",
            "Prazo",
            "Tipo de Amortização",
            "Data de Nascimento"
        ]
        valoresEntrada.forEach(valoresEntrada => {
            cy.get('.css-1ul47bz').contains(valoresEntrada).should('have.text', valoresEntrada)
        })
    }

    static validarEmprestimoGarantia() {
        const valoresAquisicao = [
            "Empréstimo com Garantia Imóvel",
            "Primeira parcela",
            "Última parcela",
            "Renda mínima",
            "Taxa de Juros (a partir de)",
            "CET (Custo Efetivo Total)"
        ]
        valoresAquisicao.forEach(valoresAquisicao => {
            cy.get('.css-ptyavj').contains(valoresAquisicao).should('have.text', valoresAquisicao)
        })
    }

}
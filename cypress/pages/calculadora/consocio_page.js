/// <reference types="cypress" />

export class Consorcio {
    static validarPaginaConsorcio() {
        const itensPagina = [
            'Calculadora Rápida',
            'Tipo do Bem',
            'Veículo Leve',
            'Imóvel',
            'Motocicleta',
            'Veículo Pesado',
            'Data de Nascimento',
            'Valor do Bem',
            'Valor do Crédito',
            'Prazo de Pagamento (em meses)'
        ]
        itensPagina.forEach(itensPagina => {
            cy.get('.MuiContainer-root').contains(itensPagina).should('have.text', itensPagina)
        })
    }

    static tipoBemVeiculoLeve() {
        cy.get('[data-testid="AirportShuttleOutlinedIcon"]').click()
    }

    static tipoBemImovel() {
        cy.get('[data-testid="HomeOutlinedIcon"]').click()
    }

    static tipoBemMotocicleta() {
        cy.get('[data-testid="TwoWheelerOutlinedIcon"]').click()
    }

    static tipoBemVeiculoPesado() {
        cy.get('[data-testid="LocalShippingOutlinedIcon"]').click()
    }

    static inputDataNascimento() {
        cy.get('label').contains('Data de Nascimento').as('input_data')
        cy.get('@input_data').parent().find('input').type('25/03/2000')
    }

    static inputValorBem() {
        cy.get('label').contains('Valor do Bem').as('input_valor_bem')
        cy.get('@input_valor_bem').type('150000')
        cy.wait(1000)
    }

    static inputValorCredito() {
        cy.get('label').contains('Valor do Crédito').as('input_valor_credito')
        cy.get('@input_valor_credito').type('150000')
        cy.wait(1000)
    }

    static inputPrazoPagamento() {
        cy.get('label').contains('Prazo de Pagamento (em meses)').as('input_prazo_pagamento')
        cy.get('@input_prazo_pagamento').type('120')
        cy.wait(1000)
    }

    static consorcioVeiculoLeve() {
        this.tipoBemVeiculoLeve()
        this.inputDataNascimento()
        this.inputValorBem()
        this.inputValorCredito()
        this.inputPrazoPagamento()
    }

    static validarValoresEntrada() {
        const valoresEntrada = [
            "Valores de entrada",
            "Valor do veiculo leve",
            "Valor do Financiamento",
            "Prazo",
            "Tipo de Amortização",
            "Data de Nascimento"
        ]
        valoresEntrada.forEach(valoresEntrada => {
            cy.get('.css-1y8acpc').contains(valoresEntrada).should('have.text', valoresEntrada)
        })
    }

    static validarConsorcio() {
        const valoresAquisicao = [
            "Consórcio",
            "Primeira parcela",
            "Última parcela",
            "Renda mínima",
            "Taxa de Administração (a partir de)",
            "CET (Custo Efetivo Total)"
        ]
        valoresAquisicao.forEach(valoresAquisicao => {
            cy.get('.css-2jiueu').contains(valoresAquisicao).should('have.text', valoresAquisicao)
        })
    }
}
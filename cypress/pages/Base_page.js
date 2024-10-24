/// <reference types="cypress" />

export class Base {
    static baseUrlCalc() {
        cy.visit({
            url: '/calculadora/aai-controle',
            failOnStatusCode: false
        })
    }

    static selecaoProdutoAquisicao() {
        cy.get('[data-testid="HouseIcon"]').should('be.visible')
        cy.get('[data-testid="HouseIcon"]').click()
    }

    static selecaoProdutoEmprestimo() {
        cy.get('[data-testid="AttachMoneyIcon"]').should('be.visible')
        cy.get('[data-testid="AttachMoneyIcon"]').click()
    }

    static selecaoProdutoConsorcio() {
        cy.get('[data-testid="SavingsIcon"]').should('be.visible')
        cy.get('[data-testid="SavingsIcon"]').click()
    }

    static botaoSubmeter(paramsEtapa) {
        cy.get('button').contains(paramsEtapa).click()
    }

    static paginaAquisicao(paramsEtapa) {
        this.baseUrlCalc();
        this.selecaoProdutoAquisicao();
        this.botaoSubmeter(paramsEtapa)
    }

    static botaoTipoPessoa(tipoPessoa) {
        cy.get('[class="css-frij0f"]').contains(tipoPessoa).click()
    }

    static paginaEmprestimo(tipoPessoa, paramsEtapa) {
        this.baseUrlCalc();
        this.selecaoProdutoEmprestimo()
        this.botaoTipoPessoa(tipoPessoa)
        this.botaoSubmeter(paramsEtapa)
    }

    static paginaConsorcio(tipoPessoa, paramsEtapa) {
        this.baseUrlCalc();
        this.selecaoProdutoConsorcio()
        this.botaoTipoPessoa(tipoPessoa)
        this.botaoSubmeter(paramsEtapa)
    }
}
///<reference types="cypress" />

export class AquisicaoImovel {
    static validarItensAquisicao() {
        const itensPagina = [
            'Calculadora Rápida',
            'Tipo do Imóvel',
            'Data de Nascimento',
            'Valor do Imóvel',
            'Valor do Financiamento',
            'Prazo de Financiamento (em meses)',
            'Deseja financiar as despesas de ITBI e Registro? (5% do valor do imóvel)'
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
        cy.get('@input_valor_imovel').type('300000')
    }

    static inputValorFinanciamento() {
        cy.get('label').contains('Valor do Financiamento').as('input_valor_financiamento')
        cy.get('@input_valor_financiamento').type('255000')
    }

    static inputPrazoFinanciamento() {
        cy.get('label').contains('Prazo de Financiamento (em meses)').as('input_prazo_financiamento')
        cy.get('@input_prazo_financiamento').type('420')
    }

    static preencherFormularioFinanciamentoResidencial() {     
        this.tipoImovelResidencial(),            
        this.inputDataNascimento()
        this.inputValorImovel()
        this.inputValorFinanciamento()
        this.inputPrazoFinanciamento()
    }

    static preencherFormularioFinanciamentoComercial() {     
        this.tipoImovelComercial(),            
        this.inputDataNascimento()
        this.inputValorImovel()
        this.inputValorFinanciamento()
        this.inputPrazoFinanciamento()
    }

    static validarPaginaResultados() {
        const condicoes = [
            "Encontramos as melhores condições"
        ]
        condicoes.forEach(condicoes => {
            cy.get('.css-n6nfem').contains(condicoes).should('have.text', condicoes)
        })
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

    static validarAquisicaoImovel() {
        const valoresAquisicao = [
            "Aquisição de Imóvel",
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

    static formName() {
        cy.get('label').contains('Nome').type('Ana Oliveira')
    }

    static formCpf() {
        cy.get('label').contains('CPF').type('987.654.321-00 ')
    }

    static formCelularContato() {
        cy.get('label').contains('Celular para contato').type('2199876-5432')
    }

    static formEmail() {
        cy.get('label').contains('E-mail').type('anaoliveira@example.com')
    }

    static formSeletorContatado() {
        cy.get('[data-testid="ArrowDropDownIcon"]').click()        
        cy.contains('WhatsApp').click()
        cy.get('[data-testid="ArrowDropDownIcon"]').click()  
    }

    static formClienteIndicado() {
        cy.get('label').contains('Cliente indicado por').type('Pedro Santos')
    }

    static BotaoTermos() {
        cy.get('.css-1m9pwf3').click()
        cy.wait(1000)
    }

    static preencherFormContato() {
        this.formName()
        this.formCpf()
        this.formCelularContato()
        this.formEmail()
        this.formSeletorContatado()
        this.formClienteIndicado()
        this.BotaoTermos()
    }

    static validarAlertToasty() {
        cy.get('.Toastify__toast-body > div').should('be.visible')
        cy.contains('Obrigado! Um consultor de crédito entrará em contato em breve').should('be.visible')
    }
    
}
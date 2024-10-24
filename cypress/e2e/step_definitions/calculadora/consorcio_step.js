import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { Base } from '../../../pages/Base_page';
import { Consorcio } from '../../../pages/calculadora/consocio_page';


When(/^escolher o produto Consorcio$/, () => {
	Base.selecaoProdutoConsorcio()
	Base.botaoTipoPessoa('PF')
});

Then(/^deve ser redirecionado para tela de inserir dados para calculo do Consorcio$/, () => {
	Consorcio.validarPaginaConsorcio()
});


Given(/^que esteja na tela de consorcio pessoa fisica$/, () => {
	Base.paginaConsorcio('PF', 'PRÓXIMA ETAPA')
});

When(/^preencher fomulario de consorcio$/, () => {
	Consorcio.consorcioVeiculoLeve()
});


When(/^calcular a analise dos consorcios disponiveis$/, () => {
	Base.botaoSubmeter('CALCULAR')
});


Then(/^deve ser redirecionado para tela de resultado com as melhores condições de consorcio$/, () => {
	Consorcio.validarValoresEntrada()
	Consorcio.validarConsorcio()
});



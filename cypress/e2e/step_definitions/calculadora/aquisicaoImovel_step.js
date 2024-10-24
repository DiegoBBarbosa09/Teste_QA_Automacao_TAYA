import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { Base } from '../../../pages/Base_page'
import { AquisicaoImovel } from '../../../pages/calculadora/aquisicaoImovel_page';

Given(/^que esteja na tela de Calculadoras$/, () => {
	Base.baseUrlCalc()
});

Given(/^que esteja na tela de aquisição imovel$/, () => {
	Base.paginaAquisicao('PRÓXIMA ETAPA')
});

When(/^escolher o produto "([^"]*)"$/, (args1) => {
	Base.selecaoProdutoAquisicao()
});

When(/^e clicar em proxima etapa$/, () => {
	Base.botaoSubmeter('PRÓXIMA ETAPA')
});


When(/^Preencher formulario com tipo de imovel Residencial$/, () => {
	AquisicaoImovel.preencherFormularioFinanciamentoResidencial()
});

When(/^clicar em calcular para simular Financiamento sem ITBI$/, () => {
	Base.botaoSubmeter('CALCULAR')
});


When(/^Preencher formulario com tipo de imovel Comercial$/, () => {
	AquisicaoImovel.preencherFormularioFinanciamentoComercial()
});


Then(/^deve ser redirecionado para tela de inserir dados para calculo de aquisição$/, () => {
	AquisicaoImovel.validarItensAquisicao()
});

Then(/^usuario é redirecionado para a tela com as condicões de financiamento$/, () => {
	AquisicaoImovel.validarPaginaResultados()
	AquisicaoImovel.validarValoresEntrada()
	AquisicaoImovel.validarAquisicaoImovel()
});



Given(/^que esteja na tela de resultados das melhores condicões$/, () => {
	Base.paginaAquisicao('PRÓXIMA ETAPA')
	AquisicaoImovel.preencherFormularioFinanciamentoResidencial()
	Base.botaoSubmeter('CALCULAR')
});


When(/^queira conhecer todas as ofertas$/, () => {
	
});

When(/^clicar no botão "([^"]*)"$/, (paramsBotao) => {
	Base.botaoSubmeter(paramsBotao)
});

When(/^preencher formulario com todos os dados obrigatorios$/, () => {
	AquisicaoImovel.preencherFormContato()
	Base.botaoSubmeter('ENVIAR')
});

Then(/^validar formulario enviado com sucesso$/, () => {
	AquisicaoImovel.validarAlertToasty()
});

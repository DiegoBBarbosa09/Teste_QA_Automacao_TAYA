import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { Base } from '../../../pages/Base_page';
import { Emprestimo } from '../../../pages/calculadora/emprestimo_page';


When(/^escolher o produto emprestimo com garantia de imovel$/, () => {
	Base.selecaoProdutoEmprestimo()
    Base.botaoTipoPessoa('PF')
});


Then(/^deve ser redirecionado para tela de inserir dados para calculo de emprestimo$/, () => {
	Emprestimo.validarItensPaginaEmprestimo()
});


Given(/^que esteja na tela de emprestimo com garantia de imovel pessoa fisica$/, () => {
	Base.paginaEmprestimo('PF', 'PRÓXIMA ETAPA')
});


When(/^preencher fomulario de emprestimo incluindo todas as taxas$/, () => {
	Emprestimo.preencherFormularioEmprestimoResidencial()
});


When(/^calcular a analise de emprestimo$/, () => {
	Base.botaoSubmeter('CALCULAR')
});


Then(/^deve ser redirecionado para tela de resultado com as melhores condições$/, () => {
	return true;
});


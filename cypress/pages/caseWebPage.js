class caseWebPage {

    acessarUrl(){
        cy.visit("https://the-internet.herokuapp.com/challenging_dom")
        cy.screenshot('acessou o site')
    }

    clicarNos3BotoesPrincipais(){
        cy.xpath("//a[@class = 'button']").click()
        console.log("clicou no primeiro botao")
        cy.screenshot('clicou no primeiro botao')
        cy.xpath("//a[@class = 'button alert']").click()
        console.log("clicou no segundo botao")
        cy.screenshot('clicou no segundo botao')
        cy.xpath("//a[@class = 'button success']").click()
        console.log("clicou no terceiro botao")
        cy.screenshot('clicou no terceiro botao')
    }

    clicarEmTodosEditDeletDaGrid(){

        cy.get('table tbody tr a').each(($linha) => {
        const href = $linha.attr('href');
        cy.wrap($linha).click();
        cy.url().should('include', href);
});

    }
}

module.exports = new caseWebPage();
const {When, Then, Given} = require("@badeball/cypress-cucumber-preprocessor")
const caseWebPage = require('../../pages/caseWebPage')


Given("acesso o site", () => {
    caseWebPage.acessarUrl()
})

When ("clico nos 3 botoes principais apresentados na tela", () => {
    caseWebPage.clicarNos3BotoesPrincipais()
})  

When ("clico em todos os botoes de edit e delet da grid", () => {
    caseWebPage.clicarEmTodosEditDeletDaGrid()
}) 
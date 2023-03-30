class LsLoginPO {

    visit(URL) {
        cy.visit(URL)
    }

    acceptCookie() {
        //accept GDPR
        cy.get('#accept_cookie').click()
        //view the website in english
        cy.get('#yt17').click()
    }
}
export default LsLoginPO
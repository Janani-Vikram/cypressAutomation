//login
Cypress.Commands.add('login', (username, password) => {
    cy.get('#txtUsername').clear().type(username)
    cy.get('#txtPassword').clear().type(password)
    cy.get('#btnLogin').click()
})

//
Cypress.Commands.add('selectProduct', (productName) => {
    cy.get('h4.card-title').each(($ele, index, $list) => {
        const mobile = $ele.text()
        if (mobile.includes(productName)) {
            cy.log(mobile)
            cy.get('button.btn.btn-info').eq(index).click()
        }
    })
})

Cypress.Commands.add('notifications', (typeOfNotifications) => {
    cy.get('.MuiAlert-message').invoke('text').then((text) => {
        const toastText = text;
        expect(toastText).to.contains(typeOfNotifications);
    })
})

const env = Cypress.env()
//TMS
Cypress.Commands.add("signin", () => {
    cy.fixture('tms').then(function (data) {
        cy.visit(env.tmsUrl + data.baseURL)
        cy.get('#login_username').type(data.username)
        cy.get('#login_password').type(`${data.password}{enter}`)
    })
})

Cypress.Commands.add("add_a_new", (data) => {
    cy.get('#tms-quick-link-select').select(data)
})
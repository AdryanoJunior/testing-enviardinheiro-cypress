class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "#username" ,
            passwordField: "#password" ,
            loginButton: "[data-test='signin-submit']" ,
            newButton: "[href='/transaction/new']" ,
        }
        return selectors
    }

    acessLoginPage() {
        cy.visit('')
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    accessNewPay() {
       cy.get(this.selectorsList().newButton).click()
    }
}

export default LoginPage
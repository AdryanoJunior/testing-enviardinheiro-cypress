class SendMoneyPage {
    selectorsList() {
        const selectors = {
            selectFriend: '[data-test="user-list-item-uBmeaz5pX"] > .MuiListItemAvatar-root > .MuiAvatar-root > .MuiAvatar-img' ,
            selectAmount: "#amount" ,
            createDescription: "#transaction-create-description-input" ,
            payButton: '[data-test="transaction-create-submit-payment"]' ,
            transactionSubmittedAlert: '[data-test="alert-bar-success"]'

        }
        return selectors
    }

    sendMoney() {
        cy.get(this.selectorsList().selectFriend).click({force: true})
        cy.get(this.selectorsList().selectAmount).type('5')
        cy.get(this.selectorsList().createDescription).type('Testing')
        cy.get(this.selectorsList().payButton).click()
    }

    checkSuccessAlert() {
        cy.get(this.selectorsList().transactionSubmittedAlert).should('be.visible')
    }
}

export default SendMoneyPage
class SendFailPage {
    selectorsList() {
        const selectors = {
            selectFriend: '[data-test="user-list-item-uBmeaz5pX"] > .MuiListItemAvatar-root > .MuiAvatar-root > .MuiAvatar-img' ,
            selectAmount: "#amount" ,
            createDescription: "#transaction-create-description-input" ,
            payButton: '[data-test="transaction-create-submit-payment"]' ,
        }
        return selectors
    }

    sendFaiLMoney() {
        cy.get(this.selectorsList().selectFriend).click({force: true})
        cy.get(this.selectorsList().selectAmount).type('3500')
        cy.get(this.selectorsList().createDescription).type('Testing')
        cy.get(this.selectorsList().payButton).click()
    }
}

export default SendFailPage
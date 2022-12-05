class CheckoutCompetePage {
    get competeHeader () {
        return cy.get('.complete-header');
    }

    get backToHomeButton () {
        return cy.get('button[name="back-to-products"]');
    }

}

module.exports = CheckoutCompetePage;
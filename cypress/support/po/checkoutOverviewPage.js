
class CheckoutOverviewPage {
    get shoppingCartName () {
        return cy.get('.inventory_item_name');
    }

    get finishButton () {
        return cy.get('button[name="finish"]');
    }

}

module.exports = CheckoutOverviewPage;
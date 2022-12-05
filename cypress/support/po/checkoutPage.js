
class CheckoutPage {

    get firstNameField () {
        return cy.get('input[name="firstName"]');
    }

    get lastNameField () {
        return cy.get('input[name="lastName"]');
    }

    get postalCodeField () {
        return cy.get('input[name="postalCode"]');
    }

    get submitButton () {
        return cy.get('input[type="submit"]');
    }

}

module.exports = CheckoutPage;
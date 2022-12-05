class LoginPage {
    visit(){
        cy.visit('https://www.saucedemo.com/');
    }

    get loginButton () {
        return cy.get('input[type="submit"]');
    }

    get usernameField () {
        return cy.get('input[id="user-name"]');
    }

    get passwordField () {
        return cy.get('input[id="password"]');
    }

    login () {
        this.usernameField.type('standard_user');
        this.passwordField.type('secret_sauce');
        this.loginButton.click();
    }
}

module.exports = LoginPage;
const CartItems = require('./shoppingCartItems')

class ShoppingCartPage {
    constructor () {
        this.cartItems = new CartItems();
     }


    get checkoutButton () {
        return cy.get('button[name="checkout"]');
    } 

}

module.exports = ShoppingCartPage;
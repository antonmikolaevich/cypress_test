const ShoppingItem = require('./shoppingItem');

class CartItems {
    get cards() {
        return cy.get('.cart_item');
    } 

    getByIndex (index) {
        return new ShoppingItem(this.cards.eq(index));
    }
}

module.exports = CartItems;
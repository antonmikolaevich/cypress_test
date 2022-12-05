const ProductsCard = require('../po/productsCard');

class ProductsItems {
    constructor(selector) {
        this.selector = selector
    }
    get elements() {
        return cy.get('.inventory_item')
    }

    getByIndex(index) {
        return new ProductsCard(this.elements.eq(index));
    }
}

module.exports = ProductsItems;
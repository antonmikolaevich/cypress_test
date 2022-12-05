const ProductsItems = require('./prodItems');
const LeftSideBar = require('../po/leftSideBar');
const FilterDropdown = require('../po/filterDropdown');


class HomePage {
    constructor () {
       this.productsItems = new ProductsItems();
       this.leftSideBar = new LeftSideBar();
       this.filterDropdown = new FilterDropdown();
    }

    get shoppingCartIcon () {
        return cy.get('span.shopping_cart_badge');
    }
}

module.exports = HomePage;

class ProductsCard {
    constructor(element){
        this.element = element;
    }

    get addToShoppingCartButton () {
        return this.element.find('button[id*="add-to-cart"]');
    }

    get productsCardName () {
        return this.element.find('.inventory_item_name');
    }

}

module.exports = ProductsCard
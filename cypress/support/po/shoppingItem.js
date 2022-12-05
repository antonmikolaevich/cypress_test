class ShoppingItem {
    constructor(element){
        this.element = element;
    }

    get productsShoppingCartName () {
        return this.element.find('.inventory_item_name');
    }

}

module.exports = ShoppingItem;
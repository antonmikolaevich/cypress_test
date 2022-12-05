
class FilterDropdown {
    get activeOption () {
        return cy.get('.active_option');
    }

    get filterValue () {
        return cy.get('.product_sort_container');
    }


}

module.exports = FilterDropdown;
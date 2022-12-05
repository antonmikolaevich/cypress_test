
class LeftSideBar {
    get expandButton () {
        return cy.get('button[id="react-burger-menu-btn"]');
    }

    get leftSideBarMenu () {
        return cy.get('.bm-menu-wrap');
    }

    get collapseButton () {
        return cy.get('.bm-menu-wrap button[id="react-burger-cross-btn"]');
    }
}

module.exports = LeftSideBar;
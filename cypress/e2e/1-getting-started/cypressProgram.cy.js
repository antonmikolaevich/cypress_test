const { it } = require("mocha");
const LoginPage = require('../../support/po/loginPage');
const HomePage = require('../../support/po/homePage');
const ShoppingCartPage = require("../../support/po/shoppingCartPage");
const CheckoutPage = require("../../support/po/checkoutPage");
const CheckoutOverviewPage = require("../../support/po/checkoutOverviewPage");
const CheckoutCompetePage = require("../../support/po/checkoutCompetePage");

describe('swagLabs website', () => {
    beforeEach(() => {
        const loginPage = new LoginPage ();
        loginPage.visit();
        loginPage.login();
    })

    it('add to cart first item', () => {
        const homePage = new HomePage(); 
        const shoppingCartPage = new ShoppingCartPage();     
        homePage.productsItems.getByIndex(0).addToShoppingCartButton.click();
        homePage.shoppingCartIcon.contains('1');
        homePage.productsItems.getByIndex(0).productsCardName.then(($btn) => {
            const txt = $btn.text();
            homePage.shoppingCartIcon.click();
        shoppingCartPage.cartItems.getByIndex(0).productsShoppingCartName.then(($btn2) => {
            expect($btn2.text()).to.equal(txt);
        })
        })
    })

    it('left side bar section is visible', () => {
        const homePage = new HomePage(); 
        homePage.leftSideBar.expandButton.click();
        homePage.leftSideBar.leftSideBarMenu.should('be.visible');
        homePage.leftSideBar.collapseButton.click();
        homePage.leftSideBar.leftSideBarMenu.should('not.be.visible');
    })

    it("make an order", () => {
        const homePage = new HomePage(); 
        const shoppingCartPage = new ShoppingCartPage();
        const checkoutPage = new CheckoutPage();
        const checkoutOverviewPage = new CheckoutOverviewPage();
        const checkoutCompetePage = new CheckoutCompetePage();
        homePage.productsItems.getByIndex(0).addToShoppingCartButton.click();
        homePage.shoppingCartIcon.contains('1'); 
        homePage.productsItems.getByIndex(0).productsCardName.then(($btn) => {
            const txt = $btn.text();
            homePage.shoppingCartIcon.click();
            shoppingCartPage.checkoutButton.click();
            checkoutPage.firstNameField.type('Anton');
            checkoutPage.lastNameField.type('Rak');
            checkoutPage.postalCodeField.type('0162');
            checkoutPage.submitButton.click();
            checkoutOverviewPage.shoppingCartName.then(($btn2) => {
                expect($btn2.text()).to.equal(txt);
                checkoutOverviewPage.finishButton.click();
                checkoutCompetePage.competeHeader.should('be.visible');
                checkoutCompetePage.competeHeader.should('have.text', 'THANK YOU FOR YOUR ORDER');
            })
            checkoutCompetePage.backToHomeButton.click();
        })
    })

    it('sorting the items', () => {
        const homePage = new HomePage();
        homePage.filterDropdown.activeOption.should('be.visible');
        homePage.filterDropdown.activeOption.then(($btn) => {
            const txt = $btn.text();
        homePage.filterDropdown.filterValue.select('Name (Z to A)');  
        homePage.filterDropdown.activeOption.then(($btn2) => {
            expect($btn2.text()).not.to.equal(txt);
        })
    })
    })
})
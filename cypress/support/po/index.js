const LoginPage = require('../../support/po/loginPage');
const HomePage = require('../../support/po/homePage');
const ShoppingCartPage = require("../../support/po/shoppingCartPage");
const CheckoutPage = require("../../support/po/checkoutPage");
const CheckoutOverviewPage = require("../../support/po/checkoutOverviewPage");
const CheckoutCompetePage = require("../../support/po/checkoutCompetePage");


const homePage = new HomePage(); 
const shoppingCartPage = new ShoppingCartPage(); 
const loginPage = new LoginPage ();
const checkoutPage = new CheckoutPage();
const checkoutOverviewPage = new CheckoutOverviewPage();
const checkoutCompetePage = new CheckoutCompetePage();
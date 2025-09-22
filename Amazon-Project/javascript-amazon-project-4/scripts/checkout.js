import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProductsFetch } from "../data/products.js";
import { cart } from "../data/cart-class.js";
//import "../data/cart-class.js"
//import '../data/backend-practice.js' ;

// practicing asynch await
async function loadPage() {
    await loadProductsFetch();
    const value = await new Promise((resolve) => {
        cart.loadCart(() => {
            resolve('this is a string'); // string gets saved to value
        });
    });

    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary(); 
}
loadPage();

/*
// practicing promises
Promise.all([
    loadProductsFetch(), 
    new Promise((resolve) => {
        cart.loadCart(() => {
            resolve();
        });
    })
]).then((values) => {
    console.log(values);
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
});
*/

// recommended to use promises than callbacks
/*
new Promise((resolve) => {
    loadProducts(() => {
        resolve('value1'); // passes this value to the next below
    });
}).then((value) => {
    console.log(value);
    return new Promise((resolve) => {
        cart.loadCart(() => {
            resolve();
        });
    });
}).then(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
});
*/

/*
// callbacks
loadProducts(() => {
    cart.loadCart(() => {
        renderCheckoutHeader();
        renderOrderSummary();
        renderPaymentSummary();
    });
});
*/

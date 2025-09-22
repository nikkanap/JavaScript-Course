import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";
import { cart } from "../../data/cart-class.js";
import { getProduct, loadProducts } from "../../data/products.js";
import { formatCurrency } from "../../scripts/utils/money.js"

describe('test suite: orderSummaryTest', () => {
    const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
    const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';
    
    const product1 = getProduct(productId1);
    const product2 = getProduct(productId2);
    
    const product1Name = product1.name;
    const product2Name = product2.name;

    const product1Price = formatCurrency(product1.priceCents);
    const product2Price = formatCurrency(product2.priceCents);

    const deliveryOptionId = 3;

    beforeAll((done) => {
        loadProducts(() => {
            
        done();
        });
    });

    beforeEach(() => {
        document.querySelector('.js-test-container').innerHTML = `
            <div class="js-checkout-header"></div>
            <div class="js-order-summary"></div>
            <div class="js-payment-summary"></div>
        `;
        cart.cartItems = [
            {
                productId: productId1,
                quantity: 2,
                deliveryOptionId: '1'
            },
            {
                productId: productId2,
                quantity: 1,
                deliveryOptionId: '2'
            }
        ];
        renderOrderSummary();
    }); // beforeEach hook -- renders this before each test

    it('displays the cart', () => {
        expect(
            document.querySelectorAll('.js-cart-item-container').length
        ).toEqual(2);

        expect(
            document.querySelector(`.js-product-quantity-${productId1}`).innerText
        ).toContain('Quantity: 2');

        expect(
            document.querySelector(`.js-product-quantity-${productId2}`).innerText
        ).toContain('Quantity: 1');

        expect(
            document.querySelector(`.js-product-name-${productId1}`).innerHTML
        ).toContain(product1Name);

        expect(
            document.querySelector(`.js-product-name-${productId2}`).innerHTML
        ).toContain(product2Name);

        expect(
            document.querySelector(`.js-product-price-${productId1}`).innerHTML
        ).toContain(product1Price);

        expect(
            document.querySelector(`.js-product-price-${productId2}`).innerHTML
        ).toContain(product2Price);
    });

    it('removes a product', () => {
        document.querySelector(`.js-delete-link-${productId1}`).click();
        
        expect(
        document.querySelectorAll('.js-cart-item-container').length
        ).toEqual(1);

        expect(
            document.querySelector(`.js-cart-item-container-${productId1}`)
        ).toEqual(null);

        expect(
            document.querySelector(`.js-cart-item-container-${productId2}`)
        ).not.toEqual(null);

        expect(
            cart.cartItems.length
        ).toEqual(1);

        expect(
            cart.cartItems[0].productId
        ).toEqual(productId2);

        expect(
            document.querySelector(`.js-product-name-${productId2}`).innerHTML
        ).toContain(product2Name);

        expect(
            document.querySelector(`.js-product-price-${productId2}`).innerHTML
        ).toContain(product2Price);
    });

    it('updates the delivery option', () => {
        document.querySelector(`.js-delivery-option-input-${productId1}-${deliveryOptionId}`).click();
        expect (
            document.querySelector(`.js-delivery-option-input-${productId1}-3`).checked
        ).toEqual(true);

        expect(
            cart.cartItems.length
        ).toEqual(2);

        let matchingItem;
        cart.cartItems.forEach((item) => {
            if(productId1 === item.productId){
                matchingItem = item;
            } 
        });

        expect (
            Number(matchingItem.deliveryOptionId)
        ).toEqual(3);

        expect(
            document.querySelector('.js-shipping-price').innerHTML
        ).toEqual('$14.98');

        expect(
            document.querySelector('.js-total-price').innerHTML
        ).toEqual('$63.50');
    });

    afterEach(() => {
        document.querySelector('.js-test-container').innerHTML ="";
    });

});
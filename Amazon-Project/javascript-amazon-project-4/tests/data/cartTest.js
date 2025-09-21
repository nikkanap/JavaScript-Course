import { cart } from "../../data/cart-class.js";

describe('test suite: cart.addToCart', () => {
    it('adds an existing product to the cart', () => {
        cart.cartItems = [{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: 1
        }];

        cart.addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.cartItems.length).toEqual(1);
        //expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart.cartItems[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.cartItems[0].quantity).toEqual(2);
    });

    it('adds a new product to the cart', () => {
        cart.cartItems = [];
        
        cart.addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.cartItems.length).toEqual(1);

        // how many times localStorage.setItem has been called
        //expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart.cartItems[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.cartItems[0].quantity).toEqual(1);
    });
});

describe('test suite: cart.removeFromCart', () => {
    beforeEach(() => {
        cart.cartItems = [{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: 1
        }];
    });

    it('removes a productId that is in the cart', () => {
        const productId = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
        cart.removeFromCart(productId);

        expect(cart.cartItems.length).toEqual(0);
        //expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([]));
    });

    it('removes a product that is not in the cart', () => {
        const productId = '1';
        cart.removeFromCart(productId);

        expect(cart.cartItems.length).toEqual(1);
        /*
        expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: 1
        }]));
        */
    });
});

describe('test suite: cart.updateDeliveryOption', () => {
    beforeEach(() => {
        cart.cartItems = [{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: 1
        }];
    });

    it('updates the delivery option of a product in the cart', () => {
        const productId = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
        const deliveryOptionId = 2;
        cart.updateDeliveryOption(productId, deliveryOptionId);

        let matchingItem;
        cart.cartItems.forEach((item) => {
            if(productId === item.productId){
                matchingItem = item;
            } 
        });

        expect(
            matchingItem.deliveryOptionId
        ).toEqual(2);

        expect(
            cart.cartItems.length
        ).toEqual(1);

        /*
        expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: 2
        }]));
        */
    });

    it('updates the delivery option of a productId that is not in the cart', () => {
        const productId = '1';
        const deliveryOptionId = 2;
        cart.updateDeliveryOption(productId, deliveryOptionId);

        expect(
            cart.cartItems.length
        ).toEqual(1);

        //expect(localStorage.setItem).toHaveBeenCalledTimes(0);
    });
});



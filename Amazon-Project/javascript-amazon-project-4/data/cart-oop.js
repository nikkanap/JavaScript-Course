function Cart(localStorageKey) {
    const cart = { 
        cartItems : undefined,
        loadFromStorage() {
            this.cartItems = JSON.parse(localStorage.getItem(localStorageKey)) || 
            [
                {
                    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                    quantity: 2,
                    deliveryOptionId: '1'
                },
                {
                    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                    quantity: 1,
                    deliveryOptionId: '2'
                }
            ];
        },
        saveToStorage() {
            localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
        }, 
        addToCart(productId) {
            let matchingItem;
            this.cartItems.forEach((item) => {
                if(productId === item.productId){
                    matchingItem = item;
                } 
            });

            //const quantity = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
            const quantity = 1;
            if(matchingItem){
                matchingItem.quantity += quantity;
            } else {
                this.cartItems.push({
                    productId,
                    quantity,
                    deliveryOptionId: '1'
                });
            }

            this.saveToStorage();
        },
        removeFromCart(productId) {
            const newCart = [];
            this.cartItems.forEach((cartItem) => {
                if(cartItem.productId === productId)
                    return;
                newCart.push(cartItem);
            });

            this.cartItems = newCart;
            this.saveToStorage();
        },
        calculateCartQuantity(){
            let cartQuantity = 0;
            this.cartItems.forEach((cartItem) => {
            cartQuantity += cartItem.quantity;
            });
            return cartQuantity;
        },
        updateQuantity(productId, newQuantity) {
            this.cartItems.forEach((cartItem) => {
                if(cartItem.productId === productId)
                    cartItem.quantity = newQuantity;
            });
            this.saveToStorage();
        }, 
        getQuantity(productId) {
            let quantity;
            this.cartItems.forEach((cartItem) => {
                if(cartItem.productId === productId)
                    quantity = cartItem.quantity;
            });
            return quantity;
        },
        updateDeliveryOption(productId, deliveryOptionId) {
            let matchingItem;
            this.cartItems.forEach((item) => {
                if(productId === item.productId){
                    matchingItem = item;
                } 
            });

            if(!matchingItem){
                return;
            }

            matchingItem.deliveryOptionId = deliveryOptionId;
            this.saveToStorage();
        }
    };
    return cart;
}

const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');

cart.loadFromStorage();



businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);
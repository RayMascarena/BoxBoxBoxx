import {cart, removeFromCart} from './cart.js';
import {products} from './products.js';

let cartSummaryHTML = '';

cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    let matchingProduct;
    products.forEach((product) => {
        if (product.id === productId) {
            matchingProduct = product;
        }
    });
    
    cartSummaryHTML += `
        <div class="product-box-checkout js-cart-item-container-${matchingProduct.id}">
            <img class="product-img" src="${matchingProduct.image}">
            <h2 class="product-title">${matchingProduct.name}</h2>
            <div class="space-between">
                <span class="price">$${(matchingProduct.price / 100).toFixed(2)}</span>
                <span class="quantity">Quantity: <span class="quantity-num">${cartItem.quantity}</span></span>
            </div>
            <div class="space-between">
            <div></div>
            <div></div>
            <span class="delete-quantity-link link-primary js-delete-link" 
                data-product-id="${matchingProduct.id}">Delete</span>
            <span class="update-quantity-link link-primary">Update</span>
            </div>
        </div>
    `;
});

document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;


document.querySelectorAll('.js-delete-link').forEach((link) => {
    link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        removeFromCart(productId);

         const container = document.querySelector(`.js-cart-item-container-${productId}`);
         container.remove();
         updateCartQuantity();
     });
 });

 function updateCartQuantity() {
     let cartQuantity = 0;

     cart.forEach((cartItem) => {
         cartQuantity += cartItem.quantity;
     });

     document.querySelector('.js-quantity-display')
         .innerHTML = `(${cartQuantity} items)`;
 }

 updateCartQuantity();

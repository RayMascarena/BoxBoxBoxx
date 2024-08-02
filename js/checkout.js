import {cart, removeFromCart, updateQuantity, calculateCartQuantity} from './cart.js';
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
            <span class="update-quantity-link link-primary js-update-link"
               data-product-id="${matchingProduct.id}">Update</span>
            <input class="quantity-input js-quantity-input-${matchingProduct.id}">
            <span class="save-quantity-link link-primary js-save-link"
               data-product-id="${matchingProduct.id}">Save</span>
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
    });
});

function updateCartQuantity() {
    const cartQuantity = calculateCartQuantity();

    document.querySelector('.js-quantity-display')
        .innerHTML = `(${cartQuantity} items)`;
}

updateCartQuantity();


document.querySelectorAll('.js-update-link')
    .forEach((link) => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId;
        
            const container = document.querySelector(
            `.js-cart-item-container-${productId}`);

            container.classList.add('is-editing-quantity');
        });
    });

document.querySelectorAll('.js-save-link')
    .forEach((link) => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId;

            const quantityInput = document.querySelector(
            `.js-quantity-input-${productId}`);

            const newQuantity = Number(quantityInput.value);

            if (newQuantity < 0 || newQuantity >= 1000) {
                alert('Quantity must be at least 0 and less than 1000');
                return;
            }

            updateQuantity(productId, newQuantity);

            const container = document.querySelector(
            `.js-cart-item-container-${productId}`);

            container.classList.remove('is-editing-quantity');

            const quantityLabel = document.querySelector(
                `.js-quantity-label-${productId}`);
                
            quantityLabel.innerHTML = newQuantity;
            updateCartQuantity();
        });
    });

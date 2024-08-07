import {cart, removeFromCart, updateCartQuantity} from './cart.js';
import {products, getProduct} from './products.js';
import {renderPaymentSummary} from './paymentsummary.js';

export function renderOrderSummary() {
    let cartSummaryHTML = '';

    cart.forEach((cartItem) => {
        const productId = cartItem.productId;

        const matchingProduct = getProduct(productId);

        cartSummaryHTML += `
            <div class="product-box-checkout js-cart-item-container-${matchingProduct.id}">
                <img class="product-img" src="${matchingProduct.image}">
                <h2 class="product-title">${matchingProduct.name}</h2>
                <div class="space-between">
                    <span class="price">$${(Math.round(matchingProduct.priceCents) / 100).toFixed(2)}</span>
                    <span class="quantity">Quantity: <span class="quantity-num">${cartItem.quantity}</span></span>
                </div>
                <div class="space-between">
                <div></div>
                <span class="delete-quantity-link link-primary js-delete-link" 
                    data-product-id="${matchingProduct.id}">Delete</span>
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
            renderPaymentSummary();
        });
    });
}
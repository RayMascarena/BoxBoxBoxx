import {cart} from './cart.js';
import {tees} from './products.js';

let teesHTML = '';

tees.forEach((tee) => {
    teesHTML += `
        <div class="product-box-light">
            <img class="product-img" src="${tee.image}">
            <h2 class="product-title">${tee.name}</h2>
            <div class="space-between">
                <span class="price">$${(tee.price / 100).toFixed(2)}</span>
                <select class="size-input js-size-selector-${tee.id}">
                    <option selected value>Size</option>
                    <option value="1">S</option>
                    <option value="2">M</option>
                    <option value="3">L</option>
                    <option value="4">XL</option>
                    <option value="5">2XL</option>
                    <option value="6">3XL</option>
                </select>
                <button type="button" class="add-cart js-add-tee" data-product-id="${tee.id}">
                    <img class="cartadd" src="images/cartadd.svg">
                </button>
            </div>
        </div>
    `;
});

document.querySelector('.js-tees-grid').innerHTML = teesHTML;


document.querySelectorAll('.js-add-tee').forEach((button) => {
    button.addEventListener('click', () => {
        const teeId = button.dataset.teeId;

        let matchingItem;

        cart.forEach((item) => {
            if (teeId === item.teeId) {
                matchingItem = item;
            }
        });

        if (matchingItem) {
            matchingItem.quantity += 1;
        } else {
            cart.push({
                teeId: teeId,
                quantity: 1
            });
        }

        let cartQuantity = 0;

        cart.forEach((item) => {
            cartQuantity += item.quantity;
        });

        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
    });
});
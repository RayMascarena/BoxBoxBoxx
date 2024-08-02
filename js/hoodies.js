import {cart} from './cart.js';
import {hoodies} from './products.js';


let hoodiesHTML = '';

hoodies.forEach((hoodie) => {
    hoodiesHTML += `
        <div class="product-box">
            <img class="product-img" src="${hoodie.image}">
            <h2 class="product-title">${hoodie.name}</h2>
            <div class="space-between">
                <span class="price">$${(hoodie.price / 100).toFixed(2)}</span>
                <select class="size-input js-size-selector-${hoodie.id}">
                    <option selected value>Size</option>
                    <option value="1">S</option>
                    <option value="2">M</option>
                    <option value="3">L</option>
                    <option value="4">XL</option>
                    <option value="5">2XL</option>
                    <option value="6">3XL</option>
                </select>
                <button type="button" class="add-cart js-add-hoodie" data-product-id="${hoodie.id}">
                    <img class="cartadd" src="images/cartadd.svg">
                </button>
            </div>
        </div>
    `;
});

document.querySelector('.js-hoodies-grid').innerHTML = hoodiesHTML;


document.querySelectorAll('.js-add-hoodie').forEach((button) => {
    button.addEventListener('click', () => {
        const hoodieId = button.dataset.hoodieId;

        let matchingItem;

        cart.forEach((item) => {
            if (hoodieId === item.hoodieId) {
                matchingItem = item;
            }
        });

        if (matchingItem) {
            matchingItem.quantity += 1;
        } else {
            cart.push({
                hoodieId: hoodieId,
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
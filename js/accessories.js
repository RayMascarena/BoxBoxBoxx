import {cart} from './cart.js';
import {accessories} from './products.js';


let accessoriesHTML = '';

accessories.forEach((accessorie) => {
    accessoriesHTML += `
        <div class="product-box-light">
            <img class="product-img" src="${accessorie.image}">
            <h2 class="product-title">${accessorie.name}</h2>
            <div class="space-between">
                <span class="price">$${(accessorie.price / 100).toFixed(2)}</span>
                <select class="size-input js-size-selector-${accessorie.id}">
                    <option selected value>Size</option>
                    <option value="1">S</option>
                    <option value="2">M</option>
                    <option value="3">L</option>
                    <option value="4">XL</option>
                    <option value="5">2XL</option>
                    <option value="6">3XL</option>
                </select>
                <button type="button" class="add-cart js-add-acc" data-product-id="${accessorie.id}">
                    <img class="cartadd" src="images/cartadd.svg">
                </button>
            </div>
        </div>
    `;
});

document.querySelector('.js-accessories-grid').innerHTML = accessoriesHTML;


document.querySelectorAll('.js-add-acc').forEach((button) => {
    button.addEventListener('click', () => {
        const accessorieId = button.dataset.accessorieId;

        let matchingItem;

        cart.forEach((item) => {
            if (accessorieId === item.accessorieId) {
                matchingItem = item;
            }
        });

        if (matchingItem) {
            matchingItem.quantity += 1;
        } else {
            cart.push({
                accessorieId: accessorieId,
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
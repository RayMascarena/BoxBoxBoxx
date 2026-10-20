import {cart} from './cart.js';
import {newProducts} from './products.js';


let newProductsHTML = '';

newProducts.forEach((newProduct) => {
    newProductsHTML += `
        <div class="product-box">
            <img class="product-img" src="${newProduct.image}">
            <h2 class="product-title">${newProduct.name}</h2>
            <div class="space-between">
                <span class="price">$${(newProduct.price / 100).toFixed(2)}</span>

                <button type="button" class="add-cart js-add-np" data-product-id="${newProduct.id}">
                    <img class="cartadd" src="images/cartadd.svg">
                </button>
            </div>
        </div>
    `;
});

document.querySelector('.js-newProducts-grid').innerHTML = newProductsHTML;


document.querySelectorAll('.js-add-np').forEach((button) => {
    button.addEventListener('click', () => {
        const newProductId = button.dataset.newProductId;

        let matchingItem;

        cart.forEach((item) => {
            if (newProductId === item.newProductId) {
                matchingItem = item;
            }
        });

        if (matchingItem) {
            matchingItem.quantity += 1;
        } else {
            cart.push({
                newProductId: newProductId,
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

import {cart, updateCartQuantity} from './cart.js';
import {products, getProduct} from './products.js';
import {renderOrderSummary} from './ordersummary.js';


export function renderPaymentSummary() {
  let productPriceCents = 0;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;
  });

  const totalBeforeTaxCents = productPriceCents;
  const taxCents = totalBeforeTaxCents * 0.1;
  const totalCents = totalBeforeTaxCents + taxCents;

  const paymentSummaryHTML = `
        <div class="payment-summary-title">
            <h1 class="summary-text display-1 display-1--light">
                Order Summary
            </h1>
        </div>

        <div class="quantity-row">
            <span class="js-quantity-display"></span>
        </div>

        <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${(Math.round(totalBeforeTaxCents) / 100).toFixed(2)}</div>
        </div>

        <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$0</div>
        </div>

        <div class="payment-summary-row">
            <div>Estimated tax (10%): &#160 </div>
            <div class="payment-summary-money">$${(Math.round(taxCents) / 100).toFixed(2)}</div>
        </div>

        <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${(Math.round(totalCents) / 100).toFixed(2)}</div>
        </div>

        <div class="order-button">
            <a href="success.html">
                <button class="place-order-button button-primary">
                    Place your order
                </button>
            </a>
        </div>
    `;

    document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;

    updateCartQuantity();
}

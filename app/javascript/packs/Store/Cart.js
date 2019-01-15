import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const Cart = ({ cart, onToken }) =>
  <div className="cart">
    Total: ${(cart.total/100).toFixed(2)}
    {cart.total > 0 &&
      <StripeCheckout
        token={onToken}
        stripeKey="pk_test_zOBseCq2J4pdNWaHqkEwOmv1"
        description={"Stickers from Marvel Universe"}
        amount={cart.total}
        label="Checkout"
        billingAddress={true}
        shippingAddress={true}
      />
    }
  </div>

export default Cart

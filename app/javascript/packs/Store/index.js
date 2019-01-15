import React, { Component } from 'react'
import ProductsList from './ProductsList'
import Cart from './Cart'
import axios from 'axios'

class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      products: this.props.products,
      skus: this.props.skus,
      cart: {
        items: {},
        total: 0
      }
    }
  }

  addToCart = (sku, price) => {
    let cart = this.state.cart;
    cart.items[sku] = (cart.items[sku] + 1) || 1;
    cart.total += price;
    this.setState({cart})
  }


  removeFromCart = (sku, price) => {
    let cart = this.state.cart;
    if(sku in cart.items && cart.items[sku] > 0) {
      cart.items[sku] -= 1;
      cart.total -= price;
      this.setState({cart})
    }
  }

  onToken = (token) => {
    const data = { ...token, cart: this.state.cart }
    axios({
      url: '/charges',
      method: 'POST',
      data: data,
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
      }
    })
    .then((response) => {
      const message = response.data.message;
      this.setState({message: message, cart: { items: {}, total: 0 }})
    })
  }

  render() {
    return (
      <div>
        <h3 className="message">{this.state.message}</h3>
        <Cart
          cart={this.state.cart}
          onToken={this.onToken}
        />
        <ProductsList
          products={this.state.products}
          skus={this.state.skus}
          handleAdd={this.addToCart}
          handleRemove={this.removeFromCart}
        />
      </div>
    )
  }
}

export default Store

import React, { Component } from 'react'
import Sticker from './Sticker'

class Product extends Component {

  handleAdd = () => {
    console.log(this.props.sku.id);
    this.props.handleAdd(this.props.sku.id, this.props.sku.price)
  }

  handleRemove = () => {
    this.props.handleRemove(this.props.sku.id, this.props.sku.price)
  }

  render() {
    return (
      <div className="product">
        <Sticker product={this.props.product} />
        <div className="cartControls">
          <p className="price">${(this.props.sku.price/100).toFixed(2)}</p>
          <button onClick={this.handleAdd}>+ Add to Cart</button>
          <button onClick={this.handleRemove}>- Remove from Cart</button>
        </div>
      </div>
    )
  }
}

export default Product

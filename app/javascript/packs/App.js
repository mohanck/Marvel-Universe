import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Store from './Store'

class App extends Component {
  render() {
    return (
      <div>
        <Store
          products={this.props.products}
          skus={this.props.skus}
        />
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('store_data')
  const products = JSON.parse(node.getAttribute('data-products')).data;
  const skus = JSON.parse(node.getAttribute('data-skus')).data;
  ReactDOM.render(<App products={products} skus={skus}/>, document.getElementById('store'))
})

export default App

import React from 'react'
import Product from './Product'

const ProductsList = ({ products, skus, handleAdd, handleRemove }) =>
  <div>
    {products.map((product, index) => {
      return (<Product
        key={product.id}
        product={product}
        sku={skus[index]}
        handleAdd={handleAdd}
        handleRemove={handleRemove}
      />)
    })}
  </div>

export default ProductsList

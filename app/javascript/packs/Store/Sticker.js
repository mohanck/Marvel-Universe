import React from 'react'

const Sticker = ({ product }) =>
  <div className="stickerContainer">
    <h2>{product.name}</h2>
    <div className="sticker"><img src={product.images[0]}/></div>
  </div>

export default Sticker

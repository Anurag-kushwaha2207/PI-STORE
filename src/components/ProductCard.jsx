
import React, { useState } from 'react'

const ProductCard = ({ product }) => {
  const [imgError, setImgError] = useState(false)

  const fallbackImg = `https://placehold.co/400x260/1a1a2e/e0e0e0?text=${encodeURIComponent(product.title?.slice(0, 12) || 'Product')}`

  const imageSrc = imgError
    ? fallbackImg
    : product.images?.[0] || fallbackImg

  return (
    <div className="card">
      <div className="card-img-wrapper">
        <img
          src={imageSrc}
          alt={product.title}
          className="card-img"
          onError={() => setImgError(true)}
        />
        <span className="card-category">{product.category?.name || 'General'}</span>
      </div>

      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-desc">
          {product.description?.slice(0, 80)}
          {product.description?.length > 80 ? '…' : ''}
        </p>
        <div className="card-footer">
          <span className="card-price">${product.price}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

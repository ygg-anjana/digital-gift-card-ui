import React from 'react';
import './ProductCard.css';

const ProductCard = ({
  productName = 'Fresh Heirloom tomato',
  price = '$12.99',
  unit = 'lb',
  description = 'Grown in San Juan Capistrano, CA_Estero change',
  imageUrl = 'https://www.figma.com/api/mcp/asset/7f7699e7-0429-4ded-823a-dfb9ff6e6047',
  imageAlt = 'Product image'
}) => {
  return (
    <div className="product-card" data-name="ProductCard" data-node-id="2:2">
      <div className="product-image-container">
        <img 
          alt={imageAlt} 
          className="product-image" 
          src={imageUrl} 
        />
      </div>
      <div className="product-info">
        <p className="product-name">{productName}</p>
        <p className="product-price">
          {price} / {unit}
        </p>
        <p className="product-description">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;

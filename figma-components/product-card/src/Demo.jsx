import React from 'react';
import ProductCard from './ProductCard';

/**
 * Demo page for ProductCard component
 */
function ProductCardDemo() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '20px',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
    }}>
      <ProductCard
        productName="Fresh Heirloom tomato"
        price="$12.99"
        unit="lb"
        description="Grown in San Juan Capistrano, CA_Estero change"
        imageUrl="https://www.figma.com/api/mcp/asset/7f7699e7-0429-4ded-823a-dfb9ff6e6047"
        imageAlt="Fresh Heirloom tomato"
      />
    </div>
  );
}

export default ProductCardDemo;

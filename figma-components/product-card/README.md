# Product Card Component

Product card component extracted from Figma design and converted to React.

**Figma Source:** [View in Figma](https://www.figma.com/design/n5A0TkfpGovf4o3UwRrMga/File-2?node-id=2-2&t=UUbDki5QzuXRDpw0-0)

## Preview

A clean, modern product card displaying:
- Product image (320px height)
- Product name
- Price with unit
- Product description/origin

## Installation

Copy the `ProductCard.jsx` and `ProductCard.css` files to your project.

## Usage

```jsx
import ProductCard from './ProductCard';

<ProductCard
  productName="Fresh Heirloom tomato"
  price="$12.99"
  unit="lb"
  description="Grown in San Juan Capistrano, CA"
  imageUrl="https://example.com/image.jpg"
  imageAlt="Product image"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `productName` | string | 'Fresh Heirloom tomato' | Product name |
| `price` | string | '$12.99' | Product price |
| `unit` | string | 'lb' | Price unit |
| `description` | string | Location/description text | Product description |
| `imageUrl` | string | Figma asset URL | Product image URL |
| `imageAlt` | string | 'Product image' | Image alt text |

## Design Specifications

- **Background:** #fafaf5
- **Border:** 2px solid #e6e6e6
- **Border Radius:** 24px
- **Card Width:** Max 400px, fully responsive
- **Image Height:** 320px
- **Font Family:** Inter
- **Colors:**
  - Product Name: #000000
  - Price: #426b1f (green)
  - Description: #6d6d6d (gray)

## Responsive Breakpoints

- Desktop: Full size (400px max)
- Tablet (≤768px): Adjusted image sizing
- Mobile (≤480px): Compact layout with smaller text

## Notes

- Images from Figma API expire after 7 days - replace with production URLs
- Maintains clean, semantic HTML
- Fully accessible with proper alt text
- Smooth hover transitions included

## License

MIT © YOUGotaGift

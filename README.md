# YOUGotaGift Digital Card UI

Modern, responsive UI components for the YOUGotaGift platform.

## Components

### 1. Digital Gift Card
Modern digital gift card with premium visual effects.

### 2. Product Card
Clean product display card imported from Figma design.

## Features

- 🎨 Modern gradient design (Purple to Pink)
- 💳 Credit card-like proportions
- 📱 Fully responsive
- ✨ Premium visual effects (shine, shadows, patterns)
- 🔒 Masked card numbers for security
- 🛍️ Product card with image and details
- ♿ Accessible design

## Design Specifications

- **Colors:** Purple to Pink gradient (#6B46C1 → #EC4899)
- **Typography:** Bold, clean, hierarchical
- **Border Radius:** 16px for modern feel
- **Aspect Ratio:** 16:9 (credit card proportions)

## Component Structure

### Digital Gift Card
```
DigitalGiftCard/
├── Header (Logo + Badge)
├── Center (Amount + Icon)
├── Bottom (Recipient, Sender, Card Number, Validity)
└── Visual Elements (Gradient overlay, QR code, CTA)
```

### Product Card (Imported from Figma)
```
ProductCard/
├── Product Image (Top section)
└── Product Info
    ├── Product Name
    ├── Price + Unit
    └── Description
```

## Installation

```bash
npm install
```

## Usage

```bash
npm start
```

## Component Props

### DigitalGiftCard
```jsx
<DigitalGiftCard
  amount="100"
  currency="AED"
  recipientName="John Doe"
  senderName="Jane Smith"
  cardNumber="1234567812345678"
  validUntil="2026-12-31"
  onRedeem={() => console.log('Redeem clicked')}
/>
```

### ProductCard (from Figma)
```jsx
<ProductCard
  productName="Fresh Heirloom tomato"
  price="$12.99"
  unit="lb"
  description="Grown in San Juan Capistrano, CA"
  imageUrl="https://example.com/image.jpg"
  imageAlt="Product image"
/>
```

## Development

This component follows YOUGotaGift coding standards:
- Clean, maintainable code
- Reusable component patterns
- No hardcoded sensitive data
- Proper error handling

## License

MIT © YOUGotaGift

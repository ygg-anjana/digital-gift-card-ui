# YOUGotaGift Digital Card UI

Modern, responsive digital gift card UI component for the YOUGotaGift platform.

## Features

- 🎨 Modern gradient design (Purple to Pink)
- 💳 Credit card-like proportions
- 📱 Fully responsive
- ✨ Premium visual effects (shine, shadows, patterns)
- 🔒 Masked card numbers for security
- ♿ Accessible design

## Design Specifications

- **Colors:** Purple to Pink gradient (#6B46C1 → #EC4899)
- **Typography:** Bold, clean, hierarchical
- **Border Radius:** 16px for modern feel
- **Aspect Ratio:** 16:9 (credit card proportions)

## Component Structure

```
DigitalGiftCard/
├── Header (Logo + Badge)
├── Center (Amount + Icon)
├── Bottom (Recipient, Sender, Card Number, Validity)
└── Visual Elements (Gradient overlay, QR code, CTA)
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

## Development

This component follows YOUGotaGift coding standards:
- Clean, maintainable code
- Reusable component patterns
- No hardcoded sensitive data
- Proper error handling

## License

MIT © YOUGotaGift

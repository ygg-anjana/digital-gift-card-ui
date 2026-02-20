# Figma Components

This directory contains UI components extracted from Figma designs and converted to React.

## Components

### Product Card
- **Source:** [Figma File 2](https://www.figma.com/design/n5A0TkfpGovf4o3UwRrMga/File-2?node-id=2-2&t=UUbDki5QzuXRDpw0-0)
- **Description:** Modern product display card with image, name, price, and description
- **Location:** `product-card/`

## Structure

```
figma-components/
├── README.md
└── product-card/
    ├── README.md
    ├── package.json
    └── src/
        ├── ProductCard.jsx
        ├── ProductCard.css
        └── Demo.jsx
```

## Usage

Each component folder is self-contained with:
- Component files (JSX + CSS)
- Documentation (README.md)
- Demo example
- Package metadata with Figma source links

## Workflow

1. Design created/updated in Figma
2. Extract component using Figma MCP server
3. Convert Tailwind to project's CSS conventions
4. Add to this folder structure
5. Document with Figma source URL
6. Commit and push to GitHub

## Notes

- All components follow YOUGotaGift coding standards
- Converted from Tailwind CSS to regular CSS
- Fully responsive and accessible
- Figma asset URLs expire after 7 days - use production images

## License

MIT © YOUGotaGift

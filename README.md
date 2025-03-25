# zennic-website - Financial Clarity for Everyone

A responsive landing page for zennic, a Computer fintech app that generates plain-English summaries of SEC filings, earnings calls, and P&L data.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- Vercel deployment

## Features

- Responsive design optimized for all devices
- Modern UI with micro-interactions
- SEO-friendly structure
- Analytics-ready with Plausible.io integration
- Dark mode toggle with system preference support

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/derpwiz/zennic-website.git
cd zennic-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `/app` - Next.js App Router pages and layouts
- `/app/constants.ts` - Text constants for easy A/B testing
- `/public` - Static assets
- `/components` - Reusable UI components

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Deploy with default settings

## Customization

- Update text content in `/app/constants.ts`
- Modify styling in `/app/globals.css` and Tailwind configuration
- Replace placeholder images in the `/public` directory

## Contributing

We welcome contributions to improve zennic-website! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows the project's style guidelines and includes appropriate tests.

## License

[MIT](LICENSE)

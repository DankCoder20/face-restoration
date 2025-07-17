# 🧠 Face Restorer

A modern web app to restore and enhance faces in images using the power of AI (GFPGAN via Replicate API). Upload a photo, and get a restored version side-by-side—all in your browser.

## Features

- Upload an image via drag-and-drop (Bytescale widget)
- AI-powered face restoration (GFPGAN)
- See original and restored images side-by-side
- Simple, clean, and responsive UI

## Demo

| Original      ||   Restored               
| ----------------------------- | ----------------------------- |
| ![Original](public/image.png) | ![Restored](public/image.png) |

> _Replace these with your actual before/after images for a real demo_

## Tech Stack

- **Next.js (App Router)**
- **React 19**
- **Replicate API** (GFPGAN model)
- **Bytescale Upload Widget**

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/DankCoder20/face-restoration.git
cd face-restorer-js
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the project root with the following:

```env
REPLICATE_API_TOKEN=your_replicate_api_token
NEXT_PUBLIC_BYTESCALE_PUBLIC_KEY=your_bytescale_public_key
```

- Get your Replicate API token from https://replicate.com/account
- Get your Bytescale public key from https://www.bytescale.com/

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Upload a photo (face images work best).
2. Wait for the AI to process and restore the image.
3. View and compare the original and restored images side-by-side.

## Troubleshooting

- **500 Internal Server Error:**
  - Make sure your `REPLICATE_API_TOKEN` is set and valid.
  - Check the server logs for detailed error messages.
- **Image not uploading:**
  - Ensure your `NEXT_PUBLIC_BYTESCALE_PUBLIC_KEY` is correct.
- **API rate limits:**
  - Replicate and Bytescale may have usage limits on free plans.

## Deployment

- Deploy easily to Vercel, Netlify, or any platform supporting Next.js.
- Remember to set the required environment variables in your deployment settings.

## License

MIT

---

_Developed with ❤️ by an aspiring developer . PRs and issues welcome!_

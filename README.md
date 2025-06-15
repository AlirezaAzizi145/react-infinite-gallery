# React Infinite Gallery 🖼️

A powerful React component for creating beautiful, responsive, and infinite-scrolling image galleries. Perfect for photo galleries, portfolio websites, and any application that needs to display a large collection of images efficiently.

## Installation 📦

```bash
npm install react-infinite-gallery
```

## Features ✨

- 🔄 Infinite scrolling with smooth loading
- 📱 Fully responsive grid layout
- 🎯 Lazy loading of images for better performance
- ⚙️ Highly customizable grid settings
- 🎨 Clean and modern design
- 🚀 Lightweight and optimized for performance

## Usage 💻

```jsx
import { InfiniteGallery } from 'react-infinite-gallery';
import 'react-infinite-gallery/InfiniteGallery.css';

function App() {
  const images = [
    // Minimum 20 images required for optimal experience
    { src: 'https://example.com/image1.jpg', alt: 'Description 1' },
    { src: 'https://example.com/image2.jpg', alt: 'Description 2' },
    // ... more images
  ];

  return (
    <InfiniteGallery
      images={images}
      columns={3}
      gap={10}
      loadMoreTrigger={0.8}
    />
  );
}
```

## Props 🔧

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `images` | `Array<{ src: string, alt: string }>` | Required | Array of image objects (minimum 20 images) |
| `columns` | `number` | `3` | Number of columns in the grid |
| `gap` | `number` | `10` | Gap between images in pixels |
| `loadMoreTrigger` | `number` | `0.8` | Scroll position (0-1) to trigger loading more images |
| `className` | `string` | `''` | Additional CSS class for the gallery container |
| `imageClassName` | `string` | `''` | Additional CSS class for individual images |

## Important Notes ⚠️

- A minimum of 20 images is required for optimal performance and user experience
- Supported image formats: jpg, png, webp
- For best performance, use appropriately sized and optimized images
- Make sure to import the CSS file as shown in the usage example

## Example

Check out the `usage-example.jsx` file in the repository for a complete implementation example.

## License 📄

MIT 
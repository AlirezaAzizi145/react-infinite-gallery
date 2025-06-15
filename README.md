# React Infinite Gallery 🖼️

A beautiful infinite wraparound gallery React component with animation and support for images and videos.

## Installation 📦

```bash
npm install react-infinite-gallery
```

Or:
```bash
yarn add react-infinite-gallery
```

## Features ✨

- 🎯 Support for both images and videos
- 🔄 Beautiful wraparound animation
- 📱 Responsive card layout
- ⚙️ Highly customizable settings
- 🎨 Custom badges and styling
- 🚀 Lightweight and performant

## Usage 💻

```jsx
import InfiniteGallery from 'react-infinite-gallery';
import 'react-infinite-gallery/InfiniteGallery.css';

const itemsData = [
  { id: 1, type: 'image', content: 'https://example.com/image.jpg', badgeText: 'Sample' },
  { id: 2, type: 'video', content: 'https://example.com/video.mp4', badgeText: 'Video' },
  // ... more items
];

function App() {
  return (
    <InfiniteGallery
      itemsData={itemsData}
      cardWidth={280}
      cardHeight={380}
      headerContent={<h1>My Gallery</h1>}
      footerContent={<p>Footer</p>}
      galleryAnimate={true}
      badgeClass="my-badge"
    />
  );
}
```

## Props 🔧

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `itemsData` | `array` | `[]` | Array of items (image, video, or HTML) |
| `cardWidth` | `number` | `280` | Card width in pixels |
| `cardHeight` | `number` | `380` | Card height in pixels |
| `playButtonProps` | `object` | `{}` | Custom props for the video play button |
| `expandButtonProps` | `object` | `{}` | Custom props for the video expand button |
| `badgeClass` | `string` | `''` | Custom class for item badges |
| `stackInDuration` | `number` | `1500` | Animation in duration (ms) |
| `stackOutDuration` | `number` | `1000` | Animation out duration (ms) |
| `headerContent` | `ReactNode` | `null` | Header content (top of gallery) |
| `footerContent` | `ReactNode` | `null` | Footer content (bottom of gallery) |
| `infoButton` | `ReactNode` | `null` | Info button (optional) |
| `galleryAnimate` | `boolean` | `true` | Enable/disable initial animation |

## Item Structure 📝

Each item in `itemsData` should have one of these structures:

```js
{
  id: 1,
  type: 'image' | 'video' | 'html',
  content: 'image/video URL or HTML',
  badgeText: 'Badge text (optional)',
  color: '#HEX (optional)',
  rotation: number (optional),
  scale: number (optional)
}
```

## Important Notes ⚠️

- Make sure to import the CSS styles as shown in the usage example
- Only MP4 format is supported for videos
- The component works with all React projects (Vite, CRA, Next.js, etc)
- For best performance, use appropriately sized images and videos

## License 📄

MIT 
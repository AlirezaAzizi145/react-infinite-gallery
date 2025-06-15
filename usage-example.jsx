import React from 'react';
import InfiniteGallery from './InfiniteGallery';
import './InfiniteGallery.css';

const itemsData = [
  { id: 1, type: 'image', content: 'https://images.pexels.com/photos/4488636/pexels-photo-4488636.jpeg?auto=compress&cs=tinysrgb&w=800', badgeText: 'Sample' },
  { id: 2, type: 'video', content: 'https://www.w3schools.com/html/mov_bbb.mp4', badgeText: 'Video' },
  // ...
];

function UsageExample() {
  return (
    <InfiniteGallery
      itemsData={itemsData}
      cardWidth={280}
      cardHeight={380}
      headerContent={<h1>Infinite Gallery</h1>}
      footerContent={<p>Usage Example</p>}
      galleryAnimate={true}
      badgeClass="custom-badge"
    />
  );
}

export default UsageExample; 
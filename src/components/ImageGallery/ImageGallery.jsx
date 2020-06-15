import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ photos }) => {
  return (
    <ul className="ImageGallery">
      {photos.map(photo => (
        <ImageGalleryItem id={photo.id} url={photo.webformatURL} />
      ))}
    </ul>
  );
};

export default ImageGallery;

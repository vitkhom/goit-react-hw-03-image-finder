import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ photos, openModal }) => {
  return (
    <ul className="ImageGallery">
      {photos.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          url={webformatURL}
          largeUrl={largeImageURL}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

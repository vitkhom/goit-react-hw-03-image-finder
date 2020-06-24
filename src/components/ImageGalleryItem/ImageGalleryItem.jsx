import React from 'react';

const ImageGalleryItem = ({ url, largeUrl, openModal }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        onClick={() => openModal(largeUrl)}
        src={url}
        alt=""
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

export default ImageGalleryItem;

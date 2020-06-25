import React from 'react';
import PropTypes from 'prop-types';

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

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  largeUrl: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;

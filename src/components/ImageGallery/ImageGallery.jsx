import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';

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

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ),
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;

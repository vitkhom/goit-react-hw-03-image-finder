import React, { Component } from 'react';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Button from './Button';
import Modal from './Modal';

import photosApi from '../utils/photosApi';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

class App extends Component {
  state = {
    photos: [],
    loading: false,
    error: '',
    query: '',
    page: 1,
    largePhotoUrl: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;

    if (prevQuery !== nextQuery) {
      this.fetchPhotos();
    }
  }

  fetchPhotos = () => {
    const { query, page } = this.state;

    if (!query) {
      return;
    }

    this.setState({
      loading: true,
    });

    photosApi
      .getPhotos(query, page)
      .then(photos =>
        this.setState(prevState => ({
          photos: [...prevState.photos, ...photos],
          page: prevState.page + 1,
        })),
      )
      .catch(error => {
        this.setState({ error: error.message });
        toast.error(error.message, {
          position: 'top-center',
        });
      })
      .finally(() => {
        this.setState({ loading: false });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  handleSubmit = query => {
    this.setState({
      query: query,
      page: 1,
      photos: [],
    });
  };

  handleOpenModal = url => {
    this.setState({
      largePhotoUrl: url,
    });
  };

  handleCloseModal = () => {
    this.setState({
      largePhotoUrl: '',
    });
  };

  render() {
    const { photos, loading, largePhotoUrl } = this.state;
    return (
      <>
        <ToastContainer />
        <Searchbar onSubmit={this.handleSubmit} />
        {loading ? (
          <Loader />
        ) : (
          <div>
            {photos.length > 0 && (
              <ImageGallery photos={photos} openModal={this.handleOpenModal} />
            )}
            {photos.length > 0 && <Button onClick={this.fetchPhotos} />}
          </div>
        )}
        {largePhotoUrl && (
          <Modal largeUrl={largePhotoUrl} closeModal={this.handleCloseModal} />
        )}
      </>
    );
  }
}

export default App;

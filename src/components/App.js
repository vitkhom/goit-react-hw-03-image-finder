import React, { Component } from 'react';
import axios from 'axios';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

import './App.css';

class App extends Component {
  state = {
    photos: [],
  };

  componentDidMount() {
    axios
      .get(
        'https://pixabay.com/api/?q=nature&page=1&key=16656339-a562499c4313e4a5714644999&image_type=photo&orientation=horizontal&per_page=12',
      )
      .then(response =>
        this.setState({
          photos: response.data.hits,
        }),
      );
  }

  showPhotos = () => {
    const { photos } = this.state;
    console.log(photos);
  };

  render() {
    const { photos } = this.state;
    return (
      <>
        <Searchbar />
        <ImageGallery photos={photos} />
      </>
    );
  }
}

export default App;

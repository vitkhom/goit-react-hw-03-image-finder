import axios from 'axios';

const getPhotos = (query, page = 1) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=16656339-a562499c4313e4a5714644999&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

export default { getPhotos };

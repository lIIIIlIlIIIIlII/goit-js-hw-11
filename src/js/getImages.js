import axios from 'axios';
export { getImages };

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '35957019-cdb74718535d287b2f01a767b';

async function getImages(query, page, perPage) {
   // const parameters = new URLSearchParameters({
  //   key: `35957019-cdb74718535d287b2f01a767b`,
  //   image_type: `photo`,
  //   orientation: `horizontal`,
  //   safesearch: `true`,
  //     });
  const response = await axios.get(
    `${BASE_URL}?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`,
  );
  return response;
}
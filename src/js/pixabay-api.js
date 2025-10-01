import axios from 'axios';

const myApiKey = '52508688-b86b550d92da4de9dba40b9d1';
const baseUrl = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios
    .get(baseUrl, {
      params: {
        key: myApiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(res => res.data)
    .catch(error => {
      console.log(error);
      throw new Error(error);
    });
}

import axios from 'axios';

export const fetch = (url) => {
  return (
    axios.get(url)
    .then( response => {
      console.log(response);
      return response
    })
    .catch( error => {
      return 'error'
    })
  );
}
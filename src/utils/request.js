import axios from 'axios';

export const fetch = (url) => {
  return (
    axios.get(url, validateStatus( status => {
      console.log(status);
    }))
    .then( response => {
      console.log(response.status);
      return response
    })
    .catch( error => {
      console.log(error);
    })
  );
}
// const setReturnAPI = (string) => {
//   const array = string.split('_');
//   return array.join(' ');
// };

// setReturnAPI('rotation_period');

const fetchAPI = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const item = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((error) => error);

  // console.log(item);

  return item;
};

export default fetchAPI;

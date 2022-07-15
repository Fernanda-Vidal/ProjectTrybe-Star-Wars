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

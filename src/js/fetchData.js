const axios = require('axios').default;

const fetchData = async (value, step) => {
  const response = await axios.get(
    `https://pixabay.com/api/?key=29183300-4ae58040b754f339761bcd063&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${step}`
  );
  return response;
};

export default fetchData;

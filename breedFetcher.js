//endpoint: https://api.thecatapi.com/v1/breeds/search
//documentation: https://docs.thecatapi.com/api-reference/breeds/breeds-search

const request = require('request');



const fetchBreedDescription = function(BREED, callback) {

  const URL = 'https://api.thecatapi.com/v1/breeds/search?q=';
  
  
  let breedDescription;
  
  request(URL + BREED, (error, response, body) => {

    try {
      let data = JSON.parse(body);
      data = data[0];
      breedDescription = data.description;
      
    } catch (e) {
      return callback(e, null);
    }
    return callback(null, breedDescription);
  
  });

};


module.exports = { fetchBreedDescription };
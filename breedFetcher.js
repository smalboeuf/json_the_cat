//endpoint: https://api.thecatapi.com/v1/breeds/search
//documentation: https://docs.thecatapi.com/api-reference/breeds/breeds-search

const request = require('request');
const args = process.argv;

args.splice(0, 2);

const breedFetcher = function(args) {


  const URL = 'https://api.thecatapi.com/v1/breeds/search?q=';
  const BREED = args[0];
  
  console.log(URL + BREED);
  
  request(URL + BREED, (error, response, body) => {

    try {
      let data = JSON.parse(body);
      data = data[0];
      console.log(data.description);
    } catch (e) {
      console.log(e.name);
    }
  
  });


  return "searching...";
};



console.log(breedFetcher(args));
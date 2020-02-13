//endpoint: https://api.thecatapi.com/v1/breeds/search
//documentation: https://docs.thecatapi.com/api-reference/breeds/breeds-search

const request = require('request');
const fs = require('fs');
const args = process.argv;

args.splice(0, 2);

const breedFetcher = function (args) {

  const URL = 'https://api.thecatapi.com/v1/breeds/search?q='
  const BREED = args[0];
  

  request(URL+BREED, (error, response, body) => {
    if (error !== undefined) {
      console.log(error);
    } else {

      let data = JSON.parse(body);
      data = data[0];
      console.log(data["weight"]);
    }
  
});

}



console.log(breedFetcher(args));
const args = process.argv;
const { fetchBreedDescription } = require('./breedFetcher');

args.splice(0,2);
const BREED = args[0];


fetchBreedDescription(BREED, (error, desc) => {
  if (error) {
    console.log("Error fetch details: ", error);
  } else {
    console.log(desc);
  }
});
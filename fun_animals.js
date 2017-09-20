const fs = require('fs');
const http = require('http');
const querystring = require('querystring');
var animalData = processFile();

const server = http.createServer((req, res) => {
  let animalResult = ""
  let letter = req.url.split("/")[1]
  if (letter !== "favicon.ico" && letter !== "") {
    console.log(letter);
    animalResult = getAnimals(letter)
    console.log(animalResult);
  }

  // console.log(req.url);
  res.write(`The Animals you requested: \n ${animalResult}`)
  res.end()
})

server.listen(8000, ()=> console.log("Listening"))

function processFile(){
  fs.readFile('./animals.txt', 'utf-8', (err,data) => {
    let result = []
    if (err) {
      console.log(err);
      return;
    }
    animalData = data.split('\n')
    return animalData

  })
}

function getAnimals(letter) {
  let result = []
  animalData.forEach( (animal)=>{
    if (animal && animal[0].toLowerCase() === letter) {
      result.push(animal)
    }
  })
  result = result.join("\n")
  return result
}

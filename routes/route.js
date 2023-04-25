const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const underScore =require('lodash');

const welcome =require('../../src/logger/logger.js');
const helper =require('../../src/util/helper.js')
const formatter =require('../../src/validator/formatter.js')

router.get('/movies', function(req,res){
  let movi=["Rang de basanti", "The shining" ,"Lord of the rings", "Batman begins"];

  res.send(movi);
});

router.get("/movies/:indexNumber", function (req, res) {
let movi = [
  "Rang de basanti",
  "The shining",
  "Lord of the rings",
  "Batman begins",
];

if (req.params.indexNumber > -1 && req.params.indexNumber < movi.length) 
{
  res.send(movi[req.params.indexNumber]);
} 
else 
{
  res.send("Use a valid index number");
}
});
router.get("/films", function (req,res) {
  let film=[{"id":1,"name":"The Shining"},{"id":2,"name":"Incendies"},{"id":3,"name":"Rang de Basanti"},{"id":4,"name":"Finding Nemo"}];
  res.send(film);
});

router.get("/films/:filmId",function(req,res){
  let film=[{"id":1,"name":"The Shining"},{"id":2,"name":"Incendies"},{"id":3,"name":"Rang de Basanti"},{"id":4,"name":"Finding Nemo"}];
  for(let i=0;i<film.length;i++)
  {
      let per=film[i];
      if(per.id==req.params.filmId)
      {
          res.send(per);
      }
      else
      {
          res.send("No movie exists with this id");
      }
  }
  
});
router.get('/test-you', function (req, res) {
  
  res.send('Hello there, welcome to this application!')
});

module.exports = router;

router.get('/test-me', function (req, res) {
    res.send("hii");
    welcome.welcome();
    helper.printDate();
    helper.printMonth();
    helper.printBatchInfo();
    formatter.trim1();
    formatter.changetoLowerCase();
    formatter.changetoUpperCase();

    var chunkFunction = underScore.chunk(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], 3);
    console.log(chunkFunction);
     var tailFunction = underScore.tail([1,3,5,7,9,11,13,15,17,19])
     console.log(tailFunction);
     let arr1=[4,7,2,1,7];
     let arr2=[3,4,9];
     let arr3=[5,6,0];
     let arr4=[10,4,0];
     let arr5=[3,6,88];
     var unionFunction =underScore.union(arr1,arr2,arr3,arr4,arr5);
     console.log(unionFunction);
     let pair=[["horror","The Shining"],["drama","Titanic"],["Thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
     var fromPairsFunction = underScore.fromPairs(pair);
     console.log(fromPairsFunction);





});

router.get('/test-you', function (req, res) {
    
    res.send('Hello there, welcome to this application!')
});

module.exports = router;
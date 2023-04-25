const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

const express = require('express');
const app = express();




// Q1. write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing


app.get('/sol1', function (req, res){
    let arr= [1,2,3,5,6,7];
    let sum =(7*(7+1))/2;  
    let add = 0;
    for (let i=0; i <arr.length; i++) {
        add +=arr[i];
    }
    let missingNumber = sum - add;
    res.send(  { data: missingNumber  }  );


});




// Q2. write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing


app.get("/sol2", function (req, res) {
  let arr = [33, 34, 35, 37, 38];
  let missingNumber;


  const firstNumber = arr[0];
  const lastNumber = arr[arr.length - 1];
  const sequenceLength = arr.length + 1;


  const expectedSum = (sequenceLength * (firstNumber + lastNumber)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num);


  missingNumber = expectedSum - actualSum;


  res.send({ data: missingNumber });
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

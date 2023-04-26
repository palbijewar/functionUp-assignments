const express = require("express");
const route = express.Router();
/*
My github repository link : https://github.com/palbijewar/functionUp-assignments.git

ASSIGNMENT:
you will be given an array of persons ( i.e an array of objects )..each person will have  a {name: String , age: Number, votingStatus: true/false(Boolean)}
take input in query param as votingAge..and for all the people above that age, change votingStatus as true
also return an array consisting of only the person that can vote

WRITE A POST API TO THE ABOVE


take this as sample for array of persons:


*/
let persons = [
  {
    name: "Pal Bijewar",
    age: 22,
    votingStatus: false,
  },
  {
    name: "Pragati",
    age: 23,
    votingStatus: false,
  },
  {
    name: "Rahul",
    age: 16,
    votingStatus: false,
  },
  {
    name: "Farheena",
    age: 13,
    votingStatus: false,
  },
  {
    name: "Pritesh",
    age: 25,
    votingStatus: false,
  },
];
route.post("/voting", (req, res) => {
  const newArr = [];
  const votingAge = req.query.votingAge;
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].age >= votingAge) {
      persons[i].votingStatus = true;
      newArr.push(persons[i].name);
    }
  }
  res.send({ data: { eligibleToVote: newArr },modifiedPersonData:persons, status: true });
  
  console.log(newArr);
});

module.exports = route;

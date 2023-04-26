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
    name: "PK",
    age: 10,
    votingStatus: false,
  },
  {
    name: "SK",
    age: 20,
    votingStatus: false,
  },
  {
    name: "AA",
    age: 70,
    votingStatus: false,
  },
  {
    name: "SC",
    age: 5,
    votingStatus: false,
  },
  {
    name: "HO",
    age: 40,
    votingStatus: false,
  },
];
route.post("/person", (req, res) => {
  const nameArr = [];
  const votingAge = req.query.votingAge;
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].age >= votingAge) {
      persons[i].votingStatus = true;
      nameArr.push(persons[i].name);
    }
  }
  res.send({ data: { eligibleToVote: nameArr },modifiedPersonData:persons, status: true });
  
  console.log(nameArr);
});

module.exports = route;

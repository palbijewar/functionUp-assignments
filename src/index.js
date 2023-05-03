const express = require('express');
const bodyParser = require('body-parser');
const route = require('../src/routes/booksRoute');
const route2 = require('../src/routes/authorsRoute');
const route3 = require('../src/routes/publishersRoute');

const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb://127.0.0.1:27017/bookAPI", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);
app.use('/', route2);
app.use('/', route3);





app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

// My github url : https://github.com/palbijewar/functionUp-assignments.git
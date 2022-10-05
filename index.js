const express = require('express');
const bodyparser = require('body-parser'); // Without this req.body in post request wont work
const app = express();
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json({limit: '50mb'}));
app.use(bodyparser.urlencoded({limit: '50mb', extended: true}));


const port = process.env.PORT || 3000;

var studentsRouter = require('./routes/students');

// CORS Setup
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT', 'POST', 'PATCH', 'DELETE', 'GET');
        return res.status(200).json({});
    }
  });

app.listen(port, () => console.log(`App is running in ${port}`));

app.use('/', studentsRouter);


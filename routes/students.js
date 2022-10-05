var express = require('express');
var router = express.Router();
var sql = require("../db");

// router.get('/info', function(req, res) {
//     sql.query(
//       `select * from test.emp`,
//       (err, rows) => {
//         if(!err){
//           res.send(rows);
//         }
//       });
//   });

router.get('/info', function(req, res) {
  sql.query(
    `select * from test.emp`,
    (err, rows) => {
      if(!err){
        res.send(rows);
      }
    });
});

  router.post('/studentInsert', function(req, res) {
    sql.query(
        `INSERT INTO test.emp(emp_id) VALUES (${req.body.id})`,
        (err, rows) => {
          if(!err){
            res.send(rows);
          }
        });
  });

module.exports = router;
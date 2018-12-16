const express = require("express");
const router = express.Router();
const pool = require("../pool");

router.get("/news", (req, res) => {
  var bar = parseInt(req.query.bar);
  var pages = parseInt(req.query.pages);
  var sql = 'SELECT * FROM news  LIMIT ?,?'
  pool.query(sql,[bar,pages],(err,result) => {
    if (err) throw (err);
    res.send(result)
  })
});

router.get("/pon", (req, res) => {
  var sql = "SELECT count(id) AS c FROM news";
   pool.query(sql,(err, result) =>{
     if (err) throw err;
      var pageSize=Math.ceil(result[0].c/4);
      res.send(pageSize.toString())
}); 
})
module.exports = router; 
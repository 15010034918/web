const express = require("express");
const router = express.Router();
const pool = require("../pool");
router.get("/details", (req, res) => {
  var id = parseInt(req.query.id);
  var sql = 'SELECT d.Tdetail,n.caption FROM detail d,news n WHERE d.id=n.id AND d.id=?'
  pool.query(sql,[id],(err,result) => {
    if (err) throw (err);
    res.send(result)
  })
});

router.get('/caption',(req,res)=>{
  var id=parseInt(req.query.id);
  var sql='SELECT caption FROM news WHERE id=?'
  pool.query(sql,[id],(err,result)=>{
    if(err) throw (err);
    res.send(result)
  })
})

module.exports = router; 
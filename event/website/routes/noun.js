const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/noun", (req, res) => {
  var id = req.query.id;
  var sql ='SELECT info,url_img,title FROM noun WHERE  id=?';
  pool.query(sql,[id],(err,result)=>{
    if (err) throw (err);
    res.send(result);
  })
})

module.exports=router;
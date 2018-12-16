
const express = require("express");
const router = express.Router();
const pool = require("../pool");

router.post("/login", (req, res) => {
  var $uname = req.body.uname; 
  var $upwd = req.body.upwd;
  var sql = "select * from user_data where uname=? and upwd=?";
  pool.query(sql, [$uname,$upwd], (err, result) => {
    if (err) console.log(err);
    if (result.length == 1) {
      req.session.uid = result[0]['uid'];
      res.send({
        ok: 1
      });
    } else {
      res.send({
        ok: 0,
        msg: "用户名或密码错误！"
      })
    }
  })
})
router.get('islogin', (req, res) => {
  if (req.session === undefined)
    res.send({
      ok: 0
    })
  else
    res.send({
      ok: 1
    })
})
module.exports = router;
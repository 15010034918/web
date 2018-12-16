//引入mysql
const pool=require('../pool')
//express下的路由器
const express = require('express');
//创建
var router = express.Router();
//查询是否注册
router.post('/uname', (req, res) => {
  var $uname = req.body.uname;
  if (!$uname) {
    res.send('用户名不能为空');
    return;
  }
  var sql = 'select * from user_data where uname=?'
  pool.query(sql, [$uname], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.send('0');
    } else {
      res.send('1')
    }
  });
});

router.post('/reg', (req, res) => {
  var obj = req.body;
  var $uname = obj.uname;
  var $upwd = obj.upwd;
  if (!$upwd) {
    res.send('密码不能为空');
    return;
  }

  var sql = 'select * from user_data where uname=?'
  pool.query(sql, [$uname], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.send('0');
      return;
    } else {
      pool.query('insert into user_data values(null,?,?,null,null,null,null,null,null)', [$uname, $upwd], (err, result) => {
        if (err) throw err;
        res.send('注册成功');
      });
    }
  });
});
module.exports = router;

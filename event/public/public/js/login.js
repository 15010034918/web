//登录验证
$('.login').click(function () {
    var uname = $(".uname").val();
    var upwd = $(".upwd").val();
    if(uname==''){
      $('.unamesmall').css({'display':'block'})
    }
    if(upwd==''){
      $('.upwdsmall').css({'display':'block'})
    }else{
    $.ajax({
      url: "http://localhost:3000/user/login",
      type: "post",
      data: {uname,upwd},
      dataType: "json",
      success: function (res) {
      console.log(res);
      if(res.ok==1){
      window.location.href="./info.html";
      }else{
        $('.upwdsmall').css({'display':'block','color':'#950025'})
        $('.upwdsmall').text('账号或者密码错误');
      }
      }
    })
  }
})
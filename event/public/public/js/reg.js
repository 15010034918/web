var a = true; var b = false; var c = false;
$('#uname').focus(function () {
  var small = $('.unamesmall')
  small.text('账号必须是以1~4位字母开头8~11数字结尾');
  small.css({
    'display': 'block',
  })
})
$('#uname').blur(function () {
  var name = $('#uname')
  var small = $('.unamesmall')
  if (/^[A-Za-z]{1,4}\d{8,11}$/.test(name.val()) == true) {
    var uname = $("#uname").val();
    $.ajax({
      url: "http://localhost:3000/user/uname",
      type: "post",
      data: {uname},
      dataType: "json",
      success: function (res) {
        console.log(res);
        if(res==0){
          small.text('此账号已被注册');
          small.css({
            'display': 'block',
            'color': '#900520',
          })
          a = false;
        }else{
          small.text('账号可用');
          small.css({
            'display': 'block',
            'color': '#226699',
          })
        }
      }
    })
  } else {
    small.text('账号格式错误请重新输入');
    small.css({
      'display': 'block',
      'color': '#e9c900',
    })
  }
  setTimeout(() => {
    $('.unamesmall').css({
      'display': 'none'
    })
  }, 3000);
})
$('#upwd').focus(function () {
  var small = $('.upwdsmall')
  small.text('密码必须是以1~4位字母开头8~11数字结尾');
  small.css({ 'display': 'block', })
})
$('#upwd').blur( function () {
  var upwd = $('#upwd')
  var small = $('.upwdsmall')
  if (/^[A-Za-z]{1,4}\d{8,11}$/.test(upwd.val())==true){
    small.text('密码格式正确');
    small.css({
      'display': 'block',
      'color': '#226699'
    })
    b=true
  }
   setTimeout(() => {
     $('.upwdsmall').css({
       'display': 'none'
     })
   }, 2000);
})
$('.cpwd').focus(function () {
  var small = $('.cpwdsmall')
  small.css({ 'display': 'block', })
})
$('.cpwd').blur(function () {
  var upwd = $('#upwd')
  var cpwd = $('.cpwd')
  var small = $('.cpwdsmall')
  if (upwd.val() == cpwd.val()) {
    small.text('两次密码一致');
    small.css({ 'display': 'block', 'color': '#226699' })
    c = true;
  }else {
    small.text('两次密码不一致');
    small.css({'display': 'block','color': '#952002' })
}
  setTimeout(() => {
    $('.cpwdsmall').css({
      'display': 'none'
    })
  }, 2000);
})
$('.login').click(function () {
  if ((a == true && b == true) && c == true ) {
   // $('button[type="button"]').attr('type', 'submit');
   var uname = $("#uname").val();
   var upwd = $("#upwd").val();
   $.ajax({
     url: "http://localhost:3000/user/reg",
     type: "post",
     data: {uname,upwd},
     dataType: "json",
     success: function (res) {
       console.log(res);
     }
   })
   window.location.href="./info.html";
  }else{
    alert('不能提交注册')
  }
})


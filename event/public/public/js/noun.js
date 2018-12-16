//a标签的点击事件  添加class
var id = 1;
$('a.link').on('click', function (e) {
  url(id)
  var $a = $(e.target);
  id = $a.parent().index() + 1;
  $a.addClass('active').parent().siblings().children(':first-child').removeClass('active');
  var nav = $('.link.active').text();
  $('.subcolumn-nav-location').children(':last-child').children(':first-child').text(nav);
});
$(function () {
  url(id)
});
//根据id请求页面内容
function url(id) {
  $.ajax({
    url: "http://127.0.0.1:3000/user/noun?id=" + id,
    type: "get",
    dataType: "json",
    success: function (res) {
      var {info,url_img,title} = res[0];
      var html = `${info}<br><br>
       <p style="text-align: center;">
        <span > <img src = "${url_img}" title = "1532496893115729.jpg" width = "100%" height = "100%" >
       </span></p><p><br></p>`;
      var section = $(".met-editor");
      section.html(html);
      var title = `${title}`;
      var div = $('.tops');
      div.html(title);
    }
  })
}

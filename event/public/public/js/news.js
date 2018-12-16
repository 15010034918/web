var pageSize;
$(function () {
  var bar = 0;
  var pages = 4;
  url(bar,pages)
  pon()
  //下一页
  $('.met_pager .NextA').click(function(){
    //当前页
    var Cpage=$('.met_pager>div>a.Ahover').text()
    if(Cpage!=pageSize){
      var Ahover=$('.met_pager>div>a.Ahover').index()+1;
      var a=$('.met_pager>div>a:eq('+Ahover+')')
      a.addClass('Ahover').siblings().removeClass('Ahover')
      $('.imagesize').children().remove();
      bar+=pages
      url(bar,pages)
     }else{
       alert('最后一页了 亲❤')
     }
      //上一页
     if(Cpage>1){
      $('.met_pager .PreSpan').click(function(){
        var Ahover=$('.met_pager>div>a.Ahover').index()-1;
        if(Ahover>=0){
        var a=$('.met_pager>div>a:eq('+Ahover+')')
        a.addClass('Ahover').siblings().removeClass('Ahover')
        $('.imagesize').children().remove();
        bar-=pages
        url(bar,pages)
      };
      });
     };
    });
    //点击页码跳转
    $('.met_pager div').click(function (e){
      var $a = $(e.target);
      var Ahover=$('.met_pager div a.Ahover').index();
      var index=$a.index()
      var a=$('.met_pager>div>a:eq('+index+')')
      a.addClass('Ahover').siblings().removeClass('Ahover')
      if(index!=Ahover){
        $('.imagesize').children().remove();
        bar=(pages*index)
        url(bar,pages)
      }
    })
});

function url(bar,pages){
$.ajax({
  url: "http://127.0.0.1:3000/user/news?bar="+ bar+','+'&pages='+pages,
  type: "get",
  dataType: "json",
  success: function (res) {
      for(var i=0;i<res.length;i++){
        var {caption,coutent,img_url,id} = res[i];
        var html=` <li class="border-bottom1 news-jdf ">
        <div class="col-sm-3 news-left">
          <p class="time-day">24</p>
          <p class="time-my">
            <span>July</span>&nbsp;&nbsp;
            <span>2018</span>
          </p>
          <span class="time-hr"></span>
          <p class="time-desc"></p>
        </div>
        <div class="news-right col-sm-9">
        <div class="news-img">
        <img src="${img_url}">
      </div>
      <div class="news-text">
        <h4 class="news-title">${caption}</h4>
        <span class="news-right-hr"></span>
        <p class="news-desc">${coutent}</p>
        <a href="http://127.0.0.1:8080/details.html?id=${id}" class="news-btn">查看详情</a>
      </div> 
        </div>
      </li>`
      $('.imagesize').append(html)
     }
  }
})
}
function pon(){
$.ajax({
  url: "http://127.0.0.1:3000/user/pon",
  type: "get",
  dataType: "json",
  success: function (res) {
     pageSize=res
     for(var i=1;i<=res;i++){
      var div=$('.met_pager>div')
      var html='<a>'+i+'</a>'
      div.append(html)
     }
     $('.met_pager>div>a:eq(0)').addClass('Ahover')
  }
})
}

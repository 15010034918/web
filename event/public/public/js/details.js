var href=window.location.href
var xid=href.split('=')
var id=xid[1]
$(function(){
   url(id)
   if(id==8){
    $('.hidden-xs-down:eq(1)').text('没有了')
   }else{
    turnpage(parseInt(id)+1)
   };
  if(id==1){
    $('.hidden-xs-down:eq(0)').text('没有了')
   }else{
    PreviousPages(parseInt(id)-1)
   };
});

 
 function url(id){
  $.ajax({
    url:'http://127.0.0.1:3000/user/details?id='+id,
    type:'get',
    dataType:'json',
    success:function(res){
     var {caption,Tdetail} = res[0];
     var html=`${Tdetail}`
     $('.met-editor').html(html)
     var html=`${caption}`
     $('.details-title>h1').html(html)
    }
  })
 }

function turnpage(id){
  $(function(){
    $.ajax({
      url:'http://127.0.0.1:3000/user/caption?id='+id,
      type:'get',
      dataType:'json',
      success:function(res){
      var {caption} = res[0];
      var caption={caption}.caption.substring(0,5);
      var html=` <a href="http://127.0.0.1:8080/details.html?id=`+id+`" title=" ${caption}" class="page-link pull-xs-right text-truncate">
      下一页   
      <span aria-hidden="true" class="hidden-xs-down">: `+caption+`...</span>
  </a>`
      $('.page-item:eq(1)').html(html)
    }
  })
})
}
function PreviousPages(id){
  $(function(){
    $.ajax({
      url:'http://127.0.0.1:3000/user/caption?id='+id,
      type:'get',
      dataType:'json',
      success:function(res){
      var {caption} = res[0];
      var caption={caption}.caption.substring(0,5);
      var html=` <li class="page-item m-b-0 disable">
      <a href="http://127.0.0.1:8080/details.html?id=`+id+`" title=" ${caption}" class="page-link pull-xs-left text-truncate">
          上一页                
          <span aria-hidden="true" class="hidden-xs-down">:`+caption+`...</span>
      </a>
  </li>`
      $('.page-item:eq(0)').html(html)
    }
  })
})
}
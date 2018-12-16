$('.swiper-slide').on('click',function(e){
  var $tar=$(e.target);
  var index=$tar.index();
  if($tar.css('opacity')==0.4){
    $tar.css({'opacity':'1'});
    $tar.siblings().css({'opacity':'0.4'});
    $tar.addClass('on').siblings().removeClass('on');
  }
  var $tttt=$('.tttt:eq('+index+')');
  $tttt.siblings().css({'display':'none'});
  $tttt.css({'display':'block'});
})

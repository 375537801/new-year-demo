window.onload=function(){
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical', //��ֱ
    loop: true, //�޷�ѭ��
    onSlideChangeEnd: function(swiper){ //�л���ĳһ����Ļص�����

      var index=swiper.activeIndex;
      //��ǰ������� ����ɾ��
      $('.swiper-slide').removeClass('current').eq(index).addClass('current');

      //�����ǰ�ǵ�һ�� ���Ƶ�һ���Ķ���
      if(index==1 || index==4){
        $('.one').addClass('wobble');
      }else{
        $('.one').removeClass('wobble');
      }

    }

  })
    $('.music').click(function(){
      $(this).toggleClass('play');
      // ת�ɳ�js����
      var audio=$('.audio1').get(0);
      //��Ƶ����
      if(audio.paused){
        audio.play();
      }else{
        audio.pause();
      }
    })
}


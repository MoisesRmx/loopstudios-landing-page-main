$(function(){
  const barrLtr = $('.menu-lkn');
  const btnMn = $('.btn-menu');
  btnMn.click(function() {
    barrLtr.toggleClass('mtr-mn');
    btnMn.toggleClass('open')
  });

  const chng = $('.card');
  const chngTw = $('.card p');
  chng.mouseover(function() {
    $(this).add('.ctnd-crtns').addClass('filtro')
  });
  chng.mouseout(function() {
    $(this).add('.ctnd-crtns').removeClass('filtro')
  });
});

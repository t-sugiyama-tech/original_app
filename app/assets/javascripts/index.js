$(document).on('turbolinks:load', function (){
  
  // トップページのナビゲーションサイドバー
  $('.side-bar__inner__navi--open-icon').click(function () {
    $('.side-bar__inner__menu').show(2000);
  });
  $('.side-bar__inner__close--icon').click(function () {
    $('.side-bar__inner__menu').hide();
  });

  // トップページのripple
  $(function (){
    $(".main-content__ripple").ripples({
      dropRadius: 10,
      perturbance: 0.025,
    });
  });

  // Q&Aページ
  $('.main-section__form--question').click(function () {
    $(this).next('.main-section__form--answer').slideToggle(1500);
    // ボードの移動
    $(".moving-surfing--image").animate({'left':'1000px'},9000);
  });

  // カレンダー機能
  $('#datepicker').datepicker({
    changeYear: true,
    showButtonPanel: true,
  });

  // 商品一覧画面 商品名・価格・いいね
  $(".main-container__inner__item-box__contents")
    .on('mouseover', function(){
      $(this).find('.main-container__inner__item-box__contents__outline').show();
    })
    .on('mouseout', function(){
      $(this).find('.main-container__inner__item-box__contents__outline').hide();
    })
});
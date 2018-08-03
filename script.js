$('.slider').slick({
    // アクセシビリティ。左右ボタンで画像の切り替えをできるかどうか
    accessibility: true,
    // 自動再生。trueで自動再生される。
    autoplay: true,
    // 自動再生で切り替えをする時間
    autoplaySpeed: 3000,
    // 自動再生や左右の矢印でスライドするスピード
    speed: 400,
    // 自動再生時にスライドのエリアにマウスオンで一時停止するかどうか
    pauseOnHover: true,
    // 自動再生時にドットにマウスオンで一時停止するかどうか
    pauseOnDotsHover: true,
    // 切り替えのアニメーション。ease,linear,ease-in,ease-out,ease-in-out
    cssEase: 'ease',
    // 画像下のドット（ページ送り）を表示
    dots: false,
    // ドットのclass名をつける
    dotsClass: 'dot-class',
    // ドラッグができるかどうか
    draggable: true,
    // 切り替え時のフェードイン設定。trueでon
    fade: false,
    // 左右の次へ、前へボタンを表示するかどうか
    arrows: true,
    // 無限スクロールにするかどうか。最後の画像の次は最初の画像が表示される。
    infinite: true,
    // 最初のスライダーの位置
    initialSlide: 0,
    // 画像の遅延表示。‘ondemand’or'progressive'
    lazyLoad: 'ondemand',
    // スライドのエリアにマウスオーバーしている間、自動再生を止めるかどうか。
    pauseOnHover: true,
    // スライドのエリアに画像がいくつ表示されるかを指定
    slidesToShow: 1,
    // 一度にスライドする数
    slidesToScroll: 1,
    // タッチスワイプに対応するかどうか
    swipe: true,
    // 縦方向へのスライド
    vertical: false,
    // 表示中の画像を中央へ
    　centerMode: true,
    // 中央のpadding
    centerPadding: '60px'
});

//button-effects

// Dont affraid its just for start demonstrate the animation

$(".btn").click(function () {

    if ($('.btn').hasClass('btn-animation')) {
        $('.sign').delay(400).removeClass('sgn-anim');
        $('.smile').removeClass('smile-animation');
        $('.btn').removeClass('btn-animation');
        $('.eyes').removeClass('eyes-animation');
        $('.right-eye').removeClass('l-eye-animation');
        $('.left-eye').removeClass('l-eye-animation');
        $('.bubble').removeClass('bbl');

    } else {

        $('.sign').delay(400).addClass('sgn-anim');
        $('.smile').addClass('smile-animation');
        $('.btn').addClass('btn-animation');
        $('.eyes').addClass('eyes-animation');
        $('.right-eye').addClass('l-eye-animation');
        $('.left-eye').addClass('l-eye-animation');
        setTimeout(function () {
            $('.bubble').addClass('bbl');
        }, 800);
    }

});

//button-effects

//loading

$(function(){
  $('#container').css('display','none');
  $('#loader').fadeIn(400);
});
$(window).load(function () { //全ての読み込みが完了したら実行
  $('#loader-bg').delay(3000).slideUp(400);
  $('#loader').delay(2000).fadeOut(1000);
  $('#container').css('display', 'block');
});

//loading
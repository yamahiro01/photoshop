// ローディング画面
//読み込みが完了したら実行
$(window).on('load',function () {
  // ローディングが10秒以内で終わる場合、読み込み完了後ローディング非表示
  endLoading();
});

//10秒経過した段階で、上記の処理を上書き、強制終了
setTimeout('endLoading()', 10000);

//ローディング非表示処理
function endLoading(){
  // 1秒かけてロゴを非表示にし、その後0.8秒かけて背景を非表示にする
  $('.js-loading img').fadeOut(1000, function(){
    $('.js-loading').fadeOut(800);
  });
}

// ヘッダースクロール制御
// $(function() {
//   var pos = $(".services").offset().top;
//   $(window).scroll(function () {
//     // 固定ヘッダー時
//     if ($(this).scrollTop() > pos) {
//         $(".header").addClass("fixed");
//         $(".header-logo > a > img").attr('src', 'img/1x/logo-b.svg');
//         $(".nav-items__item > a > p").css('color', '#191919'); 
//         $(".nav-items > .border > hr").css('border-color', '#191919'); 
//         $(".c-hamburger > span").css('background-color', '#191919'); 
//     // 通常ヘッダー時
//     } else {
//         $(".header").removeClass("fixed");
//         $(".header-logo > a > img").attr('src', 'img/1x/logo-w.svg');
//         $(".nav-items__item > a > p").css('color','#ffffff');
//         $(".nav-items > .border > hr").css('border-color', '#ffffff'); 
//         $(".c-hamburger > span").css('background-color', '#ffffff');
//     }
//   });
// });

// ヘッダースクロール制御（関数）
function FixedAnime() {
  var mvH = $('.mv').outerHeight(true) - 160;  // -160は位置調整用（スムーススクロールでの表示との兼ね合い） 
  var scroll = $(window).scrollTop();
  if (scroll >= mvH) {  //.mvの高さ以上になったら（固定ヘッダー）
      $('.header').addClass('fixed');  //fixedというクラス名を付与
      $(".header-logo > a > img").attr('src', 'img/1x/logo-b.svg');
      $(".nav-items__item > a > p").css('color', '#191919'); 
      $(".nav-items > .border > hr").css('border-color', '#191919'); 
      $(".c-hamburger > span").css('background-color', '#191919');
    } else {  //それ以外は（通常ヘッダー）
      $('.header').removeClass('fixed');  //fixedというクラス名を除去
      $(".header-logo > a > img").attr('src', 'img/1x/logo-w.svg');
      $(".nav-items__item > a > p").css('color','#ffffff');
      $(".nav-items > .border > hr").css('border-color', '#ffffff'); 
      $(".c-hamburger > span").css('background-color', '#ffffff');
  }
}

// ヘッダースクロール制御（実行部分）
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  FixedAnime();  /* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});

// ハンバーガーメニュー&ドロワー
$(function(){
  const hamburger = $('#js-hamburger');
  const drawer = $('#js-drawer');
  const top = $('#js-top');
  const services = $('#js-services');
  const about = $('#js-about');
  const works = $('#js-works');
  const recruit = $('#js-recruit');
  const contact = $('#js-contact');
  
  // ハンバーガーメニュークリック後にドロワー表示
  hamburger.on('click',function(){
    hamburger.toggleClass("is-checked")
    drawer.toggleClass("is-checked")
  })

  // ドロワー内の「トップ」クリック後にドロワーを閉じ、元に戻る
  top.on('click',function(){
    hamburger.removeClass("is-checked")
    drawer.removeClass("is-checked")
  })

  // ドロワー内の「事業内容」クリック後にドロワーを閉じ、元に戻る
  services.on('click',function(){
    hamburger.removeClass("is-checked")
    drawer.removeClass("is-checked")
  })

  // ドロワー内の「園崎組について」クリック後にドロワーを閉じ、元に戻る
  about.on('click',function(){
    hamburger.removeClass("is-checked")
    drawer.removeClass("is-checked")
  })

  // ドロワー内の「園崎組の実績」クリック後にドロワーを閉じ、元に戻る
  works.on('click',function(){
    hamburger.removeClass("is-checked")
    drawer.removeClass("is-checked")
  })

  // ドロワー内の「採用情報」クリック後にドロワーを閉じ、元に戻る
  recruit.on('click',function(){
    hamburger.removeClass("is-checked")
    drawer.removeClass("is-checked")
  })

  // ドロワー内の「お問い合わせ」クリック後にドロワーを閉じ、元に戻る
  contact.on('click',function(){
    hamburger.removeClass("is-checked")
    drawer.removeClass("is-checked")
  })
})

// スムーススクロール
$(function () {
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 80;  // 固定ヘッダーぶんをマイナス調整
    var speed = 500;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});


// リンクの現在地（事業内容）
$(function(){
  var services = $('.services-link');
  var positionH = $('.services').offset().top - 250;
  var positionE = $('.about').offset().top - 250; 
	$(window).scroll(function () {
		if ($(this).scrollTop() > positionH && $(this).scrollTop() < positionE) { //スクロールが500pxを越えたら
			services.css('color', '#0000ff');
		}
	});
});

// リンクの現在地（園崎組について）
$(function(){
  var about = $('.about-link');
  var positionH = $('.about').offset().top - 250;
  var positionE = $('.works').offset().top - 250; 
	$(window).scroll(function () {
		if ($(this).scrollTop() > positionH && $(this).scrollTop() < positionE) { //スクロールが500pxを越えたら
			about.css('color', '#0000ff');
		}
	});
});

// リンクの現在地（園崎組の実績）
$(function(){
  var works = $('.works-link');
  var positionH = $('.works').offset().top - 250;
  var positionE = $('.recruit').offset().top - 250; 
	$(window).scroll(function () {
		if ($(this).scrollTop() > positionH && $(this).scrollTop() < positionE) { //スクロールが500pxを越えたら
			works.css('color', '#0000ff');
		}
	});
});

// リンクの現在地（採用情報）
$(function(){
  var recruit = $('.recruit-link');
  var positionH = $('.recruit').offset().top - 250;
  var positionE = $('.contact').offset().top - 250; 
	$(window).scroll(function () {
		if ($(this).scrollTop() > positionH && $(this).scrollTop() < positionE) { //スクロールが500pxを越えたら
			recruit.css('color', '#0000ff');
		}
	});
});

// リンクの現在地（エントリーはこちら）
$(function(){
  var contact = $('.contact-link');
  var positionH = $('.contact').offset().top - 250;
  var positionE = $('.corp-info').offset().top - 250; 
	$(window).scroll(function () {
		if ($(this).scrollTop() > positionH && $(this).scrollTop() < positionE) { //スクロールが500pxを越えたら
			contact.css('color', '#0000ff');
		}
	});
});
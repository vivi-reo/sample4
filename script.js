// slickのサイトからSingleItemのコードをコピーし、
// 次へ前へボタンを非表示、ドットあり、自動再生あり、自動再生のスピードを2000にする


$(function() {
    $('.contents').hide(); //初期では非表示

    $('.button').click(function() {
        $('.contents').toggle();
    })

});

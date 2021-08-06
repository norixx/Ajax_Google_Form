(function ($) {

  const formControl = (() => {

    const formSubmit = ($gForm) => {

      $gForm.on('submit', (e) => {
        e.preventDefault()

        // 送信するデータ Google Formのソースコードから抜いてくる
        // ★自分のフィールドの内容に差し替えること
        const submitData = {
          'entry.1074108472': $('[name=entry-1074108472]').val(),
          'entry.1366130775': $('[name=entry-1366130775]').val(),
          'entry.800197535':  $('[name=entry-800197535]').val(),
        }

        $.ajax({
          // ★自分のGoogle FormのURLに差し替えること
          url        : 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdnVPLqPExr4iLBja_4nmyEt_rsT6ceZOnA7ivAmpJZRVm7kQ/formResponse',
          method     : 'post',
          crossDomain: true,
          dataType   : 'xml',
          data       : submitData,
        })
        .done((a,b,c)=>{
          // 本来の成功後の処理
        })
        .fail((a,b,c) => {
          // CORSは回避できない＋エラー扱いになる。が、データ送信はできるので送信後処理はここ
          // thank.htmlへ自動遷移
          // ★自分の送信後ページのURLに差し替えること
          window.location.href = 'thanks.html';
        })

      })

    }

    const init = ($gForm) => {
      formSubmit($gForm);
    }

    return { init }

  })();

  if ($('#g-form').length !== 0) {
    // ★自分のフォームのIDに差し替えること
    formControl.init($('#g-form'))
  }

})(jQuery);
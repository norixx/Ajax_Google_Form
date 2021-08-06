(function ($) {

  const formControl = (() => {

    const formSubmit = () => {

      const $gForm = $('#g-form')

      $gForm.on('submit', (e) => {
        e.preventDefault()

        // 送信するデータ Google Formのソースコードから抜いてくる
        const submitData = {
          'entry.1074108472': $('[name=entry-1074108472]').val(),
          'entry.1366130775': $('[name=entry-1366130775]').val(),
          'entry.800197535':  $('[name=entry-800197535]').val(),
        }

        $.ajax({
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
          // CORSは回避できない＋エラー扱いになる。が、データ送信はできるので
          // 送信後処理はここ
          // thank.htmlへ自動遷移
          window.location.href = 'thanks.html';
        })

      })

    }

    const init = () => {
      formSubmit();
    }

    return { init }

  })();

  if ($('#g-form').length !== 0) {
    formControl.init()
  }

})(jQuery);
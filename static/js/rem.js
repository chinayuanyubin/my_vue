(function(doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
      if (clientWidth > 750) {
        document.body.style.width = "750px";
        document.body.style.margin = "0 auto";
        document.documentElement.style.fontSize = "200px";
      }
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

function layerMsg(msg, time) {

  layer && layer.open({
    anim: false,
    content: msg,
    skin: 'msg',
    time: time || 2 //2秒后自动关闭
  });
}

// 切换菜单
function toggleMenu() {
  $.each($(".toggle-menu"), function() {
    var self = $(this);
    var trigger = self.find(".trigger-show-menu");
    var menu = self.find(".hide-menu");
    var icon = trigger.find(".iconfont");
    menu.on("zhide", function() {
      var timer = setTimeout(function() {
        menu.css("display", "none");
        clearTimeout(timer);
      }, 200);
      icon.removeClass('icon-chahao').addClass('icon-shaixuan');
    })
    menu.on("zshow", function() {
      menu.css("display", "block");
      icon.removeClass('icon-shaixuan').addClass('icon-chahao');
    })
    trigger.click(function() {
      if (menu.css("display") === "none") {
        menu.trigger('zshow');
      } else {
        menu.trigger('zhide');
      }
    })
    menu.click(function() {
      menu.trigger('zhide');
    })

  })
} 


  /*// 翻页加载
  function loadMore(callback, parentSelector) {
    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
      var clientHeight = $(this).height();
      var bodyHeight = $(document).height();
      if (scrollTop + clientHeight + 50 >= bodyHeight) {
        var data = callback();

        if (data === '') {
          $(window).off("scroll");
        } else {
          console.log(data)
          parentSelector.append(data);
        }

      }

    })
  }
  */
